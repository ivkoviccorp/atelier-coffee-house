
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  Coffee,
  Leaf,
  PawPrint,
  Wifi,
} from "lucide-react";
import { useRef } from "react";

type SpaceImageProps = {
  src: string;
  alt: string;
  className?: string;
  parallax?: boolean;
};

function SpaceImage({
  src,
  alt,
  className = "",
  parallax = false,
}: SpaceImageProps) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["-5%", "5%"]
  );

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden bg-[#D9CBB9] ${className}`}
    >
      <motion.div
        style={
          parallax && !reduceMotion
            ? { y, scale: 1.12 }
            : { scale: 1 }
        }
        className="absolute inset-0"
      >
        {!failed ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 65vw"
            className="object-cover"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#B9A38E] to-[#706451] px-6 text-center">
            <span className="font-serif text-3xl italic text-white/80">
              {alt}
            </span>
          </div>
        )}
      </motion.div>
    </div>
  );
}

const features = [
  { icon: Coffee, label: "Unutra i u bašti" },
  { icon: Clock3, label: "Svakog dana 07:00–23:00" },
  { icon: PawPrint, label: "Pet friendly" },
  { icon: Wifi, label: "Brz Wi-Fi" },
];

const atmospheres = {
  day: {
    eyebrow: "Kad grad uspori",
    title: "Dan u bašti",
    description:
      "Malo zelenila, omiljena kafa i vreme koje pripada samo tebi. Idealno mesto za jutarnji ritual, razgovor ili predah.",
    image: "/images/garden.jpg",
    alt: "Bašta kafića tokom dana",
  },
  night: {
    eyebrow: "Još jedna, pa polako",
    title: "Veče u lokalu",
    description:
  "Topla svetla, prijatna muzika i poznata lica. Za druženja koja se spontano produže, sve do 23h.",
    image: "/images/evening.jpg",
    alt: "Topla večernja atmosfera kafića",
  },
} as const;

export default function BentoSpace() {
  const [period, setPeriod] = useState<"day" | "night">("day");
  const reduceMotion = useReducedMotion();
  const current = atmospheres[period];

  return (
    <section
      id="prostor"
      className="scroll-mt-24 bg-[#EDE8E0] px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-caramel">
              Prostor sa karakterom
            </p>
            <h2 className="max-w-3xl text-4xl leading-tight sm:text-5xl md:text-6xl">
              Mesto gde želiš
              <br />
              <span className="italic text-caramel">
                da ostaneš duže.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-espresso/65 md:text-base">
            Bilo da voliš miran kutak unutra ili svež vazduh
            u bašti, ovde se svaki trenutak pretvara u mali
            ritual uživanja.
          </p>
        </motion.div>

        {/* BENTO GALERIJA */}
        <div className="grid gap-4 md:grid-cols-12 md:grid-rows-[260px_260px]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[360px] overflow-hidden rounded-[28px] md:col-span-7 md:row-span-2 md:min-h-0"
          >
            <SpaceImage
              src="/images/garden.jpg"
              alt="Naša zelena bašta"
              className="h-full w-full"
              parallax
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            <div className="absolute bottom-7 left-7 text-white">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-2 text-xs backdrop-blur-md">
                <Leaf size={14} /> Na otvorenom
              </span>
              <h3 className="text-3xl md:text-4xl">
                Naša mala oaza.
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative min-h-[270px] overflow-hidden rounded-[28px] md:col-span-5 md:min-h-0"
          >
            <SpaceImage
              src="/images/interior.jpg"
              alt="Topao enterijer kafića"
              className="h-full w-full"
              parallax
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl">
                Udobno. Baš kako treba.
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative min-h-[270px] overflow-hidden rounded-[28px] md:col-span-5 md:min-h-0"
          >
            <SpaceImage
              src="/images/details.jpg"
              alt="Detalji koji stvaraju atmosferu"
              className="h-full w-full"
              parallax
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl">
                Sitnice čine razliku.
              </h3>
            </div>
          </motion.div>
        </div>

        {/* PREDNOSTI LOKALA */}
        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.label}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 18 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                }}
                className="flex items-center gap-3 rounded-2xl border border-espresso/5 bg-white/70 px-4 py-5 sm:px-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/15 text-[#657760]">
                  <Icon size={19} />
                </span>
                <span className="text-xs font-semibold sm:text-sm">
                  {feature.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* DAN / VECE */}
        <div className="mt-24 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-caramel">
              Dva lica istog mesta
            </p>

            <h3 className="mb-7 text-4xl leading-tight sm:text-5xl">
              Tvoj ritam.
              <br />
              <span className="italic text-caramel">
                Tvoj trenutak.
              </span>
            </h3>

            <div
              role="group"
              aria-label="Izaberi atmosferu"
              className="mb-9 inline-flex rounded-full bg-white p-1.5 shadow-sm"
            >
              {(
                [
                  ["day", "Dan u bašti"],
                  ["night", "Veče u lokalu"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setPeriod(value)}
                  aria-pressed={period === value}
                  className={`relative rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                    period === value
                      ? "text-white"
                      : "text-espresso/65"
                  }`}
                >
                  {period === value && (
                    <motion.span
                      layoutId="atmosphere-pill"
                      className="absolute inset-0 rounded-full bg-espresso"
                      transition={{
                        type: "spring",
                        stiffness: 330,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={period}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 15 }
                }
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-caramel">
                  {current.eyebrow}
                </p>
                <h4 className="mb-4 text-3xl">
                  {current.title}
                </h4>
                <p className="max-w-md leading-8 text-espresso/65">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <a
              href="#lokacija"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-caramel px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-espresso"
            >
              Svrati do nas
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="relative h-[370px] overflow-hidden rounded-[32px] shadow-xl shadow-espresso/10 sm:h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={period}
                initial={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 1.06 }
                }
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <SpaceImage
                  key={period}
                  src={current.image}
                  alt={current.alt}
                  className="h-full w-full"
                />
              </motion.div>
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            <div className="pointer-events-none absolute bottom-6 left-6 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-md">
              {period === "day"
                ? "Sunčani trenuci"
                : "Večernja atmosfera"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
