import type { CSSProperties } from "react";
import Script from "next/script";
import ContactForm from "./contact-form";
import { SITE_URL } from "./site";

// Marcado del portafolio. Los IDs y clases son los que usa public/app.js
// (i18n ES/EN, canvas generativos, visor de proyectos, menú móvil, tema).
export default function Home() {
  return (
    <>
      {/* Datos estructurados: ayudan a buscadores a reconocer a la persona y sus perfiles */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Juan Villamoros",
            jobTitle: "Software Developer",
            description: "Software developer from Colombia with a business-management background. Ruby on Rails APIs, third-party integrations, Python automation and AI agents. Remote, available immediately.",
            url: SITE_URL,
            knowsAbout: ["Ruby on Rails", "Python", "REST APIs", "AI agents", "Docker", "AWS", "CI/CD", "Supabase", "PostgreSQL"],
            knowsLanguage: ["Spanish", "English", "Portuguese"],
            address: { "@type": "PostalAddress", addressCountry: "CO" },
            alumniOf: ["Universidad del Pacífico", "Universidad Autónoma de Manizales", "Universidad Autónoma de Occidente"],
            sameAs: [
              "https://linkedin.com/in/juanvillamoros",
              "https://medium.com/@masoncoding",
              "https://www.tiktok.com/@masoncodingarch",
              "https://www.youtube.com/@MasonCodingArch",
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Juan Villamoros",
            url: SITE_URL,
            inLanguage: ["en", "es"],
          }),
        }}
      />
      {/* Empresa que presta los servicios (B2B). Nombre de trabajo: el registro ante la Cámara de Comercio está pendiente. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Juan Villamoros - FullStack Developer S.A.S.",
            url: SITE_URL,
            founder: { "@type": "Person", name: "Juan Villamoros" },
            address: { "@type": "PostalAddress", addressCountry: "CO" },
            areaServed: "US",
            description: "Colombian company providing full-stack software development to companies, on business-to-business contracts. One senior developer: Ruby on Rails, Python, integrations and AI agents.",
          }),
        }}
      />
      <a className="skip" href="#works" data-i18n="skip">Skip to the works</a>

      <header className="topbar" id="top">
        <a className="mark" href="#top" aria-label="Juan Villamoros — home"><span>JV</span><i aria-hidden="true" /></a>
        <nav aria-label="Rooms">
          <a href="#statement" data-i18n="nav.statement">About</a>
          <a href="#works" data-i18n="nav.works">Projects</a>
          <a href="#materials" data-i18n="nav.materials">Stack</a>
          <a href="#provenance" data-i18n="nav.provenance">Experience</a>
          <a href="#commission" className="nav-cta" data-i18n="nav.commission">Work with me</a>
        </nav>
        <div className="toggles">
          <button className="pill menu-btn" id="menu-btn" type="button" aria-expanded="false" aria-controls="mobile-nav">
            <span data-i18n="menu.btn">Menu</span>
          </button>
          <button className="pill" id="lang" type="button" aria-label="Cambiar a español">ES</button>
          <button className="pill icon" id="theme" type="button" aria-label="Toggle dark mode">
            <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
              <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth={1.8} />
              <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </header>

      {/* Menú para pantallas móviles o divididas (se muestra con el botón Menu) */}
      <nav className="mobile-nav" id="mobile-nav" aria-label="Rooms" hidden>
        <a href="#statement" data-i18n="nav.statement">About</a>
        <a href="#works" data-i18n="nav.works">Projects</a>
        <a href="#materials" data-i18n="nav.materials">Stack</a>
        <a href="#provenance" data-i18n="nav.provenance">Experience</a>
        <a href="#side-projects" data-i18n="nav.side">Side projects</a>
        <a href="#commission" className="nav-cta" data-i18n="nav.commission">Work with me</a>
      </nav>

      <aside className="room" aria-hidden="true">
        <span id="room-num">00</span><span className="room-line" /><span id="room-name">Entrance</span>
      </aside>

      <main>
        {/* ============ HERO ============ */}
        <section className="hero" data-room="00" data-room-key="room.entrance">
          <canvas id="hero-canvas" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="dot" />
              <span data-i18n="hero.eyebrow">Available now · Remote from Colombia (UTC−5)</span>
            </p>
            <h1 className="name">
              <span className="line">Juan</span>
              <span className="line indent">Villa<em>moros</em></span>
            </h1>
            <p className="hero-lede" data-i18n="hero.lede">Software developer with a business-management background. I build Ruby on Rails APIs, integrations and AI&#8209;assisted automation for teams whose operations depend on software. I have also run the business side: sales, operations and customer service.</p>
            <div className="hero-actions">
              <a className="btn primary" href="#commission" data-i18n="hero.cta">Work with me</a>
              <a className="btn ghost" href="#works" data-i18n="hero.cta2">See the projects ↓</a>
            </div>
            <p className="hint" id="hint" data-i18n="hero.hint">Move across the canvas: left is the brush, right is the grid.</p>
          </div>
          <dl className="placard hero-placard">
            <dt data-i18n="hero.p.title">Systems &amp; business</dt>
            <dd data-i18n="hero.p.year">2016 – present</dd>
            <dd data-i18n="hero.p.medium">Ruby on Rails, Python, integrations, AI agents, operations.</dd>
            <dd className="status"><span className="dot" /><span data-i18n="hero.p.status">Available immediately · remote</span></dd>
          </dl>
        </section>

        {/* ============ STATEMENT ============ */}
        <section className="statement" id="statement" data-room="01" data-room-key="room.about">
          <p className="label"><span>01</span><span data-i18n="statement.label">About me</span></p>
          <blockquote className="reveal">
            <p data-i18n="statement.q">I learned how software works by running businesses first. Sales, customer service and operations taught me what a broken process costs. Engineering taught me how to keep it from breaking again.</p>
          </blockquote>
          <div className="statement-cols reveal">
            <p data-i18n="statement.p1">Software rarely fails where everyone reviewed it. It fails at the seams: a retry without idempotency, a webhook delivered twice, a field that silently comes back empty. That is where I focus, because those seams are where operations lose time and customers lose trust.</p>
            <p data-i18n="statement.p2">Today that means Ruby on Rails APIs, third-party integrations, Python automation and AI agents, shipped with Docker, AWS and CI/CD. I hold a B.Eng. in Systems Engineering from Universidad del Pacífico and I have training in business management, so I treat data models, incident reports and the business case behind each feature with the same rigor.</p>
          </div>
        </section>

        {/* ============ WORKS ============ */}
        <section className="works" id="works" data-room="02" data-room-key="room.projects">
          <div className="section-head">
            <p className="label"><span>02</span><span data-i18n="works.label">Selected projects</span></p>
            <h2 data-i18n="works.title">Six projects, one approach</h2>
            <p className="sub" data-i18n="works.sub">Each card is drawn live from the idea behind the project. Open one for the details.</p>
          </div>

          <ol className="wall">
            <li className="work w-wide reveal" data-art="kanban">
              <button className="frame" type="button" aria-haspopup="dialog" aria-controls="viewer" data-work="0">
                <canvas className="art" aria-hidden="true" />
                <span className="view" aria-hidden="true" data-i18n="view">View</span>
              </button>
              <dl className="placard">
                <dt><span className="roman">I.</span> Shurikaizen</dt>
                <dd>2026 · <span data-i18n="w0.status">paused</span></dd>
                <dd data-i18n="w0.medium">Ruby on Rails (API-only), UUID keys, JWT</dd>
              </dl>
            </li>
            <li className="work w-tall reveal" data-art="calendar">
              <button className="frame" type="button" aria-haspopup="dialog" aria-controls="viewer" data-work="1">
                <canvas className="art" aria-hidden="true" />
                <span className="view" aria-hidden="true" data-i18n="view">View</span>
              </button>
              <dl className="placard">
                <dt><span className="roman">II.</span> <span data-i18n="w1.title">Appointments</span></dt>
                <dd>2021 – 2022 · BairesDev</dd>
                <dd data-i18n="w1.medium">Ruby on Rails, Google Calendar API</dd>
              </dl>
            </li>
            <li className="work w-std reveal" data-art="signal">
              <button className="frame" type="button" aria-haspopup="dialog" aria-controls="viewer" data-work="2">
                <canvas className="art" aria-hidden="true" />
                <span className="view" aria-hidden="true" data-i18n="view">View</span>
              </button>
              <dl className="placard">
                <dt><span className="roman">III.</span> <span data-i18n="w2.title">Incident operations</span></dt>
                <dd>2025 – 2026 · SITIC</dd>
                <dd data-i18n="w2.medium">Incident triage, SLAs, escalation</dd>
              </dl>
            </li>
            <li className="work w-std reveal" data-art="flow">
              <button className="frame" type="button" aria-haspopup="dialog" aria-controls="viewer" data-work="3">
                <canvas className="art" aria-hidden="true" />
                <span className="view" aria-hidden="true" data-i18n="view">View</span>
              </button>
              <dl className="placard">
                <dt><span className="roman">IV.</span> <span data-i18n="w3.title">Agents &amp; automation</span></dt>
                <dd data-i18n="w3.year">Ongoing series</dd>
                <dd data-i18n="w3.medium">Python, n8n, Robocorp (RPA), AI agents</dd>
              </dl>
            </li>
            <li className="work w-wide reveal" data-art="atlas">
              <button className="frame" type="button" aria-haspopup="dialog" aria-controls="viewer" data-work="4">
                <canvas className="art" aria-hidden="true" />
                <span className="view" aria-hidden="true" data-i18n="view">View</span>
              </button>
              <dl className="placard">
                <dt><span className="roman">V.</span> <span data-i18n="w4.title">Client projects</span></dt>
                <dd>2016 – 2021 · <span data-i18n="w4.where">Freelance</span></dd>
                <dd data-i18n="w4.medium">Full-stack web apps · Mexico, Spain, Argentina</dd>
              </dl>
            </li>
            <li className="work w-tall reveal" data-art="rutero">
              <button className="frame" type="button" aria-haspopup="dialog" aria-controls="viewer" data-work="5">
                <canvas className="art" aria-hidden="true" />
                <span className="view" aria-hidden="true" data-i18n="view">View</span>
              </button>
              <dl className="placard">
                <dt><span className="roman">VI.</span> Rutero</dt>
                <dd>2024 · <span data-i18n="w5.status">independent project · paused</span></dd>
                <dd data-i18n="w5.medium">TypeScript · Node.js · Express.js · Next.js · Prisma · Clerk · AI agents</dd>
              </dl>
            </li>
          </ol>
        </section>

        {/* ============ MATERIALS ============ */}
        <section className="materials" id="materials" data-room="03" data-room-key="room.stack">
          <div className="section-head">
            <p className="label"><span>03</span><span data-i18n="materials.label">Stack</span></p>
            <h2 data-i18n="materials.title">What I work with</h2>
          </div>
          <div className="palette">
            <article className="swatch reveal" style={{ "--sw": "var(--vermilion)" } as CSSProperties}>
              <span className="chip" aria-hidden="true" />
              <h3 data-i18n="m.backend">Backend</h3>
              <p>Ruby · Ruby on Rails · REST APIs · Python · JavaScript · SQL</p>
            </article>
            <article className="swatch reveal" style={{ "--sw": "var(--ultramarine)" } as CSSProperties}>
              <span className="chip" aria-hidden="true" />
              <h3 data-i18n="m.ai">AI &amp; automation</h3>
              <p data-i18n="m.ai.list">AI agent integration · n8n · Robocorp (RPA) · low-code workflows</p>
            </article>
            <article className="swatch reveal" style={{ "--sw": "var(--ochre)" } as CSSProperties}>
              <span className="chip" aria-hidden="true" />
              <h3 data-i18n="m.data">Data &amp; integrations</h3>
              <p>PostgreSQL (Supabase) · Google Calendar API · Zoho CRM · JWT</p>
            </article>
            <article className="swatch reveal" style={{ "--sw": "var(--viridian)" } as CSSProperties}>
              <span className="chip" aria-hidden="true" />
              <h3 data-i18n="m.cloud">Cloud &amp; delivery</h3>
              <p>AWS (S3) · Docker · CI/CD · SecDevOps</p>
            </article>
            <article className="swatch sw-ink reveal" style={{ "--sw": "var(--ink)" } as CSSProperties}>
              <span className="chip" aria-hidden="true" />
              <h3 data-i18n="m.ops">Operations</h3>
              <p data-i18n="m.ops.list">Incident management · SLA compliance · escalation · technical documentation</p>
            </article>
            <article className="swatch reveal" style={{ "--sw": "var(--rose)" } as CSSProperties}>
              <span className="chip" aria-hidden="true" />
              <h3 data-i18n="m.craft">Business</h3>
              <p data-i18n="m.craft.list">UX/UI design · Agile delivery · client communication · business management</p>
            </article>
            <article className="swatch w-left reveal" style={{ "--sw": "var(--teal)" } as CSSProperties}>
              <span className="chip" aria-hidden="true" />
              <h3 data-i18n="m.frontend">Frontend</h3>
              <p>Ruby on Rails · Django · Reflex · Next.js · React.js · Gin</p>
            </article>
            <article className="swatch w-right reveal" style={{ "--sw": "var(--violet)" } as CSSProperties}>
              <span className="chip" aria-hidden="true" />
              <h3 data-i18n="m.blockchain">Blockchain</h3>
              <p>DApps · Smart Contracts · Solidity · Exchanges</p>
            </article>
          </div>
        </section>

        {/* ============ PROVENANCE ============ */}
        <section className="provenance" id="provenance" data-room="04" data-room-key="room.experience">
          <div className="section-head">
            <p className="label"><span>04</span><span data-i18n="prov.label">Experience</span></p>
            <h2 data-i18n="prov.title">Where I have worked</h2>
          </div>
          <ol className="timeline">
            <li className="reveal"><time>2025 – 2026</time><div><h3>SITIC S.A.S. <small data-i18n="t.sitic.role">Support Engineer</small></h3><p data-i18n="t.sitic">Kept points of sale running for Mattelsa, Studio F and ELA; triaged and escalated incidents for Monómeros, Olímpica, Dollarcity and Coéxito under SLA.</p></div></li>
            <li className="reveal"><time>2023</time><div><h3>Juzto.co <small data-i18n="t.juzto.role">Application Support Analyst</small></h3><p data-i18n="t.juzto">Real-time diagnosis across Zoho CRM, AWS S3 and Supabase; documented incidents and improved support flows.</p></div></li>
            <li className="reveal"><time>2021 – 2022</time><div><h3>BairesDev <small data-i18n="t.baires.role">Ruby on Rails Software Engineer</small></h3><p data-i18n="t.baires">Built a medical appointment management system in Rails, integrated with Google Calendar, in an Agile team.</p></div></li>
            <li className="reveal"><time>2020 – 2022</time><div><h3>Criptotura <small data-i18n="t.cripto.role">Founder &amp; CEO</small></h3><p data-i18n="t.cripto">Blockchain education and advisory; projects with smart contracts and DApps.</p></div></li>
            <li className="reveal"><time>2018 – 2021</time><div><h3>Folklore Clothes <small data-i18n="t.folk.role">Co-founder</small></h3><p data-i18n="t.folk">Ran campaigns, sales and operations as COO, CMO and CFO.</p></div></li>
            <li className="reveal"><time>2016 – 2021</time><div><h3><span data-i18n="t.free.h">Freelance</span> <small data-i18n="t.free.role">Full-Stack Developer</small></h3><p data-i18n="t.free">Web applications for clients in Mexico, Spain and Argentina, with requirements managed directly.</p></div></li>
          </ol>
          <p className="langs"><span data-i18n="langs.label">Languages</span> — <span data-i18n="langs.list">Spanish (native) · English (intermediate) · Portuguese (basic)</span></p>
        </section>

        {/* ============ EDUCATION ============ */}
        <section className="education" id="education" data-room="05" data-room-key="room.education">
          <div className="section-head">
            <p className="label"><span>05</span><span data-i18n="edu.label">Education</span></p>
            <h2 data-i18n="edu.title">Where I studied</h2>
          </div>
          <ol className="timeline">
            <li className="reveal"><time>2024</time><div><h3><span data-i18n="edu.ai.h">Artificial Intelligence specialization</span> <small data-i18n="edu.ai.inst">Universidad Autónoma de Occidente</small></h3></div></li>
            <li className="reveal"><time>2022</time><div><h3><span data-i18n="edu.pm.h">Project Management specialization</span> <small data-i18n="edu.pm.inst">Corporación Universitaria de Asturias</small></h3></div></li>
            <li className="reveal"><time>2016 – 2021</time><div><h3><span data-i18n="edu.se.h">Systems Engineering</span> <small data-i18n="edu.se.inst">Universidad del Pacífico · B.Eng.</small></h3></div></li>
            <li className="reveal"><time>2013 – 2017</time><div><h3><span data-i18n="edu.bm.h">Business Management</span> <small data-i18n="edu.bm.inst">Universidad Autónoma de Manizales</small></h3></div></li>
            <li className="reveal"><time>2010 – 2013</time><div><h3><span data-i18n="edu.tec.h">Information Technology</span> <small data-i18n="edu.tec.inst">Universidad del Pacífico</small></h3></div></li>
          </ol>
        </section>

        {/* ============ SIDE PROJECTS ============ */}
        <section className="side-projects" id="side-projects" data-room="06" data-room-key="room.side">
          <div className="section-head">
            <p className="label"><span>06</span><span data-i18n="side.label">Side projects</span></p>
            <h2 data-i18n="side.title">Two projects, both paused</h2>
          </div>

          <article className="side-project reveal" id="shurikaizen">
            <p className="label"><span>Shurikaizen</span><span>2026</span><span data-i18n="side.s.kind">Independent project · paused</span></p>
            <h3 data-i18n="side.s.p">A productivity platform for freelancers and remote teams that supports five methods at once: Kanban, Scrum, Shape Up, XP and Lean.</h3>
            <p className="side-stack" data-i18n="side.s.stack">Ruby on Rails (API-only) · UUID keys · JWT · Next.js front end planned</p>
            <h4 data-i18n="rutero.h">Milestones</h4>
            <ol>
              <li>
                <strong data-i18n="rutero.m1.h">Phase 1 · Research and planning</strong>
                <span data-i18n="side.s.m1">API-only architecture and data model: 23 migrations with UUID primary keys and complete models.</span>
                <em data-i18n="rutero.reached">Reached</em>
              </li>
              <li>
                <strong data-i18n="rutero.m2.h">Phase 2 · MVP development</strong>
                <span data-i18n="side.s.m2">JWT-authenticated API controllers, still in progress when the project was paused.</span>
                <em data-i18n="side.s.inprog">In progress · paused</em>
              </li>
            </ol>
          </article>
        <article className="side-project reveal" id="rutero">
            <p className="label"><span>Rutero</span><span>2024</span><span data-i18n="side.r.kind">Independent project · paused</span></p>
            <h3 data-i18n="rutero.p">Web platform for day trips (pasadías) to remote areas of Colombia, starting on the Pacific coast. One booking covers transport, lodging, local food and cultural and eco-activities, with a focus on supporting local communities and sustainable tourism.</h3>
            <p className="side-stack" data-i18n="side.r.stack">TypeScript · Node.js · Express.js · Next.js · Prisma · Clerk · skills and AI agents</p>
            <h4 data-i18n="rutero.h">Milestones</h4>
            <ol>
              <li>
                <strong data-i18n="rutero.m1.h">Phase 1 · Research and planning</strong>
                <span data-i18n="rutero.m1">Functional and non-functional requirements, system architecture, wireframes and mockups.</span>
                <em data-i18n="rutero.reached">Reached</em>
              </li>
              <li>
                <strong data-i18n="rutero.m2.h">Phase 2 · MVP development</strong>
                <span data-i18n="rutero.m2">Search and booking, payments and profiles, provider panel, map and payment gateway integrations.</span>
                <em data-i18n="rutero.last">Reached · last phase so far</em>
              </li>
            </ol>
          </article>

          </section>

        {/* ============ CONTENT ============ */}
        <section className="content" id="content" data-room="07" data-room-key="room.content">
          <div className="section-head">
            <p className="label"><span>07</span><span data-i18n="content.label">Content</span></p>
            <h2 data-i18n="content.title">Writing and video on software design</h2>
            <p className="sub" data-i18n="content.sub">Articles and short videos on software architecture, design principles and programming, published under the pseudonym MasonCoding.</p>
          </div>

          <div className="stats">
            <div className="stat">
              <b>483,205</b>
              <span data-i18n="content.s1">TikTok views · last 12 months</span>
            </div>
            <div className="stat">
              <b>9,410</b>
              <span data-i18n="content.s2">YouTube views · 142 videos · 187 watch hours</span>
            </div>
            <div className="stat">
              <b className="pair">15,223 / 6,990</b>
              <span data-i18n="content.s3">Medium views / reads</span>
            </div>
          </div>

          <ul className="pieces">
            <li>
              <a href="https://medium.com/@Masoncoding/understanding-the-kiss-principle-in-software-design-keep-it-simple-stupid-6f5fcd8913f3" target="_blank" rel="noopener">Understanding the “KISS” Principle in Software Design: Keep It Simple, Stupid</a>
              <span>Medium</span>
            </li>
            <li>
              <a href="https://medium.com/@Masoncoding/contenedores-y-orquestaci%C3%B3n-transformando-la-gesti%C3%B3n-de-aplicaciones-en-producci%C3%B3n-0f2ebbd8aac5" target="_blank" rel="noopener">Contenedores y Orquestación: Transformando la Gestión de Aplicaciones en producción.</a>
              <span>Medium</span>
            </li>
            <li>
              <a href="https://www.tiktok.com/@masoncodingarch/video/7568278809372331275" target="_blank" rel="noopener">Introducción a la arquitectura de software</a>
              <span>TikTok</span>
            </li>
            <li>
              <a href="https://www.youtube.com/shorts/89b7d5mYXR0" target="_blank" rel="noopener">El villano de tu proyecto... La Amnesia Arquitectónica!</a>
              <span data-i18n="content.yt">YouTube Short · 1,075 views</span>
            </li>
          </ul>

          <p className="handles">
            <a href="https://medium.com/@masoncoding" target="_blank" rel="noopener">Medium @masoncoding</a> ·{" "}
            <a href="https://www.tiktok.com/@masoncodingarch" target="_blank" rel="noopener">TikTok @masoncodingarch</a> ·{" "}
            <a href="https://www.youtube.com/@MasonCodingArch" target="_blank" rel="noopener">YouTube @MasonCodingArch</a>
          </p>
        </section>

        {/* ============ COMMISSION ============ */}
        <section className="commission" id="commission" data-room="08" data-room-key="room.work">
          <p className="label"><span>08</span><span data-i18n="c.label">Work with me</span></p>
          <h2 className="big" data-i18n-html="c.title">Let’s build<br />something <em>solid.</em></h2>
          <div className="terms">
            <dl>
              <div><dt data-i18n="c.t1">Engagement</dt><dd data-i18n="c.t1v">Independent contractor · direct with your team</dd></div>
              <div><dt data-i18n="c.t2">Location</dt><dd data-i18n="c.t2v">Colombia · UTC−5 · full overlap with US Eastern</dd></div>
              <div><dt data-i18n="c.t3">Start</dt><dd data-i18n="c.t3v">Immediately</dd></div>
              <div><dt data-i18n="c.t4">Focus</dt><dd data-i18n="c.t4v">Ruby on Rails · Python · integrations · AI agents</dd></div>
            </dl>
            <div className="contact">
              <ContactForm />
              <a className="btn ghost" href="https://linkedin.com/in/juanvillamoros" target="_blank" rel="noopener">LinkedIn ↗</a>
              <a className="btn ghost cv-en" href="cv/Juan_Villamoros_CV_EN.pdf" download="Juan_Villamoros_CV_EN.pdf">Download CV (PDF)</a>
              <a className="btn ghost cv-es" href="cv/Juan_Villamoros_CV_ES.pdf" download="Juan_Villamoros_CV_ES.pdf">Descargar CV (PDF)</a>
              <button className="copy" type="button" id="copy-mail">
                <span className="mono">villamorosjuan@gmail.com</span> <span data-i18n="c.copy" className="copy-label">copy</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <p>© <span id="year">2026</span> Juan Villamoros · <span data-i18n="foot">Idea → Experiencia Digital</span></p>
      </footer>

      <button className="to-top" id="to-top" type="button" aria-label="Back to top">↑</button>

      {/* ============ VIEWER ============ */}
      <dialog id="viewer" className="viewer" aria-labelledby="viewer-title">
        <div className="viewer-inner">
          <canvas id="viewer-art" aria-hidden="true" />
          <article className="viewer-copy">
            <p className="label"><span id="viewer-num">I.</span><span data-i18n="viewer.label">Details</span></p>
            <h3 id="viewer-title" />
            <p className="viewer-meta" id="viewer-meta" />
            <p id="viewer-body" />
            <p className="viewer-note"><span data-i18n="viewer.note">About this visual</span> — <span id="viewer-art-note" /></p>
            <p className="viewer-demo">
              <a className="pill" id="demo" href="/#" target="_blank" rel="noopener noreferrer" data-i18n="viewer.demo">View demo ↗</a>
            </p>
            <div className="viewer-nav">
              <button type="button" className="pill" id="prev" data-i18n="prev">← Previous</button>
              <button type="button" className="pill" id="next" data-i18n="next">Next →</button>
              <button type="button" className="pill close" id="close" data-i18n="close">Close</button>
            </div>
          </article>
        </div>
      </dialog>

      <div className="cursor" aria-hidden="true"><span data-i18n="view">View</span></div>

      <Script src="/app.js" strategy="afterInteractive" />
    </>
  );
}
