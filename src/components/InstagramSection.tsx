
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Camera, ArrowUpRight } from "lucide-react";
import { cafeInfo } from "@/data/cafeData";

const photos = [
  {
    src: "/images/instagram-1.jpg",
    alt: "Sveže pripremljena kafa",
  },
  {
    src: "/images/instagram-2.jpg",
    alt: "Trenuci u bašti",
  },
  {
    src: "/images/instagram-3.jpg",
    alt: "Slatki predah uz kafu",
  },
  {
    src: "/images/instagram-4.jpg",
    alt: "Večernja atmosfera",
  },
];

type InstagramPhotoProps = {
  src: string;
  alt: string;
  index: number;
};

function InstagramPhoto({
  src,
  alt,
  index,
}: InstagramPhotoProps) {
  const [failed, setFailed] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion ? false : { opacity: 0, y: 25 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      className="group relative aspect-square overflow-hidden rounded-[24px] bg-[#D9C8B5]"
    >
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#D8C7B4] to-[#9B806B] p-5 text-center">
          <span className="font-serif text-xl italic text-white/90">
            {alt}
          </span>
        </div>
      )}

      <div className="absolute inset-0 flex items-center justify-center bg-espresso/0 opacity-0 transition-all duration-300 group-hover:bg-espresso/35 group-hover:opacity-100">
        <Camera size={30} className="text-white" />
      </div>
    </motion.div>
  );
}

export default function InstagramSection() {
  const reduceMotion = useReducedMotion();

  const hasInstagram =
    cafeInfo.instagram.trim().length > 0;

  return (
    <section
      id="instagram"
      className="bg-[#EDE8E0] px-5 py-24 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* NASLOV SEKCIJE */}
        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-caramel">
              Trenuci koje volimo
            </p>

            <h2 className="text-4xl leading-tight sm:text-5xl md:text-6xl">
              Uhvaćeno u
              <br />
              <span className="italic text-caramel">
                dobrom trenutku.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-espresso/65">
            Miris kafe, sunce u bašti i spontani susreti.
            Neki trenuci jednostavno zaslužuju fotografiju.
          </p>
        </motion.div>

        {/* INSTAGRAM GALERIJA */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {photos.map((photo, index) => (
            <InstagramPhoto
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              index={index}
            />
          ))}
        </div>

        {/* INSTAGRAM DUGME */}
        <div className="mt-12 flex flex-col items-center gap-3">
          {hasInstagram ? (
            <a
              href={cafeInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-espresso px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-caramel"
            >
              <Camera size={19} />
              Zaprati nas na Instagramu
              <ArrowUpRight size={17} />
            </a>
          ) : (
            <span className="inline-flex items-center gap-3 rounded-full border border-espresso/15 px-7 py-4 text-sm font-semibold text-espresso/60">
              <Camera size={19} />
              Instagram profil uskoro
            </span>
          )}

          <p className="text-center text-xs text-espresso/45">
            Galerija je ilustrativna i koristi demo fotografije.
          </p>
        </div>
      </div>
    </section>
  );
}
