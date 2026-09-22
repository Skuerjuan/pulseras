import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black">
      <nav className="mx-auto flex max-w-6xl items-center justify-center gap-10 px-6 py-4 text-xs tracking-[0.2em] text-white sm:gap-14 sm:text-sm">
        <Link href="/" className="transition-colors hover:text-brand-blue">
          INICIO
        </Link>
        <Link
          href="/#catalogo"
          className="transition-colors hover:text-brand-blue"
        >
          CATÁLOGO
        </Link>
                <Link href="/" className="transition-colors hover:text-brand-blue">
          CARRITO
        </Link>
      </nav>
    </header>
  );
}
