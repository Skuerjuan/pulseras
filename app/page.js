import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import ProductCard from "@/components/ProductCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import { products } from "@/data/products";

export default function Home() {
  const nuevosModelos = products.filter((product) => product.isNew).slice(0, 4);

  return (
    <div className="relative isolate min-h-screen overflow-x-hidden">
      <div
  aria-hidden="true"
  className="home-leaf-background pointer-events-none fixed inset-0 z-0 opacity-80"
  style={{
    backgroundAttachment: "fixed", // Parallax effect
    backgroundImage: "url('/images/bg-leaves-horizontal.jpg')",
    backgroundSize: "cover",
    // backgroundPosition: "center",
  }}
/>

      <div className="relative z-10">
        <Navbar />

        <main>
        <section
  id="inicio"
  className="relative mx-auto flex min-h-[100vh] max-w-6xl flex-col-reverse items-center gap-8 px-4 text-center sm:flex-row sm:text-left"
>
  <div className="flex-1">
    <h1 className="font-display text-7xl sm:text-8xl leading-none text-black underline decoration-1 underline-offset-[14px] text-center">
      Hola, soy Noe!
    </h1>
    <p className="mx-auto mt-4 max-w-lg font-sans text-lg leading-relaxed text-black/80 text-center">
      Este es mi emprendimiento de pulseras artesanales.
      <br />
      Trabajo con Miyuki, piedras naturales, cristales checos,
      gold filled y aceros.
      <br />
      Si quieres hacer tu pedido háblame por mis redes.
    </p>
    <div className="mt-4 flex justify-center items-center">
      <SocialLinks />
    </div>
  </div>

  <div className="relative h-72 w-72 shrink-0 overflow-hidden rounded-full sm:h-96 sm:w-96">
    <Image
      src="/images/profile.jpg"
      alt="Foto de Noe"
      fill
      sizes="500px"
      className="object-cover"
      priority
    />
  </div>
</section>

          <section className="relative mx-auto max-w-5xl px-6 pb-20">
            <h2 className="text-center font-display text-5xl text-black underline decoration-1 underline-offset-[10px] sm:text-6xl">
              Nuevos modelos!
            </h2>
            <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {nuevosModelos.map((product, index) => (
                <RevealOnScroll key={product.id} delay={(index % 4) * 100}>
                  <ProductCard product={product} className="hover:shadow-lg hover:ring-4 hover:ring-black" />
                </RevealOnScroll>
              ))}
            </div>
          </section>

          <section id="catalogo" className="relative mx-auto max-w-5xl scroll-mt-24 px-6 pb-24">
            <h2 className="text-center font-display text-5xl text-black underline decoration-1 underline-offset-[10px] sm:text-6xl">
              Catálogo
            </h2>
            <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {products.map((product, index) => (
                <RevealOnScroll key={product.id} delay={(index % 4) * 100}>
                  <ProductCard product={product} className="hover:shadow-lg hover:ring-4 hover:ring-black" />
                </RevealOnScroll>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}