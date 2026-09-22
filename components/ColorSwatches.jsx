"use client";

import { useState } from "react";

export default function ColorSwatches({ colors }) {
  const firstAvailable = colors.findIndex((color) => color.available);
  const [selected, setSelected] = useState(
    firstAvailable === -1 ? null : firstAvailable
  );

  return (
    <div className="flex justify-center gap-3">
      {colors.map((color, index) => {
        const isSelected = selected === index;

        if (!color.available) {
          return (
            <div
              key={color.name}
              title={`${color.name} (sin stock)`}
              className="relative flex h-10 w-10 cursor-not-allowed items-center justify-center border border-black/30 bg-gray-200"
            >
              <span className="text-lg leading-none text-black/50">✕</span>
            </div>
          );
        }

        return (
          <button
            key={color.name}
            type="button"
            title={color.name}
            onClick={() => setSelected(index)}
            style={{ backgroundColor: color.hex }}
            className={`h-10 w-10 border transition-all duration-200 ${
              isSelected
                ? "border-2 border-brand-blue shadow-[0_0_0_3px_rgba(22,189,231,0.35)]"
                : "border-black/40 hover:border-black"
            }`}
          />
        );
      })}
    </div>
  );
}
