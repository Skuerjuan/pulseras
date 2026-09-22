import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/20 bg-black px-6 py-7 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center font-sans text-sm sm:flex-row sm:text-left">
        <p>© {new Date().getFullYear()} Noe · Pulseras artesanales</p>
        <div className="flex gap-6 text-xs tracking-[0.14em]">
          <Link href="/" className="transition-colors hover:text-brand-blue">
            INICIO
          </Link>
          <Link href="/#catalogo" className="transition-colors hover:text-brand-blue">
            CATÁLOGO
          </Link>
        </div>
      </div>
    </footer>
  );
}
