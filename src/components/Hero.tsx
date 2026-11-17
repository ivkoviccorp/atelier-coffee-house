
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Clock3, MapPin } from "lucide-react";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="pocetna"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-espresso text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/cafe-hero.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#1E1815]/90 via-[#1E1815]/60 to-[#1E1815]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1E1815]/70 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 md:px-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-md">
            <MapPin size={14} className="text-[#E5A47C]" />
            Atelier Coffee House · Beograd
          </div>

          <h1 className="text-5xl leading-[1.12] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]">
            Tvoje omiljeno
            <br />
            mesto za <span className="italic text-[#E5A47C]">kafu.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/80 md:text-xl">
            Jutarnji espresso, opušteno popodne u bašti i večeri
            koje se ne žure. Tvoj kutak u srcu Atelier Coffee House.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#meni"
              className="inline-flex items-center gap-3 rounded-full bg-caramel px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#B85C36]"
            >
              Pogledaj meni <ArrowUpRight size={18} />
            </a>

            <a
              href="#lokacija"
              className="inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-espresso"
            >
              Pronađi nas <MapPin size={18} />
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-6 text-sm text-white/75">
            <span className="flex items-center gap-2">
              <Clock3 size={17} className="text-[#E5A47C]" />
              Svakog dana 07:00–23:00
            </span>
            <span>Specialty kafa</span>
            <span>Bašta &amp; enterijer</span>
          </div>
        </motion.div>
      </div>

      <a
        href="#meni"
        aria-label="Skroluj do menija"
        className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/80 md:flex"
      >
        Istraži
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40">
          <ArrowDown size={18} />
        </span>
      </a>
    </section>
  );
}
