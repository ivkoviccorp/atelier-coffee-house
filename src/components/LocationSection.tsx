
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  MapPin,
  Clock3,
  Navigation,
  ArrowUpRight,
  Coffee,
} from "lucide-react";
import { cafeInfo } from "@/data/cafeData";

export default function LocationSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="lokacija"
      className="scroll-mt-24 bg-cream px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-caramel">
            Pronađi nas
          </p>

          <h2 className="text-4xl leading-tight sm:text-5xl md:text-6xl">
            Dobra kafa je
            <br />
            <span className="italic text-caramel">
              bliže nego što misliš.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-espresso/65">
            U kraju koji poznaješ, na mestu na koje ćeš
            poželeti da se vratiš. Svrati na svoju omiljenu
            kafu i ostani koliko ti prija.
          </p>
        </motion.div>

        <div className="grid overflow-hidden rounded-[32px] bg-white shadow-xl shadow-espresso/5 lg:grid-cols-2">
          {/* INFORMACIJE */}
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-caramel/10 text-caramel">
              <Coffee size={27} />
            </div>

            <h3 className="mb-10 text-3xl sm:text-4xl">
              Vidimo se na kafi.
            </h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-caramel">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="mb-2 text-sm font-bold">
                    Lokacija
                  </p>
                  <p className="leading-7 text-espresso/65">
                    Atelier Coffee House, Beograd
                    <br />
                    Beograd, Srbija
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-caramel">
                  <Clock3 size={20} />
                </div>
                <div>
                  <p className="mb-2 text-sm font-bold">
                    Radno vreme
                  </p>
                  <p className="leading-7 text-espresso/65">
                    Svakog dana · 07:00–23:00
                    <br />
                    <span className="text-xs">
                      Demo radno vreme
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <a
              href={cafeInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex w-fit items-center gap-3 rounded-full bg-espresso px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-caramel"
            >
              <Navigation size={18} />
              Otvori Google Maps
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* MAPA */}
          <div className="relative min-h-[380px] bg-[#E9E4DB] lg:min-h-[570px]">
            
<iframe
  title="Mapa Beograda"
  src="https://www.google.com/maps?q=Beograd%2C%20Srbija&output=embed"
  className="absolute inset-0 h-full w-full border-0"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>


            <div className="pointer-events-none absolute bottom-5 left-5 right-5 rounded-2xl border border-white/40 bg-white/90 p-4 shadow-lg backdrop-blur-md sm:left-auto sm:right-5 sm:w-64">
              <p className="text-sm font-bold text-espresso">
                Atelier Coffee House
              </p>
              <p className="mt-1 text-xs text-espresso/60">
                Atelier Coffee House · Beograd
              </p>
              <p className="mt-2 text-[11px] text-espresso/45">
                Prikazana je oblast, ne tačna adresa lokala.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
