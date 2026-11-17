
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight, Coffee } from "lucide-react";
import {
  categories,
  menuItems,
  type MenuCategory,
  type MenuItem,
} from "@/data/cafeData";

function MenuCard({ item }: { item: MenuItem }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="group overflow-hidden rounded-[28px] border border-espresso/5 bg-white shadow-[0_10px_35px_rgba(30,24,21,0.04)] transition-shadow duration-300 hover:shadow-[0_20px_55px_rgba(30,24,21,0.12)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#E8DED2]">
        {!imageFailed ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#EADBCD] to-[#D3B9A2]">
            <div className="text-center text-espresso/40">
              <Coffee className="mx-auto mb-3" size={40} strokeWidth={1.2} />
              <span className="text-xs uppercase tracking-[0.2em]">
                Coffee house
              </span>
            </div>
          </div>
        )}

        <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3 py-2 text-xs font-semibold text-espresso shadow-sm backdrop-blur">
          {item.price.toLocaleString("sr-RS")} RSD
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[25px] leading-tight text-espresso">
            {item.name}
          </h3>
          <ArrowUpRight
            size={20}
            className="shrink-0 text-caramel transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>

        <p className="mt-3 min-h-[44px] text-sm leading-relaxed text-espresso/60">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function MenuSection() {
  const [active, setActive] = useState<MenuCategory>("kafa");
  const reduceMotion = useReducedMotion();

  const visibleItems = menuItems.filter(
    (item) => item.category === active
  );

  return (
    <section
      id="meni"
      className="scroll-mt-24 bg-cream px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-caramel">
              Naša signature ponuda
            </p>
            <h2 className="max-w-2xl text-4xl leading-tight tracking-tight text-espresso sm:text-5xl md:text-6xl">
              Mali rituali.
              <br />
              <span className="italic text-caramel">
                Veliko uživanje.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-espresso/60 md:text-base">
            Od prvog jutarnjeg espressa do laganog večernjeg
            predaha. Pronađi svoj omiljeni ukus.
          </p>
        </motion.div>

        <div
          role="tablist"
          aria-label="Kategorije menija"
          className="mb-10 flex gap-2 overflow-x-auto pb-3"
        >
          {categories.map((category) => {
            const selected = active === category.id;

            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                id={`tab-${category.id}`}
                aria-selected={selected}
                aria-controls="meni-panel"
                onClick={() => setActive(category.id)}
                className={`relative shrink-0 rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-300 ${
                  selected
                    ? "text-white"
                    : "bg-white text-espresso/70 hover:text-espresso"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="active-menu-category"
                    className="absolute inset-0 rounded-full bg-espresso"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">
                  {category.label}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="meni-panel"
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
        >
          <motion.div
            layout
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {visibleItems.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <p className="mt-9 text-center text-xs text-espresso/45">
          Prikazane cene i ponuda su primer za demo sajt.
        </p>
      </div>
    </section>
  );
}
