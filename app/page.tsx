import CheckoutLink from "./CheckoutLink";
import MotionEffects from "./MotionEffects";
import ReviewsCarousel from "./ReviewsCarousel";

const CHECKOUT = "https://pay.hotmart.com/K107213143H?checkoutMode=10";

const recipes = [
  {
    src: "/assets/muestra-tostadas-francesas.webp",
    title: "Tostadas francesas con canela",
    detail: "Desayunos y meriendas · Receta 0001",
  },
  {
    src: "/assets/muestra-bastones-mozzarella.webp",
    title: "Bastones de mozzarella",
    detail: "Entradas y bocados crujientes · Receta 0017",
  },
  {
    src: "/assets/muestra-pollo-limon.webp",
    title: "Pechugas al limón y hierbas",
    detail: "Pollo · Receta 0361",
  },
  {
    src: "/assets/muestra-bife-romero.webp",
    title: "Bife con ajo y romero",
    detail: "Carne vacuna y cerdo · Receta 0511",
  },
  {
    src: "/assets/muestra-salmon-limon.webp",
    title: "Salmón al limón y eneldo",
    detail: "Pescados y mariscos · Receta 0616",
  },
  {
    src: "/assets/muestra-budin-banana.webp",
    title: "Budín de banana y chocolate",
    detail: "Panadería y postres · Receta 0896",
  },
];

const bonuses = [
  {
    number: "01",
    src: "/assets/bono-menu-30-dias.webp",
    title: "Menú Airfryer de 30 días",
    detail: "30 días con cuatro comidas, menús semanales y listas de compras.",
  },
  {
    number: "02",
    src: "/assets/bono-saludable.webp",
    title: "Airfryer saludable",
    detail: "30 recetas livianas y equilibradas con buenas fuentes de proteína.",
  },
  {
    number: "03",
    src: "/assets/bono-postres.webp",
    title: "Panadería y postres",
    detail: "30 recetas dulces y de panadería para sacarle más provecho a tu equipo.",
  },
  {
    number: "04",
    src: "/assets/bono-tabla.webp",
    title: "Tabla maestra",
    detail: "40 referencias rápidas de tiempos, temperaturas y cocción segura.",
  },
  {
    number: "05",
    src: "/assets/bono-limpieza.webp",
    title: "Limpieza y cuidado",
    detail: "Rutinas simples, materiales recomendados y errores frecuentes.",
  },
];

function BuyButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <CheckoutLink href={CHECKOUT} className={`buy-button ${className}`}>
      <span>{children}</span>
      <b aria-hidden="true">→</b>
    </CheckoutLink>
  );
}

