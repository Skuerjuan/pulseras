import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/data/products";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/producto/${product.id}`}
      className="group block bg-white"
    >
      <div className="aspect-[3/4] bg-black p-2 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_0_0_4px_rgba(22,189,231,0.45)] group-hover:ring-2 group-hover:ring-brand-blue">
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
      <div className="border-x border-b border-black bg-white px-4 py-5 text-center">
        <p className="font-sans text-lg text-black">Pulsera XXXXX</p>
        <p className="mt-2 font-sans text-base italic text-black/70">
          {product.inStock ? formatPrice(product.price) : "Sin Stock"}
        </p>
      </div>
    </Link>
  );
}
