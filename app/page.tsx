import CheckoutLink from "./CheckoutLink";

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
      <div className="offer-bar">
        <span>OFERTA DE LANZAMIENTO</span>
        <strong>82% OFF</strong>
        <span>POR TIEMPO PROMOCIONAL</span>
      </div>

      <section className="hero" id="inicio">
        <div className="shell hero-grid">
          <div className="hero-copy">
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

          <div className="hero-visual" aria-label="Mockup del ebook Airfryer sin complicaciones">
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

      <section className="quick-win">
        <div className="shell">
          <div className="section-heading compact">
            <p className="eyebrow">¿TE SUENA FAMILIAR?</p>
            <h2>Si tu airfryer hace siempre lo mismo, no es culpa del equipo.</h2>
          </div>
          <div className="voice-grid">
            <article>
              <span className="voice-icon">01</span>
              <p>“La tengo, pero termino haciendo papas o nuggets.”</p>
              <small>Situación frecuente</small>
            </article>
            <article>
              <span className="voice-icon">02</span>
              <p>“Nunca sé qué tiempo y temperatura usar.”</p>
              <small>Situación frecuente</small>
            </article>
            <article>
              <span className="voice-icon">03</span>
              <p>“Quiero comer variado sin pasar horas en la cocina.”</p>
              <small>Situación frecuente</small>
            </article>
          </div>
          <p className="solution-line">
            Este pack reúne <strong>recetas, planificación y guías rápidas</strong> para que
            cocinar deje de ser improvisar.
          </p>
        </div>
      </section>

      <section className="inside" id="contenido">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">RECETAS REALES DEL EBOOK</p>
            <h2>Elegí qué querés comer. El paso a paso ya está resuelto.</h2>
            <p>
              Cada receta incluye ingredientes, porciones, preparación, cocción,
              temperatura y una clave para que salga bien.
            </p>
          </div>

          <div className="recipe-grid">
            {recipes.map((recipe) => (
              <article className="recipe-card" key={recipe.title}>
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
          <div className="bonus-heading">
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
            {bonuses.map((bonus) => (
              <article className="bonus-card" key={bonus.number}>
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

      <section className="offer" id="oferta">
        <div className="shell offer-card">
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
        <div className="shell faq-wrap">
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
        <div className="shell">
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
