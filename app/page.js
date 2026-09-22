import Image from "next/image";
import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";
import ProductCard from "@/components/ProductCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import { products } from "@/data/products";

export default function Home() {
  const nuevosModelos = products.filter((product) => product.isNew).slice(0, 4);

  return (
    <>
      {/* Fondo de hojas a pantalla completa, sin márgenes blancos */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-[url('/images/bg-leaves-vertical.jpg')] bg-cover bg-center bg-no-repeat"
      />

      <Navbar />

      <main className="relative">
        {/* HERO */}
        <section
          id="inicio"
          className="relative mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 px-6 pt-16 pb-14 text-center sm:flex-row sm:text-left"
        >
          <div className="flex-1">
            <h1 className="font-display text-6xl leading-tight text-black underline decoration-1 underline-offset-[14px] sm:text-8xl">
              Hola, soy Noe!
            </h1>
            <p className="mx-auto mt-8 max-w-md font-sans text-lg italic leading-relaxed text-black/80 sm:mx-0">
              Este es mi emprendimiento de pulseras artesanales.
              <br />
              Trabajo con Miyuki, piedras naturales, cristales checos,
              gold filled y aceros.
              <br />
              Si quieres hacer tu pedido háblame por mis redes.
            </p>
            <div className="mt-6 flex justify-center sm:justify-start">
              <SocialLinks />
            </div>
          </div>

          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-[45%] sm:h-52 sm:w-52">
            <Image
              src="/images/profile.jpg"
              alt="Foto de Noe"
              fill
              sizes="208px"
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* NUEVOS MODELOS */}
        <section className="relative mx-auto max-w-5xl px-6 pb-20">
          <h2 className="text-center font-display text-5xl text-black underline decoration-1 underline-offset-[10px] sm:text-6xl">
            Nuevos modelos!
          </h2>
          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {nuevosModelos.map((product, index) => (
              <RevealOnScroll key={product.id} delay={(index % 4) * 100}>
                <ProductCard product={product} />
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* CATALOGO */}
        <section id="catalogo" className="relative mx-auto max-w-5xl scroll-mt-24 px-6 pb-24">
          <h2 className="text-center font-display text-5xl text-black underline decoration-1 underline-offset-[10px] sm:text-6xl">
            Catálogo
          </h2>
          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {products.map((product, index) => (
              <RevealOnScroll key={product.id} delay={(index % 4) * 100}>
                <ProductCard product={product} />
              </RevealOnScroll>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
