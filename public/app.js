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
    "hero.lede": "Ingeniero de sistemas con formación en gestión de negocios. Construyo APIs en Ruby on Rails, integraciones y automatización con IA para equipos cuyas operaciones dependen del software. También he dirigido el lado comercial: ventas, operación y atención al cliente.",
    "hero.cta": "Trabaja conmigo", "hero.cta2": "Ver los proyectos ↓",
    "hero.hint": "Mueve el cursor sobre el lienzo: a la izquierda el pincel, a la derecha la grilla.",
    "hero.p.title": "Sistemas y negocio", "hero.p.year": "2016 – hoy",
    "hero.p.medium": "Ruby on Rails, Python, integraciones, agentes de IA, operación.",
    "hero.p.status": "Disponible de inmediato · contratista independiente",
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
    "m.backend": "Backend", "m.ai": "IA y automatización", "m.ai.list": "Integración de agentes de IA · n8n · Robocorp (RPA) · flujos low-code",
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
    "foot": "Hecho en Colombia, un commit cuidadoso a la vez.", "foot.top": "Volver a la entrada ↑",
    "viewer.label": "Detalles", "viewer.note": "Sobre esta visual",
    "prev": "← Anterior", "next": "Siguiente →", "close": "Cerrar",
  };

  const WORKS = {
    en: [
      { n: "I.", title: "Shurikaizen", meta: "2026 · Independent project · work in progress",
        body: "A productivity platform for freelancers and remote teams that speaks five methods at once: Kanban, Scrum, Shape Up, XP and Lean. Built API-only in Ruby on Rails: the full data model lives in 23 migrations with UUID primary keys and complete models; JWT-authenticated API controllers are in progress, with a Next.js front end planned.",
        art: "Five columns, one per method. Cards drift between them the way work moves between ways of working: the grid is the same, the rhythm changes." },
      { n: "II.", title: "Appointments", meta: "2021 – 2022 · BairesDev · Ruby on Rails Software Engineer",
        body: "A medical appointment management system built in Ruby on Rails and integrated with the Google Calendar API, delivered with an Agile team under high standards of code quality and client communication. Scheduling taught me that in healthcare the data model is the product: availability, cancellations and time zones are consistency problems before they are interface problems.",
        art: "A month as a field of circles. Filled discs are booked, rings are open, crossed ones were cancelled — the sweep is the system reconciling the calendar." },
      { n: "III.", title: "Incident operations", meta: "2025 – 2026 · SITIC S.A.S. · Support Engineer",
        body: "Software and hardware support that kept points of sale running for Mattelsa, Studio F and ELA, plus incident triage, prioritization and escalation by severity for Monómeros, Olímpica, Dollarcity and Coéxito, with response and resolution times monitored against SLA commitments.",
        art: "Several channels of signal at rest. When one spikes, a vermilion bracket marks the response window: the SLA drawn as a frame." },
      { n: "IV.", title: "Agents & automation", meta: "Ongoing series · Python, n8n, Robocorp (RPA)",
        body: "AI agent integration and process automation with Python, n8n and Robocorp, from low-code workflows to RPA. The same instinct runs through all of it: narrow, well-described steps, observable at every hop, so a person can see what the machine did and why.",
        art: "A workflow graph. Small packets travel the edges and pause at each node, the way a well-built automation should: visible, inspectable, one step at a time." },
      { n: "V.", title: "Client projects", meta: "2016 – 2021 · Freelance · Full-Stack Developer",
        body: "Web applications and scalable solutions for clients in Mexico, Spain and Argentina, with requirements managed directly with each client and delivered on time and to quality standards.",
        art: "An atlas drawn from Colombia: three arcs to Mexico, Spain and Argentina, plotted on a plain latitude–longitude grid." },
      { n: "VI.", title: "Rutero", meta: "2024 · Independent project · paused after Phase 2",
        body: "A web platform for day trips (pasadías) to remote areas of Colombia, starting on the Pacific coast. One booking covers transport, lodging, local food and cultural and eco-activities. Built with TypeScript, Node.js, Express.js, Next.js, Prisma and Clerk, together with skills and AI agents. Phase 1 (research, architecture, wireframes and mockups) and Phase 2 (MVP development) were reached; the project is paused there.",
        art: "A stretch of Pacific coast with four stops (transport, lodging, food, activity) joined into one itinerary. A point travels the route, the way one booking moves a traveller through all four." },
    ],
    es: [
      { n: "I.", title: "Shurikaizen", meta: "2026 · Proyecto independiente · obra en proceso",
        body: "Una plataforma de productividad para freelancers y equipos remotos que habla cinco métodos a la vez: Kanban, Scrum, Shape Up, XP y Lean. Construida solo como API en Ruby on Rails: el modelo de datos completo vive en 23 migraciones con llaves primarias UUID y modelos completos; los controladores con autenticación JWT están en progreso y el front end en Next.js está planeado.",
        art: "Cinco columnas, una por método. Las tarjetas se mueven entre ellas como el trabajo se mueve entre formas de trabajar: la grilla es la misma, el ritmo cambia." },
      { n: "II.", title: "Citas", meta: "2021 – 2022 · BairesDev · Ingeniero de software Ruby on Rails",
        body: "Un sistema de gestión de citas médicas en Ruby on Rails integrado con la API de Google Calendar, entregado con un equipo ágil y altos estándares de calidad de código y comunicación con el cliente. Agendar me enseñó que en salud el modelo de datos es el producto: disponibilidad, cancelaciones y zonas horarias son problemas de consistencia antes que de interfaz.",
        art: "Un mes como un campo de círculos. Los discos llenos están reservados, los anillos libres y los tachados se cancelaron; el barrido es el sistema conciliando el calendario." },
      { n: "III.", title: "Operación de incidentes", meta: "2025 – 2026 · SITIC S.A.S. · Ingeniero de soporte",
        body: "Soporte de software y hardware para mantener operando los puntos de venta de Mattelsa, Studio F y ELA, y triage, priorización y escalamiento de incidentes por severidad para Monómeros, Olímpica, Dollarcity y Coéxito, con tiempos de respuesta y resolución medidos contra el SLA.",
        art: "Varios canales de señal en reposo. Cuando uno se dispara, un corchete bermellón marca la ventana de respuesta: el SLA dibujado como marco." },
      { n: "IV.", title: "Agentes y automatización", meta: "Serie en curso · Python, n8n, Robocorp (RPA)",
        body: "Integración de agentes de IA y automatización de procesos con Python, n8n y Robocorp, desde flujos low-code hasta RPA. El mismo instinto atraviesa todo: pasos acotados y bien descritos, observables en cada salto, para que una persona vea qué hizo la máquina y por qué.",
        art: "Un grafo de flujo. Pequeños paquetes recorren las aristas y se detienen en cada nodo, como debe hacerlo una buena automatización: visible, revisable, paso a paso." },
      { n: "V.", title: "Proyectos para clientes", meta: "2016 – 2021 · Freelance · Desarrollador full-stack",
        body: "Aplicaciones web y soluciones escalables para clientes en México, España y Argentina, con los requerimientos gestionados directamente con cada cliente y entregadas a tiempo y con calidad.",
        art: "Un atlas trazado desde Colombia: tres arcos hacia México, España y Argentina sobre una grilla simple de latitud y longitud." },
      { n: "VI.", title: "Rutero", meta: "2024 · Proyecto independiente · en pausa tras la fase 2",
        body: "Plataforma web de pasadías para zonas remotas de Colombia, empezando por el Pacífico. Una sola reserva cubre transporte, hospedaje, alimentación local y actividades culturales y ecológicas. Construida con TypeScript, Node.js, Express.js, Next.js, Prisma y Clerk, junto con skills y agentes de IA. Se alcanzaron la fase 1 (investigación, arquitectura, wireframes y mockups) y la fase 2 (desarrollo del MVP); el proyecto quedó pausado ahí.",
        art: "Un tramo de costa del Pacífico con cuatro paradas (transporte, hospedaje, comida, actividad) unidas en un solo itinerario. Un punto recorre la ruta, como una sola reserva lleva al viajero por las cuatro." },
    ],
  };

  const EN = {};
  document.querySelectorAll("[data-i18n]").forEach(el => { EN[el.dataset.i18n] = el.innerHTML; });
  document.querySelectorAll("[data-i18n-html]").forEach(el => { EN[el.dataset.i18nHtml] = el.innerHTML; });
  EN["c.copied"] = "copied";
  document.querySelectorAll("[data-room-key]").forEach(el => {
    const k = el.dataset.roomKey; EN[k] = k.split(".")[1].replace(/^\w/, c => c.toUpperCase());
  });
  EN["room.side"] = "Side projects";

  let lang = new URLSearchParams(location.search).get("lang") || store.get("jv-lang") ||
             ((navigator.language || "").startsWith("es") ? "es" : "en");
  const t = k => (lang === "es" ? ES[k] : EN[k]) ?? EN[k] ?? k;

  function applyLang() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => { el.innerHTML = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    const b = document.getElementById("lang");
    b.textContent = lang === "es" ? "EN" : "ES";
    b.setAttribute("aria-label", lang === "es" ? "Switch to English" : "Cambiar a español");
    updateRoom(true);
  }
  document.getElementById("lang").addEventListener("click", () => {
    lang = lang === "es" ? "en" : "es"; store.set("jv-lang", lang); applyLang();
  });

  /* ------------------------------------------------------------ tema */
  const root = document.documentElement;
  const saved = store.get("jv-theme");
  if (saved) root.dataset.theme = saved;
  document.getElementById("theme").addEventListener("click", () => {
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark"; store.set("jv-theme", root.dataset.theme);
    redrawAll();
  });
  matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", () => redrawAll());
  const css = v => getComputedStyle(root).getPropertyValue(v).trim();
  const pal = () => ({ ink: css("--ink"), ink3: css("--ink-3"), mat: css("--mat"), paper: css("--paper"),
    red: css("--vermilion"), blue: css("--ultramarine"), ochre: css("--ochre"), green: css("--viridian"), rose: css("--rose"),
    line: css("--line"), frame: css("--frame") });

  /* ------------------------------------------------------------ sala actual, barra, aparición */
  const rooms = [...document.querySelectorAll("[data-room]")];
  let currentRoom = rooms[0];
  function updateRoom(force) {
    const mid = innerHeight * 0.45;
    const r = rooms.find(s => { const b = s.getBoundingClientRect(); return b.top <= mid && b.bottom > mid; }) || currentRoom;
    if (r !== currentRoom || force) {
      currentRoom = r;
      document.getElementById("room-num").textContent = r.dataset.room;
      document.getElementById("room-name").textContent = t(r.dataset.roomKey);
      document.querySelectorAll(".topbar nav a").forEach(a => a.classList.toggle("active", a.hash === "#" + r.id));
    }
    document.querySelector(".topbar").classList.toggle("scrolled", scrollY > 40);
  }
  addEventListener("scroll", () => updateRoom(false), { passive: true });

  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  /* ------------------------------------------------------------ utilidades de dibujo */
  function rng(seed) { return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let x = Math.imul(seed ^ seed >>> 15, 1 | seed);
    x = x + Math.imul(x ^ x >>> 7, 61 | x) ^ x; return ((x ^ x >>> 14) >>> 0) / 4294967296; }; }
  function fit(canvas) {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    }
    const ctx = canvas.getContext("2d"); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx, w, h };
  }
  const ease = x => 1 - Math.pow(1 - Math.min(Math.max(x, 0), 1), 3);
  const alpha = (hex, a) => { const c = hex.replace("#", ""); const n = parseInt(c.length === 3 ? c.replace(/./g, "$&$&") : c, 16);
    return `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${a})`; };

  /* ------------------------------------------------------------ obras generativas */
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
