import "./globals.css";

export const metadata = {
  title: "Noe | Pulseras artesanales",
  description:
    "Emprendimiento de pulseras artesanales con Miyuki, piedras naturales, cristales checos, gold filled y aceros.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
