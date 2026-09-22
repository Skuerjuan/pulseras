"use client";

import { useState } from "react";

export default function AddToCartButton({ disabled }) {
  const [added, setAdded] = useState(false);

  if (disabled) {
    return (
      <button
        type="button"
        disabled
        className="rounded-full bg-black/20 px-12 py-4 font-sans text-lg font-normal text-black/50"
      >
        Sin stock
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setAdded(true)}
      className="rounded-full bg-brand-blue px-14 py-4 font-sans text-xl font-normal text-white transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-95 active:translate-y-0"
    >
      {added ? "¡Agregado!" : "Agregar al carrito"}
    </button>
  );
}
