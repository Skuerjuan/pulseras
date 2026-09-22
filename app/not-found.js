import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="font-display text-4xl text-black underline decoration-1 underline-offset-8">Producto no encontrado</h1>
        <p className="font-sans text-black/70">
          La pulsera que buscas no existe o ya no está disponible.
        </p>
        <Link
          href="/#catalogo"
          className="mt-2 rounded-full bg-brand-blue px-6 py-2 font-sans text-sm font-medium text-white"
        >
          Volver al catálogo
        </Link>
      </main>
    </>
  );
}
