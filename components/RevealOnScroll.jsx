"use client";

import { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // Respetar la preferencia de "menos movimiento" del sistema operativo:
    // si está activada, se muestra directamente sin animar.
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return undefined;
    }

    // Si el navegador no soporta IntersectionObserver, mostramos directo.
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }

    let observer;
    // Esperamos dos frames antes de empezar a observar: así el navegador
    // llega a pintar el estado "oculto" (opacity-0) al menos una vez antes
    // de que podamos marcarlo como visible, lo que garantiza que la
    // transición de CSS se vea aunque la tarjeta ya esté dentro del
    // viewport apenas carga la página (si no, el cambio de opacidad podía
    // ocurrir antes del primer pintado y la animación no se notaba).
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
        );
        observer.observe(node);
      });
      node.dataset.raf2 = raf2;
    });

    return () => {
      cancelAnimationFrame(raf1);
      if (node.dataset.raf2) cancelAnimationFrame(Number(node.dataset.raf2));
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
