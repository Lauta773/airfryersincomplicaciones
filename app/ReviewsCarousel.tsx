"use client";

import { useEffect, useRef, useState } from "react";
import CheckoutLink from "./CheckoutLink";

const CHECKOUT = "https://pay.hotmart.com/K107213143H?checkoutMode=10";

const reviews = [
  { src: "/assets/opinion-01.webp", alt: "Opiniones de Sandy, Rocío y Liz sobre la entrega y el contenido" },
  { src: "/assets/opinion-02.webp", alt: "Opiniones de Neli, Nélida y Marina sobre las recetas y la entrega" },
  { src: "/assets/opinion-03.webp", alt: "Opiniones de Rosana, Marisa y otras compradoras sobre el material" },
  { src: "/assets/opinion-04.webp", alt: "Opiniones de Nancy, Stella, Fernando y Silvia sobre la atención y la entrega" },
  { src: "/assets/opinion-05.webp", alt: "Opiniones de Paola, Dani y Alejandra sobre el material recibido" },
  { src: "/assets/opinion-06.webp", alt: "Opiniones de Andrea, Melisa, Sandra y Noe sobre el material" },
  { src: "/assets/opinion-07.webp", alt: "Opiniones de Mina, Liliana, Carolina y María Inés sobre la entrega" },
  { src: "/assets/opinion-08.webp", alt: "Opiniones de Ángeles, Gigi, Estela y Fabiana sobre las recetas" },
];

export default function ReviewsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = (index: number) => {
    const next = (index + reviews.length) % reviews.length;
    const track = trackRef.current;
    const card = track?.children[next] as HTMLElement | undefined;
    if (track && card) {
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
      setCurrent(next);
    }
  };

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => goTo(current + 1), 4300);
    return () => window.clearInterval(timer);
  }, [current, paused]);

  return (
    <section className="reviews" id="opiniones">
      <div className="shell">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">OPINIONES REALES</p>
          <h2>Personas que compraron y ya recibieron su material.</h2>
          <p>
            Deslizá o usá las flechas para leer experiencias reales sobre la entrega,
            el contenido y las recetas.
          </p>
        </div>

        <div
          className="proof-carousel"
          data-reveal
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <button className="proof-arrow proof-prev" type="button" onClick={() => goTo(current - 1)} aria-label="Ver opiniones anteriores">‹</button>
          <div className="proof-track" ref={trackRef} aria-label="Carrusel de opiniones de compradores">
            {reviews.map((review, index) => (
              <figure className="proof-card" key={review.src}>
                <img src={review.src} alt={review.alt} loading={index < 3 ? "eager" : "lazy"} />
              </figure>
            ))}
          </div>
          <button className="proof-arrow proof-next" type="button" onClick={() => goTo(current + 1)} aria-label="Ver más opiniones">›</button>
        </div>

        <div className="proof-dots" aria-label="Elegir opinión">
          {reviews.map((review, index) => (
            <button
              type="button"
              key={review.src}
              className={index === current ? "is-active" : ""}
              aria-label={`Ir a la opinión ${index + 1}`}
              aria-current={index === current ? "true" : undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </div>

        <div className="proof-trust" data-reveal>
          <span>✓ Entrega digital</span>
          <span>✓ Acceso inmediato</span>
          <span>✓ Comentarios reales</span>
        </div>

        <div className="center-cta" data-reveal>
          <CheckoutLink className="buy-button" href={CHECKOUT}>
            <span>QUIERO RECIBIR MI EBOOK</span><b aria-hidden="true">→</b>
          </CheckoutLink>
        </div>
      </div>
    </section>
  );
}
