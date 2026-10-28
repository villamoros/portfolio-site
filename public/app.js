/* Juan Villamoros — portfolio. Sin dependencias. */
(() => {
  "use strict";
  document.documentElement.classList.add("js");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* sin almacenamiento */ } },
  };

  /* ------------------------------------------------------------ textos */
  const ES = {
    "skip": "Ir a las obras",
    "menu.btn": "Menú", "nav.side": "Side projects",
    "nav.statement": "Sobre mí", "nav.works": "Proyectos", "nav.materials": "Stack",
    "nav.provenance": "Experiencia", "nav.commission": "Trabaja conmigo",
    "room.entrance": "Entrada", "room.about": "Sobre mí", "room.projects": "Proyectos", "room.side": "Side projects",
    "room.stack": "Stack", "room.experience": "Experiencia", "room.work": "Trabaja conmigo",
    "hero.eyebrow": "Disponible ahora · Remoto desde Colombia (UTC−5)",
    "hero.lede": "Desarrollador de software con formación en gestión de negocios. Construyo APIs en Ruby on Rails, integraciones y automatización con IA para equipos cuyas operaciones dependen del software. También he dirigido el lado comercial: ventas, operación y atención al cliente.",
    "hero.cta": "Trabaja conmigo", "hero.cta2": "Ver los proyectos ↓",
    "hero.hint": "Mueve el cursor sobre el lienzo: a la izquierda el pincel, a la derecha la grilla.",
    "hero.p.title": "Sistemas y negocio", "hero.p.year": "2016 – hoy",
    "hero.p.medium": "Ruby on Rails, Python, integraciones, agentes de IA, operación.",
    "hero.p.status": "Disponible de inmediato · remoto",
    "statement.label": "Sobre mí",
    "statement.q": "Aprendí cómo funciona el software dirigiendo negocios primero. Ventas, atención al cliente y operación me enseñaron lo que cuesta un proceso roto. La ingeniería me enseñó a evitar que se rompa otra vez.",
    "statement.p1": "El software casi nunca falla donde todos lo revisaron. Falla en las costuras: un reintento sin idempotencia, un webhook que llega dos veces, un campo que vuelve vacío sin avisar. Ahí concentro mi trabajo, porque esas costuras son donde la operación pierde tiempo y los clientes pierden confianza.",
    "statement.p2": "Hoy eso significa APIs en Ruby on Rails, integraciones con terceros, automatización con Python y agentes de IA, desplegados con Docker, AWS y CI/CD. Soy Ingeniero de Sistemas (Universidad del Pacífico) y tengo formación en gestión de negocios, así que trato los modelos de datos, los reportes de incidentes y el caso de negocio detrás de cada función con el mismo rigor.",
    "works.label": "Proyectos seleccionados", "works.title": "Seis proyectos, un mismo enfoque",
    "works.sub": "Cada tarjeta se dibuja en vivo a partir de la idea detrás del proyecto. Abre una para ver el detalle.",
    "view": "Ver",
    "w0.status": "en pausa", "w0.medium": "Ruby on Rails (solo API), llaves UUID, JWT",
    "w5.status": "proyecto independiente · en pausa", "w5.medium": "TypeScript · Node.js · Express.js · Next.js · Prisma · Clerk · agentes de IA",
    "side.label": "Side projects", "side.title": "Dos proyectos, ambos en pausa",
    "side.r.kind": "Proyecto independiente · en pausa", "side.r.stack": "TypeScript · Node.js · Express.js · Next.js · Prisma · Clerk · skills y agentes de IA",
    "side.s.kind": "Proyecto independiente · en pausa",
    "side.s.p": "Plataforma de productividad para freelancers y equipos remotos que soporta cinco métodos a la vez: Kanban, Scrum, Shape Up, XP y Lean.",
    "side.s.stack": "Ruby on Rails (solo API) · llaves UUID · JWT · front end en Next.js planeado",
    "side.s.m1": "Arquitectura solo API y modelo de datos: 23 migraciones con llaves primarias UUID y modelos completos.",
    "side.s.m2": "Controladores de API con autenticación JWT, todavía en progreso al pausar el proyecto.",
    "side.s.inprog": "En progreso · en pausa",
    "w1.title": "Citas", "w1.medium": "Ruby on Rails, API de Google Calendar",
    "w2.title": "Operación de incidentes", "w2.medium": "Triage de incidentes, SLA, escalamiento",
    "w3.title": "Agentes y automatización", "w3.year": "Serie en curso", "w3.medium": "Python, n8n, Robocorp (RPA), agentes de IA",
    "w4.title": "Proyectos para clientes", "w4.where": "Freelance", "w4.medium": "Apps web full-stack · México, España, Argentina",
    "materials.label": "Stack", "materials.title": "Con qué trabajo",
    "m.backend": "Backend", "m.frontend": "Frontend", "m.blockchain": "Blockchain", "m.ai": "IA y automatización", "m.ai.list": "Integración de agentes de IA · n8n · Robocorp (RPA) · flujos low-code",
    "m.data": "Datos e integraciones", "m.cloud": "Nube y entrega", "m.ops": "Operación",
    "m.ops.list": "Gestión de incidentes · cumplimiento de SLA · escalamiento · documentación técnica",
    "m.craft": "Negocio", "m.craft.list": "Diseño UX/UI · entrega ágil · comunicación con clientes · gestión de negocios",
    "prov.label": "Experiencia", "prov.title": "Dónde he trabajado",
    "t.sitic.role": "Ingeniero de soporte",
    "t.sitic": "Mantuve operando los puntos de venta de Mattelsa, Studio F y ELA; prioricé y escalé incidentes de Monómeros, Olímpica, Dollarcity y Coéxito bajo SLA.",
    "t.juzto.role": "Analista de soporte de aplicaciones",
    "t.juzto": "Diagnóstico en tiempo real sobre Zoho CRM, AWS S3 y Supabase; documenté incidentes y mejoré los flujos de soporte.",
    "t.baires.role": "Ingeniero de software Ruby on Rails",
    "t.baires": "Construí un sistema de gestión de citas médicas en Rails, integrado con Google Calendar, en un equipo ágil.",
    "t.cripto.role": "Fundador y CEO", "t.cripto": "Educación y asesoría en blockchain; proyectos con smart contracts y DApps.",
    "t.folk.role": "Cofundador", "t.folk": "Lideré campañas, ventas y operaciones como COO, CMO y CFO.",
    "t.free.h": "Freelance", "t.free.role": "Desarrollador full-stack",
    "t.free": "Aplicaciones web para clientes en México, España y Argentina, con los requerimientos gestionados directamente.",
    "room.education": "Educación", "room.content": "Contenido",
    "edu.ai.h": "Especialización en Inteligencia Artificial", "edu.ai.inst": "Universidad Autónoma de Occidente",
    "edu.pm.h": "Especialización en Gerencia de Proyectos", "edu.pm.inst": "Corporación Universitaria de Asturias",
    "edu.tec.h": "Tecnología en Informática", "edu.tec.inst": "Universidad del Pacífico",
    "content.label": "Contenido", "content.title": "Escribo y grabo sobre diseño de software",
    "content.sub": "Artículos y videos cortos sobre arquitectura de software, principios de diseño y programación, publicados bajo el pseudónimo MasonCoding.",
    "content.s1": "Visualizaciones en TikTok · últimos 12 meses",
    "content.s2": "Visualizaciones en YouTube · 142 videos · 187 horas vistas",
    "content.s3": "Visualizaciones / lecturas en Medium", "content.yt": "YouTube Short · 1.075 visualizaciones",
    "edu.label": "Educación", "edu.title": "Dónde estudié",
    "edu.bm.h": "Gestión de Negocios", "edu.bm.inst": "Universidad Autónoma de Manizales",
    "rutero.kind": "Proyecto independiente",
    "rutero.p": "Plataforma web de pasadías para zonas remotas de Colombia, empezando por el Pacífico. Una sola reserva cubre transporte, hospedaje, alimentación local y actividades culturales y ecológicas, con foco en apoyar a las comunidades locales y el turismo sostenible.",
    "rutero.h": "Hitos",
    "rutero.m1.h": "Fase 1 · Investigación y planeación",
    "rutero.m1": "Requisitos funcionales y no funcionales, arquitectura del sistema, wireframes y mockups.",
    "rutero.m2.h": "Fase 2 · Desarrollo del MVP",
    "rutero.m2": "Búsqueda y reservas, pagos y perfiles, panel de proveedores, integración de mapas y pasarela de pagos.",
    "rutero.reached": "Alcanzado", "rutero.last": "Alcanzado · última fase hasta hoy",
    "edu.se.h": "Ingeniería de Sistemas", "edu.se.inst": "Universidad del Pacífico · B.Eng.",
    "langs.label": "Idiomas", "langs.list": "Español (nativo) · Inglés (intermedio) · Portugués (básico)",
    "c.label": "Trabaja conmigo", "c.title": "Construyamos algo<br><em>sólido.</em>",
    "c.t1": "Modalidad", "c.t1v": "Contratista independiente · directo con tu equipo",
    "c.t2": "Ubicación", "c.t2v": "Colombia · UTC−5 · solapamiento total con la hora del Este de EE.UU.",
    "c.t3": "Inicio", "c.t3v": "Inmediato",
    "c.t4": "Foco", "c.t4v": "Ruby on Rails · Python · integraciones · agentes de IA",
    "c.mail": "Escríbeme", "c.cv": "Descargar CV (PDF)", "c.copy": "copiar", "c.copied": "copiado",
    "contact.label": "Contacto", "contact.title": "Escríbeme", "contact.lede": "Tu mensaje llega directo a mi correo. Te respondo desde mi cuenta.",
    "contact.name": "Nombre", "contact.email": "Correo", "contact.subject": "Asunto (opcional)", "contact.message": "Mensaje",
    "contact.cancel": "Cancelar", "contact.send": "Enviar mensaje",
    "foot": "Idea → Experiencia Digital",
    "viewer.label": "Detalles", "viewer.note": "Sobre esta visual",
    "viewer.demo": "Ver demo ↗", "viewer.code": "Código ↗", "w.indep": "Proyecto independiente",
    "prev": "← Anterior", "next": "Siguiente →", "close": "Cerrar",
  };

  const WORKS = {
    en: [
      { n: "I.", title: "El taller", meta: "2026 · Independent project · desktop app, running locally",
        body: "A local job-search agent for Windows. It searches remote roles on job boards, scores them against my profile, prepares B2B proposals and cover letters as PDFs, and reviews the inbox for portfolio contacts. Nothing leaves the computer without my approval: every email, application or form waits in a queue until I say yes. Built with Python, FastAPI, SQLite, the Claude Agent SDK, Google APIs and Playwright, and packaged as a Windows executable.",
        art: "A queue of pending actions on the left. Each one waits at a gate; only the approved ones pass through and become a document on the right. The agent proposes, the person decides.",
        demo: "https://villamorosjuan.pythonanywhere.com/", code: "https://github.com/villamoros/el-taller-demo" },
      { n: "II.", title: "Shurikapp", meta: "2025 · Independent project · work in progress",
        body: "A productivity platform for freelancers and remote teams that speaks five methods at once: Kanban, Scrum, Shape Up, XP and Lean. Built API-only in Ruby on Rails: the full data model lives in 23 migrations with UUID primary keys and complete models; JWT-authenticated API controllers are in progress, with a Next.js front end planned.",
        art: "Five columns, one per method. Cards drift between them the way work moves between ways of working: the grid is the same, the rhythm changes.",
        demo: "/#", code: "https://github.com/villamoros/shurikapp" },
      { n: "III.", title: "Rutero", meta: "2024 · Independent project · paused after Phase 2",
        body: "A web platform for day trips (pasadías) to remote areas of Colombia, starting on the Pacific coast. One booking covers transport, lodging, local food and cultural and eco-activities. Built with TypeScript, Node.js, Express.js, Next.js, Prisma and Clerk, together with skills and AI agents. Phase 1 (research, architecture, wireframes and mockups) and Phase 2 (MVP development) were reached; the project is paused there.",
        art: "A stretch of Pacific coast with four stops (transport, lodging, food, activity) joined into one itinerary. A point travels the route, the way one booking moves a traveller through all four.",
        demo: "https://rutero-mobile.vercel.app/", code: "https://github.com/villamoros/rutero" },
      { n: "IV.", title: "RexFy", meta: "2023 · Independent project",
        body: "A B2B marketplace for recyclable materials that connects waste generators, buyers and transformers, and carriers, with logistics tracking, company profiles and trust signals. A modular monolith: a Next.js and TypeScript web app, a FastAPI API with SQLAlchemy and Alembic, PostgreSQL, Redis for background email workers, and Clerk for sign-in.",
        art: "The same queue-and-gate drawing as El taller: listings and approvals wait at the gate, and only the ones that pass become a document.",
        demo: "https://rexfy-web.vercel.app/", code: "https://github.com/villamoros/rexfy" },
      { n: "V.", title: "Kovzu", meta: "2022 · Independent project",
        body: "Order management for workshops, built on Rails 8 with Hotwire and Tailwind CSS 4. Each order moves from the quote through sample review, quality inspection, deviation reports and payments until delivery, with lot tracking and a design system documented in the repository. PostgreSQL for data and Clerk for sign-in.",
        art: "Lanes of lots moving from quote to delivery. Each bar fills as its lot advances; the red mark is a deviation that has to be resolved before the lot can close.",
        demo: "/#", code: "https://github.com/villamoros/kovzu" },
      { n: "VI.", title: "Caviforj", meta: "2021 · Independent project",
        body: "A course platform for teachers, with a teacher area for courses, lessons and file uploads. Built with Next.js 15, React 19, Prisma, Clerk for accounts and UploadThing for files, with drag-and-drop ordering of lessons.",
        art: "A grid of lesson tiles. One is dragged to a new position and the rest make room, the way a teacher reorders a course without rebuilding it.",
        demo: "/#", code: "https://github.com/villamoros/caviforj" },
    ],
    es: [
      { n: "I.", title: "El taller", meta: "2026 · Proyecto independiente · aplicación de escritorio en uso local",
        body: "Un agente local para buscar empleo en Windows. Busca vacantes remotas en portales de empleo, las evalúa contra mi perfil, prepara propuestas B2B y cartas de presentación en PDF, y revisa el correo de los contactos del portafolio. Nada sale de la computadora sin mi aprobación: cada correo, postulación o formulario espera en una cola hasta que lo apruebo. Construido con Python, FastAPI, SQLite, el SDK de Claude, las APIs de Google y Playwright, y empaquetado como ejecutable de Windows.",
        art: "Una cola de acciones pendientes a la izquierda. Cada una espera en una compuerta; solo las aprobadas la atraviesan y se convierten en documento a la derecha. El agente propone, la persona decide.",
        demo: "https://villamorosjuan.pythonanywhere.com/", code: "https://github.com/villamoros/el-taller-demo" },
      { n: "II.", title: "Shurikapp", meta: "2025 · Proyecto independiente · obra en proceso",
        body: "Una plataforma de productividad para freelancers y equipos remotos que habla cinco métodos a la vez: Kanban, Scrum, Shape Up, XP y Lean. Construida solo como API en Ruby on Rails: el modelo de datos completo vive en 23 migraciones con llaves primarias UUID y modelos completos; los controladores con autenticación JWT están en progreso y el front end en Next.js está planeado.",
        art: "Cinco columnas, una por método. Las tarjetas se mueven entre ellas como el trabajo se mueve entre formas de trabajar: la grilla es la misma, el ritmo cambia.",
        demo: "/#", code: "https://github.com/villamoros/shurikapp" },
      { n: "III.", title: "Rutero", meta: "2024 · Proyecto independiente · en pausa tras la fase 2",
        body: "Plataforma web de pasadías para zonas remotas de Colombia, empezando por el Pacífico. Una sola reserva cubre transporte, hospedaje, alimentación local y actividades culturales y ecológicas. Construida con TypeScript, Node.js, Express.js, Next.js, Prisma y Clerk, junto con skills y agentes de IA. Se alcanzaron la fase 1 (investigación, arquitectura, wireframes y mockups) y la fase 2 (desarrollo del MVP); el proyecto quedó pausado ahí.",
        art: "Un tramo de costa del Pacífico con cuatro paradas (transporte, hospedaje, comida, actividad) unidas en un solo itinerario. Un punto recorre la ruta, como una sola reserva lleva al viajero por las cuatro.",
        demo: "https://rutero-mobile.vercel.app/", code: "https://github.com/villamoros/rutero" },
      { n: "IV.", title: "RexFy", meta: "2023 · Proyecto independiente",
        body: "Marketplace B2B de materiales reciclables que conecta generadores de residuos, compradores, transformadores y transportistas, con seguimiento logístico, perfiles de empresa y señales de confianza. Monolito modular: una app web en Next.js y TypeScript, una API en FastAPI con SQLAlchemy y Alembic, PostgreSQL, Redis para los workers de correo y Clerk para el ingreso.",
        art: "El mismo dibujo de cola y compuerta que El taller: las publicaciones y las aprobaciones esperan en la compuerta, y solo las que pasan se convierten en documento.",
        demo: "https://rexfy-web.vercel.app/", code: "https://github.com/villamoros/rexfy" },
      { n: "V.", title: "Kovzu", meta: "2022 · Proyecto independiente",
        body: "Gestión de pedidos para talleres, construida en Rails 8 con Hotwire y Tailwind CSS 4. Cada pedido avanza desde la cotización hasta la entrega, pasando por la revisión de muestras, la inspección de calidad, las actas de desviación y los pagos, con seguimiento por lotes y un sistema de diseño documentado en el repositorio. PostgreSQL para los datos y Clerk para el ingreso.",
        art: "Carriles de lotes que avanzan de la cotización a la entrega. Cada barra se llena al avanzar su lote; la marca roja es una desviación que hay que resolver antes de cerrar el lote.",
        demo: "/#", code: "https://github.com/villamoros/kovzu" },
      { n: "VI.", title: "Caviforj", meta: "2021 · Proyecto independiente",
        body: "Una plataforma de cursos para docentes, con un área de profesor para cursos, lecciones y carga de archivos. Construida con Next.js 15, React 19, Prisma, Clerk para las cuentas y UploadThing para los archivos, con ordenamiento de lecciones por arrastrar y soltar.",
        art: "Una cuadrícula de lecciones. Una se arrastra a otra posición y las demás hacen lugar, como un docente reordena un curso sin rehacerlo.",
        demo: "/#", code: "https://github.com/villamoros/caviforj" },
    ],
  };

  const ART = {
    kanban(ctx, w, h, t, p) {
      const R = rng(7), cols = 5, gap = w * 0.02, cw = (w - gap * (cols + 1)) / cols;
      const colors = [p.red, p.blue, p.ochre, p.ink, p.green, p.rose];
      ctx.strokeStyle = p.ink; ctx.lineWidth = Math.max(2, w * 0.006);
      for (let c = 0; c < cols; c++) {
        const x = gap + c * (cw + gap);
        ctx.fillStyle = alpha(p.ink, .06); ctx.fillRect(x, gap, cw, h - gap * 2);
        ctx.fillStyle = p.ink; ctx.fillRect(x, gap, cw, Math.max(3, h * .012));
      }
      for (let i = 0; i < 16; i++) {
        const from = Math.floor(R() * cols), to = Math.min(cols - 1, from + (R() > .5 ? 1 : 0));
        const k = ease((t * 1.6) - i * 0.04);
        const col = from + (to - from) * k;
        const x = gap + col * (cw + gap) + cw * .1, y = gap + h * .06 + (i % 4) * (h * .21) + R() * h * .03;
        const ch = h * (.1 + R() * .07);
        ctx.fillStyle = R() > .45 ? colors[Math.floor(R() * colors.length)] : p.mat;
        ctx.fillRect(x, y, cw * .8, ch); ctx.strokeRect(x, y, cw * .8, ch);
      }
    },
    calendar(ctx, w, h, t, p) {
      const R = rng(21), cols = 7, rows = 9, m = w * .1;
      const cx = (w - m * 2) / (cols - 1), cy = (h - m * 2) / (rows - 1), r = Math.min(cx, cy) * .34;
      ctx.lineWidth = Math.max(1.5, r * .18);
      for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
        const x = m + i * cx, y = m + j * cy, v = R(), idx = j * cols + i, on = ease(t * 1.5 - idx / (rows * cols) * .9);
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
        if (v < .42) { ctx.fillStyle = alpha(i > 4 ? p.ink3 : p.blue, .15 + .85 * on); ctx.fill(); }
        else if (v < .52) { ctx.strokeStyle = p.red; ctx.stroke();
          ctx.beginPath(); ctx.moveTo(x - r * .7, y - r * .7); ctx.lineTo(x - r * .7 + r * 1.4 * on, y - r * .7 + r * 1.4 * on); ctx.stroke(); }
        else { ctx.strokeStyle = alpha(p.ink, .55); ctx.stroke(); }
      }
      const sweepY = m - cy / 2 + (h - m * 2 + cy) * ((t * .5) % 1);
      ctx.fillStyle = alpha(p.ochre, .18); ctx.fillRect(0, sweepY, w, cy * .5);
    },
    signal(ctx, w, h, t, p) {
      const R = rng(3), ch = 6, m = h * .1, step = (h - m * 2) / (ch - 1), spikeCh = 3, sx = w * .62;
      for (let c = 0; c < ch; c++) {
        const y0 = m + c * step, amp = step * .18;
        ctx.beginPath(); ctx.lineWidth = c === spikeCh ? 2.4 : 1.2; ctx.strokeStyle = c === spikeCh ? p.ink : alpha(p.ink, .55);
        const seed = R() * 100;
        for (let x = 0; x <= w; x += 3) {
          let y = y0 + Math.sin((x + seed + t * 260) * .045) * amp * .35 + Math.sin((x * .13) + seed) * amp * .25;
          if (c === spikeCh) { const d = Math.abs(x - sx); if (d < w * .05) y -= (1 - d / (w * .05)) * step * .9 * (.4 + .6 * Math.abs(Math.sin(t * 6))); }
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      const y = m + spikeCh * step, bw = w * .2 * ease(t * 2 + .2);
      ctx.strokeStyle = p.red; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(sx - w * .06, y - step * .55); ctx.lineTo(sx - w * .06, y - step * 1.2); ctx.lineTo(sx - w * .06 + bw, y - step * 1.2); ctx.lineTo(sx - w * .06 + bw, y - step * .55); ctx.stroke();
      ctx.fillStyle = p.red; ctx.font = `500 ${Math.max(10, w * .028)}px "JetBrains Mono", monospace`;
      ctx.fillText("SLA", sx - w * .06, y - step * 1.32);
    },
    flow(ctx, w, h, t, p) {
      const N = [[.12, .5], [.34, .25], [.34, .75], [.58, .5], [.8, .3], [.8, .72], [.94, .5]].map(([x, y]) => [x * w, y * h]);
      const E = [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5], [4, 6], [5, 6]];
      const curve = (a, b, k) => { const [x1, y1] = N[a], [x2, y2] = N[b], mx = (x1 + x2) / 2;
        const u = 1 - k; return [u * u * u * x1 + 3 * u * u * k * mx + 3 * u * k * k * mx + k * k * k * x2, u * u * u * y1 + 3 * u * u * k * y1 + 3 * u * k * k * y2 + k * k * k * y2]; };
      ctx.lineWidth = 1.6; ctx.strokeStyle = alpha(p.ink, .6);
      E.forEach(([a, b]) => { const [x1, y1] = N[a], [x2, y2] = N[b], mx = (x1 + x2) / 2;
        ctx.beginPath(); ctx.moveTo(x1, y1); ctx.bezierCurveTo(mx, y1, mx, y2, x2, y2); ctx.stroke(); });
      E.forEach(([a, b], i) => { const k = ((t * .9) + i * .17) % 1; const [x, y] = curve(a, b, ease(k));
        ctx.fillStyle = i % 3 === 0 ? p.red : p.blue; ctx.beginPath(); ctx.arc(x, y, Math.max(3, w * .009), 0, Math.PI * 2); ctx.fill(); });
      const s = Math.max(16, w * .055);
      N.forEach(([x, y], i) => { ctx.fillStyle = i === 0 ? p.ochre : i === N.length - 1 ? p.green : p.mat; ctx.strokeStyle = p.ink; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.roundRect ? ctx.roundRect(x - s / 2, y - s / 2, s, s, s * .22) : ctx.rect(x - s / 2, y - s / 2, s, s); ctx.fill(); ctx.stroke(); });
    },
    atlas(ctx, w, h, t, p) {
      const proj = (lon, lat) => [(lon + 120) / 130 * w, (55 - lat) / 100 * h];
      ctx.fillStyle = alpha(p.ink, .28);
      for (let lon = -120; lon <= 10; lon += 5) for (let lat = -45; lat <= 55; lat += 5) { const [x, y] = proj(lon, lat); ctx.fillRect(x, y, 1.4, 1.4); }
      const home = [-74.07, 4.71];
      const places = [["Mexico", -99.13, 19.43], ["Spain", -3.7, 40.42], ["Argentina", -58.38, -34.6]];
      const [hx, hy] = proj(...home);
      places.forEach(([name, lon, lat], i) => {
        const [x, y] = proj(lon, lat), k = ease(t * 1.4 - i * .15), mx = (hx + x) / 2, my = Math.min(hy, y) - h * .18;
        ctx.strokeStyle = [p.blue, p.red, p.ochre][i]; ctx.lineWidth = 2.2; ctx.beginPath();
        for (let s = 0; s <= 1.0001 * k; s += .02) { const u = 1 - s; const px = u * u * hx + 2 * u * s * mx + s * s * x, py = u * u * hy + 2 * u * s * my + s * s * y; s === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py); }
        ctx.stroke();
        ctx.fillStyle = ctx.strokeStyle; ctx.beginPath(); ctx.arc(x, y, 5 * k, 0, Math.PI * 2); ctx.fill();
        if (k > .5) { ctx.fillStyle = p.ink; ctx.font = `400 ${Math.max(10, w * .022)}px "JetBrains Mono", monospace`; ctx.fillText(name.toUpperCase(), x + 9, y + 4); }
      });
      ctx.fillStyle = p.ink; ctx.beginPath(); ctx.arc(hx, hy, 7, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = p.ink; ctx.beginPath(); ctx.arc(hx, hy, 12 + 6 * Math.sin(t * 4), 0, Math.PI * 2); ctx.stroke();
    },
    taller(ctx, w, h, t, p) {
      // Cola de acciones: cada una espera en la compuerta; solo las aprobadas pasan y se vuelven documento.
      const gx = w * .5, ix = w * .08, ox = w * .72, iw = w * .2, ih = h * .085;
      ctx.lineWidth = Math.max(1.5, w * .005);
      ctx.strokeStyle = p.red; ctx.setLineDash([6, 6]);
      ctx.beginPath(); ctx.moveTo(gx, h * .08); ctx.lineTo(gx, h * .92); ctx.stroke(); ctx.setLineDash([]);
      for (let i = 0; i < 5; i++) {
        const y = h * (.16 + i * .16), q = (t * .32 + i * .21) % 1, tope = gx - iw / 2;
        let x, aprobada;
        if (q < .5) { x = ix + (tope - ix) * ease(q * 2); aprobada = false; }
        else { x = tope + (ox - tope) * ease((q - .5) * 2); aprobada = true; }
        ctx.fillStyle = aprobada ? alpha(p.blue, .85) : p.mat;
        ctx.strokeStyle = p.ink; ctx.fillRect(x, y, iw, ih); ctx.strokeRect(x, y, iw, ih);
      }
      // documento de salida: las líneas son el texto generado
      ctx.strokeStyle = p.ink; ctx.lineWidth = Math.max(1.5, w * .004);
      ctx.strokeRect(ox, h * .12, w * .2, h * .76);
      for (let j = 0; j < 4; j++) { ctx.fillStyle = alpha(p.ink, .35); ctx.fillRect(ox + w * .03, h * (.22 + j * .12), w * .14, Math.max(2, h * .012)); }
    },
    kovzu(ctx, w, h, t, p) {
      // Lotes avanzando de la cotización a la entrega. La marca roja es una desviación que hay que resolver antes de cerrar.
      const x0 = w * .1, x1 = w * .9, etapas = 6, filas = 5;
      const xs = i => x0 + (x1 - x0) * i / (etapas - 1);
      for (let r = 0; r < filas; r++) {
        const y = h * (.16 + r * .17), q = (t * .28 + r * .19) % 1, desviacion = r === 2;
        ctx.strokeStyle = alpha(p.ink, .3); ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(x1, y); ctx.stroke();
        for (let e = 0; e < etapas; e++) { ctx.beginPath(); ctx.moveTo(xs(e), y - h * .03); ctx.lineTo(xs(e), y + h * .03); ctx.stroke(); }
        const fin = x0 + (x1 - x0) * Math.min(q * 1.25, 1);
        ctx.fillStyle = desviacion ? p.red : p.blue;
        ctx.fillRect(x0, y - h * .025, fin - x0, h * .05);
        if (desviacion && q > .6) {
          ctx.beginPath(); ctx.arc(xs(3), y - h * .07, Math.max(4, w * .012), 0, Math.PI * 2);
          ctx.fillStyle = p.red; ctx.fill();
        }
      }
    },
    caviforj(ctx, w, h, t, p) {
      // Un curso como cuadrícula de lecciones: una se arrastra a otra posición y las demás hacen lugar.
      const cols = 3, m = w * .1, gx = (w - m * 2) / cols, gy = (h - m * 2) / cols;
      const cell = Math.min(gx, gy) * .78;
      const slot = s => ({ x: m + (s % cols) * gx + (gx - cell) / 2, y: m + Math.floor(s / cols) * gy + (gy - cell) / 2 });
      const at = v => { const i = Math.floor(v), f = v - i, a = slot(i), b = slot(Math.min(8, i + 1));
        return { x: a.x + (b.x - a.x) * f, y: a.y + (b.y - a.y) * f }; };
      const desde = 4, hasta = 1, ciclo = (t * .3) % 1, tri = 1 - Math.abs(2 * ciclo - 1), d = ease(tri);
      const dibujar = (pt, arrastrada) => {
        ctx.fillStyle = arrastrada ? alpha(p.blue, .9) : p.mat;
        ctx.strokeStyle = p.ink; ctx.lineWidth = 1.4;
        if (arrastrada) { ctx.shadowColor = alpha(p.ink, .25); ctx.shadowBlur = cell * .15; ctx.shadowOffsetY = cell * .06; }
        ctx.beginPath(); ctx.roundRect ? ctx.roundRect(pt.x, pt.y, cell, cell, cell * .1) : ctx.rect(pt.x, pt.y, cell, cell);
        ctx.fill(); ctx.stroke(); ctx.shadowBlur = 0; ctx.shadowOffsetY = 0;
        ctx.fillStyle = alpha(p.ink, .3);
        ctx.fillRect(pt.x + cell * .14, pt.y + cell * .62, cell * .6, Math.max(2, cell * .05));
        ctx.fillRect(pt.x + cell * .14, pt.y + cell * .74, cell * .4, Math.max(2, cell * .05));
      };
      // hueco donde estaba la lección arrastrada
      const origen = slot(desde);
      ctx.setLineDash([5, 5]); ctx.strokeStyle = alpha(p.ink, .45); ctx.lineWidth = 1.2;
      ctx.strokeRect(origen.x, origen.y, cell, cell); ctx.setLineDash([]);
      for (let j = 0; j < 9; j++) {
        if (j === desde) continue;
        const v = j >= hasta && j < desde ? j + d : j;
        dibujar(at(v), false);
      }
      const a = slot(desde), b = slot(hasta);
      dibujar({ x: a.x + (b.x - a.x) * d, y: a.y + (b.y - a.y) * d }, true);
    },
    rutero(ctx, w, h, t, p) {
      // Costa del Pacífico: olas arriba, arena abajo y una ruta de pasadía con cuatro paradas.
      ctx.lineWidth = 1; ctx.strokeStyle = alpha(p.blue, .4);
      for (let k = 0; k < 7; k++) {
        ctx.beginPath();
        for (let x = 0; x <= w; x += 4) { const y = h * .06 + k * h * .04 + Math.sin(x * .025 + t * 3 + k) * h * .006; x ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
        ctx.stroke();
      }
      const coast = x => h * (.56 + .05 * Math.sin(x / w * 5.2) + .02 * Math.sin(x / w * 13));
      ctx.beginPath(); ctx.moveTo(0, h);
      for (let x = 0; x <= w; x += 4) ctx.lineTo(x, coast(x));
      ctx.lineTo(w, h); ctx.closePath(); ctx.fillStyle = alpha(p.ochre, .28); ctx.fill();
      ctx.strokeStyle = p.ink; ctx.lineWidth = 1.6; ctx.beginPath();
      for (let x = 0; x <= w; x += 4) x ? ctx.lineTo(x, coast(x)) : ctx.moveTo(x, coast(x));
      ctx.stroke();
      // paradas que suben y bajan para que las etiquetas no se encimen (importa en tarjetas altas)
      const stops = [[.14, "TRANSPORT", p.blue], [.38, "LODGING", p.red], [.62, "FOOD", p.green], [.86, "ACTIVITY", p.ochre]]
        .map(([fx, label, color], i) => ({ x: fx * w, y: coast(fx * w) - h * (i % 2 ? .08 : .17), label, color, below: i % 2 === 1 }));
      ctx.setLineDash([6, 6]); ctx.strokeStyle = p.ink; ctx.lineWidth = 1.4; ctx.beginPath();
      stops.forEach((s, i) => (i ? ctx.lineTo(s.x, s.y) : ctx.moveTo(s.x, s.y)));
      ctx.stroke(); ctx.setLineDash([]);
      const r = Math.max(9, w * .02);
      ctx.font = `500 ${Math.max(9, w * .02)}px "JetBrains Mono", monospace`;
      stops.forEach(s => {
        ctx.fillStyle = s.color; ctx.beginPath(); ctx.arc(s.x, s.y, r, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = p.ink; ctx.lineWidth = 1.5; ctx.stroke();
        ctx.fillStyle = p.ink; ctx.fillText(s.label, s.x - r, s.below ? s.y + r * 3 : s.y - r * 2);
      });
      // un punto viaja por la ruta
      const u = ((t * .22) % 1) * (stops.length - 1), i = Math.floor(u), f = u - i;
      const a = stops[i], b = stops[Math.min(i + 1, stops.length - 1)];
      ctx.fillStyle = p.ink; ctx.beginPath(); ctx.arc(a.x + (b.x - a.x) * f, a.y + (b.y - a.y) * f, Math.max(3, w * .008), 0, Math.PI * 2); ctx.fill();
    },
  };

  /* obras del muro: estado estático, se animan con hover/foco */
  const works = [...document.querySelectorAll(".work")].map(li => ({
    li, canvas: li.querySelector("canvas"), kind: li.dataset.art, t: reduce ? 1 : .55, target: null, raf: 0 }));
  function drawWork(o) { const { ctx, w, h } = fit(o.canvas); ctx.clearRect(0, 0, w, h); ART[o.kind](ctx, w, h, o.t, pal()); }
  function animate(o, on) {
    if (reduce) return;
    cancelAnimationFrame(o.raf);
    if (!on) return;
    let last = performance.now();
    const loop = now => { o.t += (now - last) / 2400; last = now; drawWork(o); o.raf = requestAnimationFrame(loop); };
    o.raf = requestAnimationFrame(loop);
  }
  works.forEach(o => {
    const f = o.li.querySelector(".frame");
    f.addEventListener("pointerenter", () => animate(o, true));
    f.addEventListener("pointerleave", () => animate(o, false));
    f.addEventListener("focus", () => animate(o, true));
    f.addEventListener("blur", () => animate(o, false));
    f.addEventListener("click", () => openViewer(+f.dataset.work));
  });
  // en pantallas táctiles, animar la obra visible
  if (matchMedia("(hover: none)").matches && !reduce) {
    const vio = new IntersectionObserver(es => es.forEach(e => {
      const o = works.find(w => w.li === e.target); animate(o, e.isIntersecting); }), { threshold: .6 });
    works.forEach(o => vio.observe(o.li));
  }

  /* ------------------------------------------------------------ visor */
  const viewer = document.getElementById("viewer");
  const vCanvas = document.getElementById("viewer-art");
  let vIndex = 0, vRaf = 0, vT = 0;
  function fillViewer() {
    const d = WORKS[lang][vIndex];
    document.getElementById("viewer-num").textContent = d.n;
    document.getElementById("viewer-title").textContent = d.title;
    document.getElementById("viewer-meta").textContent = d.meta;
    document.getElementById("viewer-body").textContent = d.body;
    document.getElementById("viewer-art-note").textContent = d.art;
    document.getElementById("demo").href = d.demo;
    document.getElementById("codigo").href = d.code;
    vT = reduce ? 1 : 0;
  }
  function viewerLoop(now) {
    const { ctx, w, h } = fit(vCanvas); const p = pal();
    ctx.clearRect(0, 0, w, h); ctx.fillStyle = p.mat; const pad = Math.min(w, h) * .06; ctx.fillRect(pad, pad, w - pad * 2, h - pad * 2);
    ctx.save(); ctx.translate(pad * 2, pad * 2); ART[works[vIndex].kind](ctx, w - pad * 4, h - pad * 4, vT, p); ctx.restore();
    if (!reduce) { vT += 1 / 150; vRaf = requestAnimationFrame(viewerLoop); }
  }
  function openViewer(i) {
    vIndex = i; fillViewer();
    if (!viewer.open) viewer.showModal();
    cancelAnimationFrame(vRaf); requestAnimationFrame(viewerLoop);
    document.body.style.overflow = "hidden";
  }
  function closeViewer() { viewer.close(); }
  viewer.addEventListener("close", () => { cancelAnimationFrame(vRaf); document.body.style.overflow = "";
    works[vIndex].li.querySelector(".frame").focus({ preventScroll: true }); });
  document.getElementById("close").addEventListener("click", closeViewer);
  document.getElementById("next").addEventListener("click", () => openViewer((vIndex + 1) % works.length));
  document.getElementById("prev").addEventListener("click", () => openViewer((vIndex + works.length - 1) % works.length));
  viewer.addEventListener("click", e => { if (e.target === viewer) closeViewer(); });
  viewer.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") openViewer((vIndex + 1) % works.length);
    if (e.key === "ArrowLeft") openViewer((vIndex + works.length - 1) % works.length);
  });

  /* ------------------------------------------------------------ cursor "Ver" */
  const cursor = document.querySelector(".cursor");
  if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
    let cx = 0, cy = 0, x = 0, y = 0;
    addEventListener("pointermove", e => { cx = e.clientX; cy = e.clientY; }, { passive: true });
    (function follow() { x += (cx - x) * .2; y += (cy - y) * .2; cursor.style.translate = `${x}px ${y}px`; requestAnimationFrame(follow); })();
    document.querySelectorAll(".frame").forEach(f => {
      f.addEventListener("pointerenter", () => cursor.classList.add("on"));
      f.addEventListener("pointerleave", () => cursor.classList.remove("on"));
    });
  }

  /* ------------------------------------------------------------ hero: del pincel a la grilla */
  const hero = document.getElementById("hero-canvas");
  const strokes = (() => { const R = rng(1987); return Array.from({ length: 34 }, (_, i) => ({
    y: .08 + R() * .62, amp: .02 + R() * .07, freq: 1 + R() * 3, phase: R() * 6.28, x0: R() * .3, x1: .55 + R() * .45,
    w: .6 + R() * 2.2, color: i === 5 ? "red" : i === 17 ? "blue" : i === 26 ? "ochre" : "ink" })); })();
  let precision = .35, targetP = .35, heroT = 0, heroVisible = true;
  hero.parentElement.addEventListener("pointermove", e => {
    const b = hero.getBoundingClientRect(); targetP = Math.min(1, Math.max(0, (e.clientX - b.left) / b.width)); });
  new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; }).observe(hero);
  const touch = matchMedia("(hover: none)").matches;
  if (touch) document.getElementById("hint").hidden = true;
  function drawHero() {
    const { ctx, w, h } = fit(hero); const p = pal();
    ctx.clearRect(0, 0, w, h);
    const g = Math.max(28, w / 34);
    ctx.strokeStyle = alpha(p.ink, .05 + .07 * precision); ctx.lineWidth = 1;   // grilla que aparece
    for (let x = 0; x < w; x += g) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
    for (let y = 0; y < h; y += g) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
    strokes.forEach(s => {
      const col = s.color === "ink" ? alpha(p.ink, .2) : alpha(p[s.color], .85);
      ctx.strokeStyle = col; ctx.lineWidth = s.w * (s.color === "ink" ? 1 : 2.2); ctx.lineCap = "round"; ctx.lineJoin = "round";
      ctx.beginPath();
      const narrow = w < 760, n = 60;
      const xa = narrow ? s.x0 * w * .5 : w * .36 + s.x0 * w * .3, xb = narrow ? w * .5 + s.x1 * w * .5 : s.x1 * w;
      const band = narrow ? h * (.04 + s.y * .28) : h * s.y, A = Math.min(h, w * .7) * s.amp;
      for (let i = 0; i <= n; i++) {
        const u = i / n, x = xa + (xb - xa) * u;
        const organic = band + Math.sin(u * s.freq * 6.28 + s.phase + heroT) * A + Math.sin(u * 17 + s.phase) * A * .1;
        const snapX = Math.round(x / g) * g, snapY = Math.round(organic / g) * g;
        const px = x + (snapX - x) * precision, py = organic + (snapY - organic) * precision;
        i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
      }
      ctx.stroke();
    });
  }
  (function heroLoop() {
    if (touch && !reduce) targetP = .5 + .5 * Math.sin(heroT * .7);
    if (heroVisible) { precision += (targetP - precision) * .06; if (!reduce) heroT += .006; drawHero(); }
    requestAnimationFrame(heroLoop);
  })();

  /* ------------------------------------------------------------ copiar correo, año, redibujar */
  document.getElementById("copy-mail").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText("villamorosjuan@gmail.com"); } catch { return; }
    const l = document.querySelector(".copy-label"); l.textContent = t("c.copied");
    setTimeout(() => { l.textContent = t("c.copy"); }, 1600);
  });
  document.getElementById("year").textContent = new Date().getFullYear();
  function redrawAll() { works.forEach(drawWork); }
  let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(redrawAll, 120); });
  document.fonts?.ready.then(redrawAll);
  applyLang(); redrawAll();
})();

