// Datos de ejemplo de los productos. En un proyecto real esto vendría
// de un CMS, una base de datos o un archivo de configuración del catálogo.

export const products = [
  {
    id: "miyuki-dorada",
    name: "Pulsera con piedras naturales miyuki",
    price: 20000,
    image: "/images/bracelet-detail.jpg",
    inStock: true,
    isNew: true,
    colors: [
      { name: "Dorado", hex: "#C7A24A", available: true },
      { name: "Rosa", hex: "#B3466C", available: true },
      { name: "Negro", hex: "#111111", available: true },
      { name: "Blanco", hex: "#EDEDED", available: false },
    ],
  },
  {
    id: "cristales-checos",
    name: "Pulsera con cristales checos",
    price: 22000,
    image: "/images/bracelet-detail.jpg",
    inStock: true,
    isNew: true,
    colors: [
      { name: "Dorado", hex: "#C7A24A", available: true },
      { name: "Rosa", hex: "#B3466C", available: true },
      { name: "Negro", hex: "#111111", available: false },
      { name: "Blanco", hex: "#EDEDED", available: true },
    ],
  },
  {
    id: "gold-filled-clasica",
    name: "Pulsera gold filled clásica",
    price: 25000,
    image: "/images/bracelet-detail.jpg",
    inStock: true,
    isNew: true,
    colors: [
      { name: "Dorado", hex: "#C7A24A", available: true },
      { name: "Rosa", hex: "#B3466C", available: false },
      { name: "Negro", hex: "#111111", available: true },
      { name: "Blanco", hex: "#EDEDED", available: true },
    ],
  },
  {
    id: "aceros-combinada",
    name: "Pulsera combinada en aceros",
    price: 18000,
    image: "/images/bracelet-detail.jpg",
    inStock: false,
    isNew: true,
    colors: [
      { name: "Dorado", hex: "#C7A24A", available: false },
      { name: "Rosa", hex: "#B3466C", available: false },
      { name: "Negro", hex: "#111111", available: false },
      { name: "Blanco", hex: "#EDEDED", available: false },
    ],
  },
  {
    id: "piedras-naturales-amatista",
    name: "Pulsera piedras naturales amatista",
    price: 21000,
    image: "/images/bracelet-detail.jpg",
    inStock: true,
    isNew: false,
    colors: [
      { name: "Dorado", hex: "#C7A24A", available: true },
      { name: "Rosa", hex: "#B3466C", available: true },
      { name: "Negro", hex: "#111111", available: true },
      { name: "Blanco", hex: "#EDEDED", available: true },
    ],
  },
  {
    id: "miyuki-blanca",
    name: "Pulsera miyuki blanca y dorada",
    price: 20000,
    image: "/images/bracelet-detail.jpg",
    inStock: true,
    isNew: false,
    colors: [
      { name: "Dorado", hex: "#C7A24A", available: true },
      { name: "Rosa", hex: "#B3466C", available: false },
      { name: "Negro", hex: "#111111", available: true },
      { name: "Blanco", hex: "#EDEDED", available: true },
    ],
  },
  {
    id: "cristales-transparentes",
    name: "Pulsera cristales transparentes",
    price: 19000,
    image: "/images/bracelet-detail.jpg",
    inStock: true,
    isNew: false,
    colors: [
      { name: "Dorado", hex: "#C7A24A", available: true },
      { name: "Rosa", hex: "#B3466C", available: true },
      { name: "Negro", hex: "#111111", available: true },
      { name: "Blanco", hex: "#EDEDED", available: false },
    ],
  },
  {
    id: "gold-filled-charm",
    name: "Pulsera gold filled con dije",
    price: 23000,
    image: "/images/bracelet-detail.jpg",
    inStock: false,
    isNew: false,
    colors: [
      { name: "Dorado", hex: "#C7A24A", available: false },
      { name: "Rosa", hex: "#B3466C", available: false },
      { name: "Negro", hex: "#111111", available: false },
      { name: "Blanco", hex: "#EDEDED", available: false },
    ],
  },
];

export function getProductById(id) {
  return products.find((product) => product.id === id);
}

export function formatPrice(value) {
  return `$${value.toLocaleString("es-AR")}`;
}
