
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Meni", href: "#meni" },
  { label: "Bašta i prostor", href: "#prostor" },
  { label: "O nama", href: "#o-nama" },
  { label: "Lokacija", href: "#lokacija" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-espresso/75 px-5 py-3 text-white shadow-xl shadow-black/10 backdrop-blur-xl md:px-8">
        <a href="#pocetna" className="relative z-10 text-lg font-bold tracking-tight">
          ATELIER<span className="text-[#E5A47C]">.</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/75 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#lokacija"
          className="hidden items-center gap-2 rounded-full bg-caramel px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-espresso lg:inline-flex"
        >
          Kako do nas <ArrowUpRight size={16} />
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={open}
          className="relative z-10 rounded-full p-2 lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/15 bg-espresso p-6 text-white shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#lokacija"
                onClick={() => setOpen(false)}
                className="rounded-full bg-caramel px-5 py-3 text-center font-semibold"
              >
                Kako do nas
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
