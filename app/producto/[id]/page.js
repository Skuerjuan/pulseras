import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
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

  if (!product) {
    notFound();
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      {/* Fondo de hojas a pantalla completa, sin márgenes blancos */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-[url('/images/bg-leaves-horizontal.jpg')] bg-cover bg-center bg-no-repeat"
      />

      <Navbar />

      <main className="flex flex-1 items-center overflow-hidden">
        <section className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-8 px-6 sm:grid-cols-2 sm:gap-12">
          <div className="mx-auto aspect-square w-full max-w-[70vh] bg-black p-3 sm:max-w-none">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(min-width: 640px) 45vw, 90vw"
                className={`object-cover ${product.inStock ? "" : "grayscale"}`}
                priority
              />
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h1 className="font-display text-4xl leading-tight text-black underline decoration-1 underline-offset-8 sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-5 font-sans text-2xl text-black">
              {formatPrice(product.price)}
            </p>

            <div className="mt-6">
              <ColorSwatches colors={product.colors} />
            </div>

            <p className="mt-5 font-sans text-base text-black underline underline-offset-2">
              {product.inStock ? "Stock disponible" : "Sin stock"}
            </p>

            <div className="mt-8">
              <AddToCartButton disabled={!product.inStock} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