/* Menú móvil: botón Menu en la barra y panel con los mismos enlaces */
(() => {
  const btn = document.getElementById("menu-btn");
  const nav = document.getElementById("mobile-nav");
  if (!btn || !nav) return;
  const set = open => { nav.hidden = !open; btn.setAttribute("aria-expanded", String(open)); };
  btn.addEventListener("click", () => set(nav.hidden));
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => set(false)));
  document.addEventListener("keydown", e => { if (e.key === "Escape") set(false); });
  matchMedia("(min-width: 981px)").addEventListener("change", e => { if (e.matches) set(false); });
})();

/* Ir arriba: el logo, los enlaces #top y el botón flotante. Se maneja en JS porque un ancla
   no sube bien hasta el encabezado fijo y el desplazamiento suave del CSS puede no completarse. */
(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)");
  const subir = e => {
    e?.preventDefault();
    window.scrollTo({ top: 0, behavior: reduce.matches ? "auto" : "smooth" });
  };
  document.querySelectorAll('a[href="#top"]').forEach(a => a.addEventListener("click", subir));
  const b = document.getElementById("to-top");
  if (!b) return;
  b.addEventListener("click", subir);
  const mostrar = () => b.classList.toggle("on", scrollY > 600);
  addEventListener("scroll", mostrar, { passive: true });
  mostrar();
})();
