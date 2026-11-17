
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
}

export type MenuCategory =
  | "kafa"
  | "osvezenje"
  | "vece"
  | "slatko";

export interface CafeInfo {
  name: string;
  neighborhood: string;
  city: string;
  openingHours: string;
  instagram: string;
  mapsUrl: string;
}


export const cafeInfo = {
  name: "ATELIER COFFEE HOUSE",
  neighborhood: "Beograd",
  city: "Beograd",
  openingHours: "Svakog dana 07:00–23:00",
  instagram: "",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Beograd+Srbija",
};


export const categories: {
  id: MenuCategory;
  label: string;
}[] = [
  { id: "kafa", label: "Kafa & topli napici" },
  { id: "osvezenje", label: "Osveženje & sokovi" },
  { id: "vece", label: "Večernja ponuda" },
  { id: "slatko", label: "Slatko & peciva" },
];


export const menuItems: MenuItem[] = [
  // KAFA I TOPLI NAPICI
  {
    id: "espresso",
    name: "Espresso",
    description: "Intenzivan ukus, bogata aroma i savršena krema.",
    price: 230,
    image: "/images/espresso.jpg",
    category: "kafa",
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    description: "Espresso sa nežnom, kremastom mlečnom penom.",
    price: 290,
    image: "/images/cappuccino.jpg",
    category: "kafa",
  },
  {
    id: "flat-white",
    name: "Flat White",
    description: "Dupli espresso i svilenkasta tekstura mleka.",
    price: 340,
    image: "/images/flat-white.jpg",
    category: "kafa",
  },
  {
    id: "dupli-espresso",
    name: "Dupli espresso",
    description: "Dve doze vrhunske kafe za snažan početak dana.",
    price: 330,
    image: "/images/double-espresso.jpg",
    category: "kafa",
  },

  // OSVEZENJE I SOKOVI
  {
    id: "iced-latte",
    name: "Iced Latte",
    description: "Osvežavajuća ledena kafa za lagano popodne.",
    price: 360,
    image: "/images/iced-latte.jpg",
    category: "osvezenje",
  },
  {
    id: "limunada",
    name: "Domaća limunada",
    description: "Sveže ceđen limun, menta i puno leda.",
    price: 320,
    image: "/images/lemonade.jpg",
    category: "osvezenje",
  },
  {
    id: "coca-cola",
    name: "Coca-Cola",
    description: "Klasično gazirano osveženje, servirano rashlađeno.",
    price: 290,
    image: "/images/coca-cola.jpg",
    category: "osvezenje",
  },
  {
    id: "fanta",
    name: "Fanta",
    description: "Voćno, gazirano osveženje sa ukusom pomorandže.",
    price: 290,
    image: "/images/fanta.jpg",
    category: "osvezenje",
  },

  // VECERNJA PONUDA
  {
    id: "spritz",
    name: "Sunset Spritz",
    description: "Bezalkoholni aperitiv sa citrusnim notama.",
    price: 490,
    image: "/images/spritz.jpg",
    category: "vece",
  },
  {
    id: "pivo",
    name: "Točeno pivo 0,3 l",
    description: "Sveže točeno i prijatno rashlađeno.",
    price: 330,
    image: "/images/beer.jpg",
    category: "vece",
  },
  {
    id: "rakija",
    name: "Domaća rakija 0,03 l",
    description: "Tradicionalna voćna rakija bogate arome.",
    price: 320,
    image: "/images/rakija.jpg",
    category: "vece",
  },
  {
    id: "whisky",
    name: "Whisky 0,03 l",
    description: "Odabrani viski sa toplim, punim ukusom.",
    price: 490,
    image: "/images/whisky.jpg",
    category: "vece",
  },

  // SLATKO I PECIVA
  {
    id: "cheesecake",
    name: "Cheesecake",
    description: "Kremasti kolač sa prelivom od šumskog voća.",
    price: 450,
    image: "/images/cheesecake.jpg",
    category: "slatko",
  },
  {
    id: "croissant",
    name: "Puter kroasan",
    description: "Hrskavo, puterasto pecivo, savršeno uz kafu.",
    price: 280,
    image: "/images/croissant.jpg",
    category: "slatko",
  },
  {
    id: "brownie",
    name: "Čokoladni brownie",
    description: "Sočan čokoladni kolač intenzivnog ukusa.",
    price: 390,
    image: "/images/brownie.jpg",
    category: "slatko",
  },
  {
    id: "pistachio-croissant",
    name: "Kroasan sa pistaćima",
    description: "Lisnato pecivo punjeno kremom od pistaća.",
    price: 420,
    image: "/images/pistachio-croissant.jpg",
    category: "slatko",
  },
];
