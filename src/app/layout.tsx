
import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atelier Coffee House | Kafa i uživanje na Voždovcu",
  description:
    "Tvoje novo omiljeno mesto za kafu, druženje i opuštanje u Atelier Coffee House. Uživaj u prijatnom ambijentu i bašti.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body className={`${playfair.variable} ${jakarta.variable}`}>
        {children}
      </body>
    </html>
  );
}
