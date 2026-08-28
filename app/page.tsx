import CheckoutLink from "./CheckoutLink";
import MotionEffects from "./MotionEffects";

const CHECKOUT = "https://pay.hotmart.com/K107213143H";

const recipes = [
  {
    src: "/assets/receta-9-009.webp",
    title: "Desayunos y meriendas",
    detail: "Tostadas francesas, muffins, granola y más",
  },
  {
    src: "/assets/receta-41-041.webp",
    title: "Pollo fácil y sabroso",
    detail: "Recetas claras con tiempo y temperatura",
  },
  {
    src: "/assets/receta-78-078.webp",
    title: "Pescados y mariscos",
    detail: "Opciones rápidas para todos los días",
  },
  {
    src: "/assets/receta-121-121.webp",
    title: "Panadería y postres",
    detail: "Budines, brownies, panes y dulces",
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

const communityVoices = [
  {
    initials: "01",
    name: "Más variedad",
    label: "Necesidad frecuente",
    quote:
      "Quiero dejar de preparar siempre papas y tener opciones claras para toda la semana.",
  },
  {
    initials: "02",
    name: "Cocinar con confianza",
    label: "Necesidad frecuente",
    quote:
      "Lo que más necesito es saber el tiempo y la temperatura sin estar adivinando.",
  },
  {
    initials: "03",
    name: "Organizar la semana",
    label: "Necesidad frecuente",
    quote:
      "Tener un menú y las listas de compras juntas me ayudaría muchísimo a resolver cada día.",
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
              Dejá de usar tu airfryer para hacer <em>siempre lo mismo.</em>
            </h1>
            <p className="hero-lead">
              Descubrí recetas fáciles, económicas y sabrosas para resolver
              desayunos, almuerzos, cenas, panes y postres sin complicarte.
            </p>

            <div className="hero-stats" aria-label="Contenido incluido">
              <div>
                <strong>+180</strong>
                <span>recetas en total</span>
              </div>
              <div>
                <strong>283</strong>
                <span>páginas digitales</span>
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
            <span className="recipe-bubble">120 RECETAS</span>
            <img
              src="/assets/mockup-airfryer.webp"
              alt="Ebook Airfryer sin complicaciones con 120 recetas"
              width={1100}
              height={1555}
              fetchPriority="high"
            />
          </div>
        </div>
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

      <section className="quick-win">
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
              temperatura y una clave para que salga bien.
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

      <section className="reviews" id="opiniones">
        <div className="shell">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">LO QUE MÁS BUSCA NUESTRA COMUNIDAD</p>
            <h2>Más variedad, más seguridad y menos tiempo pensando qué cocinar.</h2>
            <p>
              Estas son algunas de las necesidades que más se repiten entre quienes
              quieren aprovechar mejor su airfryer.
            </p>
          </div>

          <div className="reviews-summary" data-reveal>
            <div className="stars" aria-hidden="true">✦ ✦ ✦</div>
            <strong>Una guía pensada para resolver dudas reales</strong>
            <span>Recetas + planificación + cuidados en un mismo pack</span>
          </div>

          <div className="review-grid">
            {communityVoices.map((voice, index) => (
              <article className="review-card" data-reveal data-reveal-delay={index} key={voice.name}>
                <span className="quote-mark" aria-hidden="true">“</span>
                <blockquote>{voice.quote}</blockquote>
                <div className="review-person">
                  <span className="avatar" aria-hidden="true">{voice.initials}</span>
                  <div>
                    <strong>{voice.name}</strong>
                    <small>{voice.label}</small>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="review-disclaimer">
            Comentarios representativos basados en necesidades frecuentes. Reemplazalos
            por reseñas verificadas cuando recibas testimonios de compradores.
          </p>
          <div className="center-cta" data-reveal>
            <BuyButton>QUIERO RESOLVER MIS COMIDAS</BuyButton>
          </div>
        </div>
      </section>

      <section className="offer" id="oferta">
        <div className="shell offer-card" data-reveal>
          <div className="offer-copy">
            <p className="eyebrow">APROVECHÁ AHORA</p>
            <h2>Todo lo que necesitás para sacarle verdadero provecho a tu airfryer.</h2>
            <ul>
              <li><span>✓</span> Ebook principal con 120 recetas</li>
              <li><span>✓</span> Menú completo de 30 días</li>
              <li><span>✓</span> 60 recetas extra: saludables, panes y postres</li>
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
