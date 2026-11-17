
"use client";

import { ArrowUpRight, Coffee, MapPin } from "lucide-react";
import { cafeInfo } from "@/data/cafeData";

const footerLinks = [
  { label: "Početna", href: "#" },
  { label: "Meni", href: "#meni" },
  { label: "Bašta i prostor", href: "#prostor" },
  { label: "O nama", href: "#o-nama" },
  { label: "Lokacija", href: "#lokacija" },
];

export default function Footer() {
  const hasInstagram = cafeInfo.instagram.trim().length > 0;

  return (
    <footer className="overflow-hidden bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-5 pt-20 sm:px-8 md:pt-28">

        {/* GLAVNI NASLOV */}
        <div className="mb-20 border-b border-white/15 pb-16">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-caramel">
            Tvoja sledeća kafa čeka
          </p>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-5xl leading-[1.1] sm:text-6xl md:text-7xl">
              Vidimo se
              <br />
              <span className="italic text-caramel">
                na kafi.
              </span>
            </h2>

            <a
              href="#lokacija"
              className="group inline-flex w-fit items-center gap-4 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold transition hover:border-caramel hover:bg-caramel"
            >
              Kako do nas
              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* FOOTER KOLONE */}
        <div className="grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-4">

          {/* BREND */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-caramel text-white">
                <Coffee size={22} />
              </span>

              <span className="text-xl font-bold tracking-tight">
                ATELIER.
              </span>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-8 text-white/55">
              Kafa koja okuplja. Atmosfera koja ostaje.
              Tvoje omiljeno mesto za mali predah,
              prijatne razgovore i posebne trenutke
              u srcu Beograda.
            </p>

            {hasInstagram && (
              <a
                href={cafeInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-caramel transition hover:text-white"
              >
                Pronađi nas na Instagramu
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>

          {/* NAVIGACIJA */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.15em]">
              Istraži
            </h3>

            <nav className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-white/55 transition hover:translate-x-1 hover:text-caramel"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* LOKACIJA I RADNO VREME */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.15em]">
              Svrati do nas
            </h3>

            <div className="space-y-5 text-sm leading-7 text-white/55">
              <p className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-caramel"
                />
                <span>
                  Beograd
                  <br />
                  Srbija
                </span>
              </p>

              <div>
                <p className="font-semibold text-white/80">
                  Radno vreme
                </p>
                <p>Svakog dana</p>
                <p>07:00–23:00</p>
              </div>

              <a
                href={cafeInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-caramel transition hover:text-white"
              >
                Pogledaj na mapi
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT I POTPIS DEVELOPERA */}
        <div className="flex flex-col items-center justify-center gap-2 border-t border-white/15 py-7 text-center text-xs text-white/50 sm:flex-row sm:gap-1">

          <span>© 2026 Developed by</span>

          <span className="font-semibold text-caramel">
            ivkovic.web
          </span>

          <span className="hidden sm:inline">.</span>

          <span>All rights reserved.</span>
        </div>
      </div>

      {/* VELIKI NATPIS NA DNU */}
      <div className="pointer-events-none overflow-hidden px-2 text-center">
        <span className="block whitespace-nowrap text-[13vw] font-black leading-[0.8] tracking-[-0.075em] text-white/[0.055]">
          ATELIER.
        </span>
      </div>
    </footer>
  );
}
