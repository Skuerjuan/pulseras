import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/data/products";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/productos/${product.id}`}
      className="group block border border-black bg-white transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[8px_8px_0_0_rgba(22,189,231,0.65)]"
    >
      <div className="aspect-[3/4] bg-black p-2">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
            className={`object-cover transition-transform duration-300 ease-out group-hover:scale-105 ${
              product.inStock ? "" : "grayscale"
            }`}
          />
        </div>
      </div>
      <div className="bg-white px-4 py-5 text-center">
        <p className="font-sans text-lg text-black">Pulsera XXXXX</p>
        <p className="mt-2 font-sans text-base italic text-black/70">
          {product.inStock ? formatPrice(product.price) : "Sin Stock"}
        </p>
      </div>
    </Link>
  );
}