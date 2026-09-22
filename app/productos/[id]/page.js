import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ColorSwatches from "@/components/ColorSwatches";
import AddToCartButton from "@/components/AddToCartButton";
import { getProductById, products, formatPrice } from "@/data/products";

export default function ProductoPage({ params }) {
  const product = getProductById(params.id);

  if (!product) notFound();

  return (
    <div className="relative isolate h-[100dvh] overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-[url('/images/bg-leaves-horizontal.jpg')] bg-cover bg-center bg-no-repeat"
        style={{ backgroundSize: "115%" }}
      />

      <div className="relative z-10 flex h-full flex-col">
        <Navbar />
        <main className="flex min-h-0 flex-1 items-center overflow-hidden py-1 sm:py-2">
          <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-1 px-1 sm:grid-cols-[minmax(220px,1fr)_minmax(360px,1.3fr)] sm:gap-2">
            <div className="mx-auto w-full max-w-[300px] bg-black p-1 sm:max-w-[360px]">
              <Image
                src={product.image}
                alt={product.name}
                width={521}
                height={607}
                sizes="(min-width: 640px) 30vw, 70vw"
                className={`block h-auto w-full object-cover ${product.inStock ? "" : "grayscale"}`}
                priority
              />
            </div>

            <div className="flex h-full mr-auto flex-col justify-center text-center font-sans gap-4">
              <h1 className="whitespace-nowrap text-4xl font-normal leading-tight text-black sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-4 whitespace-nowrap text-4xl text-black sm:text-4xl">
                {formatPrice(product.price)}
              </p>
              <div className="mt-6 scale-125"><ColorSwatches colors={product.colors} /></div>
              <p className="mt-6 whitespace-nowrap text-2xl text-black sm:text-2xl underline">
                {product.inStock ? "Stock disponible" : "Sin stock"}
              </p>
              <div className="mt-8 scale-125"><AddToCartButton disabled={!product.inStock} /></div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}