export default function Home() {
  return (
    <main>
      <MotionEffects />
      <div className="scroll-progress" aria-hidden="true" />
      <div className="offer-bar">
        <span>OFERTA DE LANZAMIENTO</span>
        <strong>82% OFF</strong>
        <span>POR TIEMPO PROMOCIONAL</span>
      </div>

      <section className="hero" id="inicio">
        <div className="shell hero-grid">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">COLECCIÓN DIGITAL + 5 BONOS</p>
            <h1>
              Dejá de preguntarte <em>“¿qué cocino hoy?”</em>
            </h1>
            <p className="hero-lead">
              Descubrí 1.000 recetas fáciles, económicas y sabrosas para convertir
              tu airfryer en la solución de todos los días.
            </p>

            <div className="hero-stats" aria-label="Contenido incluido">
              <div>
                <strong>1.000</strong>
                <span>recetas numeradas</span>
              </div>
              <div>
                <strong>8</strong>
                <span>categorías completas</span>
              </div>
              <div>
                <strong>5</strong>
                <span>bonos incluidos</span>
              </div>
            </div>

            <div className="hero-price">
              <div>
                <span>Valor regular</span>
                <del>USD 59,99</del>
              </div>
              <div className="price-now">
                <span>HOY</span>
                <strong>USD 10,99</strong>
              </div>
            </div>

            <BuyButton>QUIERO EL PACK COMPLETO</BuyButton>
            <p className="checkout-note">
              ✓ Pago procesado por Hotmart &nbsp;·&nbsp; ✓ Producto 100% digital
            </p>
          </div>

          <div className="hero-visual" data-reveal data-reveal-delay="1" aria-label="Mockup del ebook Airfryer sin complicaciones">
            <span className="bonus-bubble">+5 BONOS</span>
            <span className="recipe-bubble">1.000<br />RECETAS</span>
            <img
              src="/assets/mockup-airfryer-1000.webp"
              alt="Ebook Airfryer sin complicaciones con 1.000 recetas fáciles, económicas y sabrosas"
              width={1449}
              height={2048}
              fetchPriority="high"
            />
          </div>
        </div>

        <a
          className="scroll-cue"
          href="#descubrir"
          aria-label="Deslizá para descubrir todo lo que incluye el pack"
        >
          <span>DESLIZÁ PARA DESCUBRIR</span>
          <span className="scroll-cue-icon" aria-hidden="true" />
        </a>
      </section>

      <div className="trust-ribbon" aria-label="Ventajas de la compra">
        <div className="trust-track">
          <span>✓ ACCESO INMEDIATO</span>
          <span>✓ 100% DIGITAL EN PDF</span>
          <span>✓ PAGO SEGURO POR HOTMART</span>
          <span>✓ CELULAR, TABLET Y COMPUTADORA</span>
          <span aria-hidden="true">✓ ACCESO INMEDIATO</span>
          <span aria-hidden="true">✓ 100% DIGITAL EN PDF</span>
          <span aria-hidden="true">✓ PAGO SEGURO POR HOTMART</span>
          <span aria-hidden="true">✓ CELULAR, TABLET Y COMPUTADORA</span>
        </div>
      </div>

      <section className="quick-win" id="descubrir">
        <div className="shell">
          <div className="section-heading compact" data-reveal>
            <p className="eyebrow">¿TE SUENA FAMILIAR?</p>
            <h2>Si tu airfryer hace siempre lo mismo, no es culpa del equipo.</h2>
          </div>
          <div className="voice-grid">
            <article data-reveal>
              <span className="voice-icon">01</span>
              <p>“La tengo, pero termino haciendo papas o nuggets.”</p>
              <small>Situación frecuente</small>
            </article>
            <article data-reveal data-reveal-delay="1">
              <span className="voice-icon">02</span>
              <p>“Nunca sé qué tiempo y temperatura usar.”</p>
              <small>Situación frecuente</small>
            </article>
            <article data-reveal data-reveal-delay="2">
              <span className="voice-icon">03</span>
              <p>“Quiero comer variado sin pasar horas en la cocina.”</p>
              <small>Situación frecuente</small>
            </article>
          </div>
          <p className="solution-line">
            Este pack reúne <strong>recetas, planificación y guías rápidas</strong> para que
            cocinar deje de ser improvisar.
          </p>
          <div className="before-after" data-reveal>
            <div className="before-box">
              <small>ANTES</small>
              <strong>Improvisás cada comida</strong>
              <span>Repetís recetas y dudás con la cocción.</span>
            </div>
            <div className="change-arrow" aria-hidden="true">→</div>
            <div className="after-box">
              <small>CON LA GUÍA</small>
              <strong>Elegís y cocinás</strong>
              <span>Tenés ideas, pasos, tiempos y temperaturas.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="inside" id="contenido">
        <div className="shell">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">RECETAS REALES DEL EBOOK</p>
            <h2>Elegí qué querés comer. El paso a paso ya está resuelto.</h2>
            <p>
              Cada receta incluye ingredientes, porciones, preparación, cocción,
              temperatura, una imagen y una clave para que salga bien. Estas páginas
              son muestras reales del ebook que vas a recibir.
            </p>
          </div>

          <div className="recipe-grid">
            {recipes.map((recipe, index) => (
              <article className="recipe-card" data-reveal data-reveal-delay={index % 4} key={recipe.title}>
                <div className="recipe-image">
                  <img
                    src={recipe.src}
                    alt={`Página de muestra: ${recipe.title}`}
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3>{recipe.title}</h3>
                  <p>{recipe.detail}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="center-cta">
            <BuyButton>APROVECHAR PRECIO DE LANZAMIENTO</BuyButton>
          </div>
        </div>
      </section>

      <section className="bonuses" id="bonos">
        <div className="shell">
          <div className="bonus-heading" data-reveal>
            <div>
              <p className="eyebrow">GRATIS CON TU COMPRA</p>
              <h2>No recibís un solo ebook. Recibís un sistema completo.</h2>
            </div>
            <div className="bonus-seal">
              <strong>5</strong>
              <span>BONOS<br />INCLUIDOS</span>
            </div>
          </div>

          <div className="bonus-grid">
            {bonuses.map((bonus, index) => (
              <article className="bonus-card" data-reveal data-reveal-delay={index % 2} key={bonus.number}>
                <div className="bonus-cover">
                  <span>BONO {bonus.number}</span>
                  <img
                    src={bonus.src}
                    alt={`Bono ${bonus.number}: ${bonus.title}`}
                    loading="lazy"
                  />
                </div>
                <div className="bonus-copy">
                  <p>BONO {bonus.number}</p>
                  <h3>{bonus.title}</h3>
                  <span>{bonus.detail}</span>
                  <strong>INCLUIDO GRATIS</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ReviewsCarousel />

      <section className="offer" id="oferta">
        <div className="shell offer-card" data-reveal>
          <div className="offer-copy">
            <p className="eyebrow">APROVECHÁ AHORA</p>
            <h2>Todo lo que necesitás para sacarle verdadero provecho a tu airfryer.</h2>
            <ul>
              <li><span>✓</span> Ebook principal con 1.000 recetas numeradas</li>
              <li><span>✓</span> Menú completo de 30 días</li>
              <li><span>✓</span> Ocho categorías: desayunos, carnes, pescados, verduras, comidas completas y más</li>
              <li><span>✓</span> Tabla maestra de tiempos y temperaturas</li>
              <li><span>✓</span> Guía de limpieza, cuidado y errores frecuentes</li>
            </ul>
          </div>
          <div className="offer-box">
            <span className="discount-pill">AHORRÁS USD 49</span>
            <p>VALOR DEL PACK COMPLETO</p>
            <del>USD 59,99</del>
            <div className="final-price">
              <small>HOY POR SOLO</small>
              <strong>USD 10,99</strong>
            </div>
            <BuyButton className="full">SÍ, QUIERO APROVECHAR AHORA</BuyButton>
            <small className="safe-note">Compra segura a través de Hotmart</small>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="shell faq-wrap" data-reveal>
          <div className="section-heading compact left">
            <p className="eyebrow">PREGUNTAS FRECUENTES</p>
            <h2>Antes de empezar</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>¿Necesito experiencia cocinando?</summary>
              <p>No. Las recetas explican ingredientes, porciones, pasos, tiempo y temperatura de forma clara.</p>
            </details>
            <details>
              <summary>¿Sirve para cualquier modelo de airfryer?</summary>
              <p>Los tiempos están planteados como rangos orientativos. El ebook enseña cómo ajustarlos según potencia, capacidad y grosor.</p>
            </details>
            <details>
              <summary>¿Qué formato recibo?</summary>
              <p>Recibís el ebook principal y los cinco bonos en formato digital PDF para consultar desde celular, tablet o computadora.</p>
            </details>
            <details>
              <summary>¿Los bonos están incluidos en el precio?</summary>
              <p>Sí. Al comprar la colección por USD 10,99 recibís los cinco bonos sin pagar extra.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="last-call">
        <div className="shell" data-reveal>
          <p className="eyebrow">TU AIRFRYER PUEDE HACER MUCHO MÁS</p>
          <h2>Hoy podés dejar de improvisar y empezar a cocinar con variedad.</h2>
          <div className="last-price"><del>USD 59,99</del><strong>USD 10,99</strong></div>
          <BuyButton>QUIERO AIRFRYER SIN COMPLICACIONES</BuyButton>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <div>
            <strong>NEXT LEVEL EBOOKS</strong>
            <span>APRENDE · MEJORA · CRECE</span>
          </div>
          <p>Producto digital educativo. Los resultados de cocción pueden variar según el equipo.</p>
        </div>
      </footer>

      <div className="mobile-buy">
        <div><del>USD 59,99</del><strong>USD 10,99</strong></div>
        <CheckoutLink href={CHECKOUT} className="mobile-buy-link">COMPRAR AHORA</CheckoutLink>
      </div>
    </main>
  );
}
