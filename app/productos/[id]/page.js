import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ColorSwatches from "@/components/ColorSwatches";
import AddToCartButton from "@/components/AddToCartButton";
import { getProductById, products, formatPrice } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export function generateMetadata({ params }) {
  const product = getProductById(params.id);
  return { title: product ? `${product.name} | Noe` : "Producto no encontrado" };
}

export default function ProductoPage({ params }) {
  const product = getProductById(params.id);

  if (!product) notFound();

  return (
    <div className="relative isolate h-[100dvh] overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-[url('/images/bg-leaves-horizontal.jpg')] bg-cover bg-center bg-no-repeat"
      />

      <div className="relative z-10 flex h-full flex-col">
        <Navbar />
        <main className="flex min-h-0 flex-1 items-center overflow-hidden py-4 sm:py-8">
          <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 sm:grid-cols-[minmax(270px,1fr)_minmax(300px,1fr)] sm:gap-16">
            <div className="mx-auto w-full max-w-[330px] bg-black p-3 sm:max-w-[370px]">
              <Image
                src={product.image}
                alt={product.name}
                width={521}
                height={607}
                sizes="(min-width: 640px) 45vw, 90vw"
                className={`block h-auto w-full object-cover ${product.inStock ? "" : "grayscale"}`}
                priority
              />
            </div>

            <div className="text-center font-sans">
              <h1 className="text-4xl font-normal leading-tight text-black sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-6 text-2xl text-black">{formatPrice(product.price)}</p>
              <div className="mt-6"><ColorSwatches colors={product.colors} /></div>
              <p className="mt-5 text-lg text-black">
                {product.inStock ? "Stock disponible" : "Sin stock"}
              </p>
              <div className="mt-8"><AddToCartButton disabled={!product.inStock} /></div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
