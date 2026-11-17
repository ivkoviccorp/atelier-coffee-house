
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Coffee, Heart, MapPin } from "lucide-react";

function AboutImage() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative h-[420px] overflow-hidden rounded-[32px] bg-[#C9B8A5] md:h-[560px]">
      {!failed ? (
        <Image
          src="/images/about.jpg"
          alt="Priprema kafe u prijatnom ambijentu"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#D8C7B4] to-[#8E715C] p-8 text-center">
          <span className="font-serif text-4xl italic text-white">
            Kafa. Ljudi. Trenuci.
          </span>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />

      <div className="absolute bottom-6 left-6 rounded-full border border-white/30 bg-white/15 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md">
        <span className="flex items-center gap-2">
          <Coffee size={17} />
          Svaki dan počinje dobrom kafom
        </span>
      </div>
    </div>
  );
}

export default function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="o-nama"
      className="scroll-mt-24 bg-cream px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <AboutImage />
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-caramel">
            Naša priča
          </p>

          <h2 className="max-w-xl text-4xl leading-[1.15] sm:text-5xl md:text-6xl">
            Nije samo kafa.
            <br />
            <span className="italic text-caramel">
              To je tvoj trenutak.
            </span>
          </h2>

          <p className="mt-8 max-w-lg text-base leading-8 text-espresso/70">
           U ritmu Beograda postoji mesto zamišljeno za
male svakodnevne rituale. Za prvu jutarnju kafu,
spontana viđanja i razgovore koji traju malo duže.
          </p>

          <p className="mt-5 max-w-lg text-base leading-8 text-espresso/70">
            Volimo miris sveže pripremljene kafe, prijatnu
            atmosferu i onaj osećaj kada znaš da si na svom
            mestu. Bilo da dolaziš sam, sa društvom ili
            četvoronožnim prijateljem — dobrodošao si.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl bg-white p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage/15 text-[#657760]">
                <Heart size={20} />
              </span>
              <span className="text-sm font-semibold">
                Komšijska atmosfera
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-white p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage/15 text-[#657760]">
                <MapPin size={20} />
              </span>
              <span className="text-sm font-semibold">
                Atelier Coffee House
              </span>
            </div>
          </div>

          <a
            href="#lokacija"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-espresso px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-caramel"
          >
            Svrati na kafu
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
