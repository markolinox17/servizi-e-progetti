/* ==========================================================================
   JEVE — SERVIZI & PROGETTI
   Dati e contenuti invariati. I renderer seguono il sistema visivo della
   pagina "Chi siamo": tab d'area, riga di esito, card chiare, linea del
   metodo, numeri d'impatto simmetrici.
   ========================================================================== */

const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const IMG = "./assets/";

/* ---------- icone d'area, a tratto sottile ---------- */
const AREA_ICO = {
  "business-analysis": '<path d="M4 20V9M10 20V4M16 20v-7M22 20V7"/>',
  "marketing":         '<circle cx="6" cy="12" r="2"/><path d="M11 7a7 7 0 0 1 0 10M15 4a11 11 0 0 1 0 16M19 1.5a15 15 0 0 1 0 21"/>',
  "sales":             '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.4"/><path d="M12 4V1M12 23v-3M4 12H1M23 12h-3"/>',
  "it":                '<path d="M8.5 8 4 12l4.5 4M15.5 8l4.5 4-4.5 4M13.5 5l-3 14"/>'
};

function areaIco(cat, cls = "") {
  return `<svg class="ico ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"
       stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    ${AREA_ICO[cat] || AREA_ICO["business-analysis"]}
  </svg>`;
}

/* ==========================================================================
   ILLUSTRAZIONI DEI SERVIZI
   Geometrie sottili, rosso come unico accento. Usate nella scheda di
   dettaglio del servizio.
   ========================================================================== */
const ILLU = {
  "ba-mappatura-processi": `
    <rect x="14" y="46" width="42" height="30" class="f-soft"/>
    <rect x="79" y="20" width="42" height="30" class="f-red"/>
    <rect x="79" y="72" width="42" height="30" class="f-soft"/>
    <rect x="144" y="46" width="42" height="30" class="s-red"/>
    <path d="M56 61h13v-26h10M56 61h13v26h10M121 35h13v26h10M121 87h13v-26h10" class="s-thin"/>
    <circle cx="165" cy="61" r="4" class="f-red"/>`,

  "ba-business-plan": `
    <rect x="34" y="16" width="86" height="94" class="s-thin f-white"/>
    <path d="M48 34h58M48 46h44M48 58h34" class="s-thin"/>
    <rect x="48" y="72" width="58" height="26" class="f-soft"/>
    <path d="M48 92l14-11 12 7 18-16" class="s-red-2"/>
    <rect x="128" y="52" width="58" height="58" class="s-red"/>
    <path d="M140 98v-18M154 98v-30M168 98v-22M182 98v-38" class="s-red-2"/>`,

  "ba-analisi-mercato": `
    <circle cx="100" cy="63" r="46" class="s-thin"/>
    <circle cx="100" cy="63" r="30" class="s-dash"/>
    <circle cx="100" cy="63" r="14" class="f-red"/>
    <circle cx="146" cy="34" r="8" class="f-soft s-thin"/>
    <circle cx="52" cy="92" r="10" class="f-soft s-thin"/>
    <circle cx="158" cy="88" r="6" class="s-red"/>
    <circle cx="60" cy="30" r="6" class="s-red"/>
    <path d="M100 63l46-29M100 63l-48 29M100 63l58 25M100 63l-40-33" class="s-hair"/>`,

  "ba-data-analytics": `
    <path d="M28 18v88h146" class="s-thin"/>
    <rect x="44" y="74" width="20" height="30" class="f-soft"/>
    <rect x="72" y="56" width="20" height="48" class="f-soft"/>
    <rect x="100" y="64" width="20" height="40" class="f-red"/>
    <rect x="128" y="38" width="20" height="66" class="f-soft"/>
    <rect x="156" y="50" width="20" height="54" class="f-soft"/>
    <path d="M54 62l28-14 28 8 28-22 20 10" class="s-red-2"/>
    <circle cx="54" cy="62" r="3.4" class="f-red"/>
    <circle cx="110" cy="56" r="3.4" class="f-red"/>
    <circle cx="166" cy="44" r="3.4" class="f-red"/>`,

  "mk-marketing-plan": `
    <circle cx="128" cy="60" r="42" class="s-thin"/>
    <circle cx="128" cy="60" r="27" class="s-dash"/>
    <circle cx="128" cy="60" r="12" class="f-red"/>
    <path d="M20 104C48 104 44 62 74 62s28 26 54 -2" class="s-red-2"/>
    <rect x="14" y="98" width="14" height="14" class="f-red"/>
    <path d="M116 48l24-24M132 24h10v10" class="s-thin"/>`,

  "mk-campagna-social": `
    <rect x="22" y="26" width="104" height="84" class="s-thin f-white"/>
    <path d="M22 46h104" class="s-thin"/>
    <rect x="38" y="16" width="8" height="18" class="f-red"/>
    <rect x="102" y="16" width="8" height="18" class="f-red"/>
    <rect x="36" y="58" width="18" height="14" class="f-soft"/>
    <rect x="64" y="58" width="18" height="14" class="f-red"/>
    <rect x="92" y="58" width="18" height="14" class="f-soft"/>
    <rect x="36" y="82" width="18" height="14" class="f-soft"/>
    <rect x="64" y="82" width="18" height="14" class="f-soft"/>
    <rect x="92" y="82" width="18" height="14" class="f-red"/>
    <path d="M142 44h44v34h-26l-10 12v-12h-8z" class="s-red"/>
    <path d="M152 58h24M152 68h14" class="s-hair"/>`,

  "mk-brand-identity": `
    <rect x="22" y="30" width="52" height="66" class="f-red"/>
    <rect x="82" y="30" width="34" height="66" class="f-soft"/>
    <rect x="124" y="30" width="18" height="66" class="s-red"/>
    <rect x="150" y="30" width="18" height="66" class="s-thin"/>
    <path d="M22 74h52" class="s-white"/>
    <circle cx="48" cy="52" r="11" class="s-white"/>
    <path d="M92 48h16M92 60h14M92 72h16M92 84h10" class="s-hair"/>
    <path d="M176 30l10 18-10 18 10 18-10 12" class="s-dash-red"/>`,

  "sales-lead-generation": `
    <path d="M40 20h120l-42 44v42l-36 16V64z" class="s-red f-white"/>
    <path d="M40 20h120l-14 15H54z" class="f-red"/>
    <circle cx="66" cy="42" r="5" class="f-soft"/>
    <circle cx="100" cy="42" r="5" class="f-soft"/>
    <circle cx="134" cy="42" r="5" class="f-soft"/>
    <circle cx="100" cy="74" r="6" class="f-red"/>
    <path d="M100 106v10" class="s-thin"/>
    <rect x="88" y="112" width="24" height="6" class="f-red"/>`,

  "it-sito-web": `
    <rect x="20" y="20" width="160" height="88" class="s-thin f-white"/>
    <path d="M20 40h160" class="s-thin"/>
    <circle cx="33" cy="30" r="3.4" class="f-red"/>
    <circle cx="45" cy="30" r="3.4" class="f-soft"/>
    <circle cx="57" cy="30" r="3.4" class="f-soft"/>
    <rect x="32" y="52" width="60" height="44" class="f-red"/>
    <path d="M104 54h64M104 66h48M104 78h64M104 90h34" class="s-thin"/>
    <path d="M44 74h36M44 84h22" class="s-white"/>`,

  "it-google-analytics": `
    <path d="M24 22v86h148" class="s-thin"/>
    <path d="M38 92l26-24 22 14 26-34 24 18 26-32" class="s-red-2"/>
    <path d="M38 108V92l26-24 22 14 26-34 24 18 26-32v50z" class="f-red-05"/>
    <circle cx="86" cy="82" r="3.6" class="f-red"/>
    <circle cx="138" cy="66" r="3.6" class="f-red"/>
    <circle cx="128" cy="44" r="22" class="s-red f-white-70"/>
    <path d="M144 60l16 16" class="s-red-2"/>
    <path d="M120 44h16M128 36v16" class="s-hair-red"/>`
};

function illustration(id) {
  const art = ILLU[id] || ILLU["it-sito-web"];
  return `<div class="m-illu">
    <svg viewBox="0 0 200 128" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      <g class="illu-art">${art}</g>
    </svg>
  </div>`;
}

/* slot foto con etichetta del file atteso */
function photo(file, alt = "") {
  return `<figure class="ph">
    <img src="${IMG}${file}" alt="${alt}" loading="lazy"
         onerror="this.parentNode.classList.add('empty'); this.remove();">
    <figcaption>assets/${file}</figcaption>
  </figure>`;
}

/* ==========================================================================
   DATI
   ========================================================================== */
const SERVICES_DATA = [
  {
    id: "ba-mappatura-processi", brief: "Il tuo flusso di lavoro, senza tempi morti.",
    title: "Mappatura dei Processi",
    category: "business-analysis",
    categoryLabel: "Business Analysis",
    shortDesc: "La gestione efficiente dei processi interni permette la crescita senza sprechi di risorse. La nostra area BA si occupa proprio di questo.",
    deliverables: ["Mappatura AS-IS", "Analisi colli di bottiglia", "Reingegnerizzazione TO-BE"],
    fullDesc: "L'insieme dei processi di una realtà aziendale contribuisce al raggiungimento del prodotto o servizio finale. Un anello debole nella catena mette però a rischio l'intera struttura e la sua capacità di generare profitti.",
    methodology: "Offriamo un servizio parziale di business process modelling, oppure un percorso completo di business process reengineering che comprende mappatura, analisi e riprogettazione dei processi. L'obiettivo primario è individuare colli di bottiglia e punti di forza per migliorare l'efficienza aziendale.",
    timeline: "Da concordare in fase di preventivo",
    team: "Area Business Analysis + Project Manager"
  },
  {
    id: "ba-business-plan", brief: "Mercato, modello e conti in un solo documento.",
    title: "Business Plan",
    category: "business-analysis",
    categoryLabel: "Business Analysis",
    shortDesc: "Stesura di business plan efficaci, dalle analisi di mercato e finanziarie fino allo sviluppo del business model.",
    deliverables: ["Analisi di mercato", "Analisi finanziaria", "Business model"],
    fullDesc: "Accompagniamo l'azienda nella redazione di un business plan che regga il confronto con investitori, istituti di credito e partner commerciali.",
    methodology: "Si parte dall'analisi di mercato e dalle proiezioni finanziarie per arrivare alla definizione del modello di business, con il supporto delle competenze accademiche di Ca' Foscari.",
    timeline: "Da concordare in fase di preventivo",
    team: "Area Business Analysis + Project Manager"
  },
  {
    id: "ba-analisi-mercato", brief: "Chi sono i clienti e da chi comprano oggi.",
    title: "Analisi di Mercato",
    category: "business-analysis",
    categoryLabel: "Business Analysis",
    shortDesc: "Analisi della domanda, dell'offerta e segmentazione del mercato per PMI, aziende e attività del territorio.",
    deliverables: ["Analisi della domanda", "Analisi dell'offerta", "Segmentazione del mercato"],
    fullDesc: "Studiamo il mercato di riferimento per capire chi sono i clienti potenziali, quanti sono e come si comporta la concorrenza.",
    methodology: "Il lavoro combina ricerca desk su fonti verificabili e rilevazioni sul campo, con restituzione dei risultati per segmenti prioritari.",
    timeline: "Da concordare in fase di preventivo",
    team: "Area Business Analysis + Project Manager"
  },
  {
    id: "mk-marketing-plan", brief: "Obiettivi, canali e budget su dodici mesi.",
    title: "Marketing Plan",
    category: "marketing",
    categoryLabel: "Marketing",
    shortDesc: "Una guida strategica dettagliata su come raggiungere obiettivi di marketing specifici, aumentare la visibilità del brand e attirare potenziali clienti.",
    deliverables: ["Obiettivi di marketing", "Strategia di visibilità", "Piano di acquisizione"],
    fullDesc: "Il marketing plan mette nero su bianco obiettivi, pubblici e canali, così che ogni euro investito in comunicazione abbia una direzione.",
    methodology: "Definizione degli obiettivi, scelta dei canali più adatti al target e costruzione di un piano operativo misurabile.",
    timeline: "Da concordare in fase di preventivo",
    team: "Area Marketing + Project Manager"
  },
  {
    id: "mk-campagna-social", brief: "Temi, format e calendario editoriale.",
    title: "Campagna Marketing & Gestione Social",
    category: "marketing",
    categoryLabel: "Marketing",
    shortDesc: "La creazione di un piano editoriale costituito da contenuti efficaci che possono portare a un maggior engagement.",
    deliverables: ["Piano editoriale", "Contenuti per i canali", "Gestione delle campagne"],
    fullDesc: "Costruiamo un piano editoriale che dia continuità alla presenza online e generi interazione reale con il pubblico di riferimento.",
    methodology: "Analisi dei contenuti esistenti, definizione di temi e format ricorrenti, calendario editoriale e monitoraggio dell'engagement.",
    timeline: "Da concordare in fase di preventivo",
    team: "Area Marketing + Project Manager"
  },
  {
    id: "mk-brand-identity", brief: "Identità visiva e valori in un sistema coerente.",
    title: "Creazione Brand Identity",
    category: "marketing",
    categoryLabel: "Marketing",
    shortDesc: "La definizione di un'identità visiva e la trasmissione dei valori e della personalità del brand.",
    deliverables: ["Identità visiva", "Valori del brand", "Linee guida d'uso"],
    fullDesc: "Diamo forma concreta all'identità dell'azienda, così che sia riconoscibile e coerente in ogni punto di contatto con il pubblico.",
    methodology: "Si parte dai valori e dal posizionamento per arrivare al sistema visivo e alle regole che ne garantiscono l'applicazione corretta.",
    timeline: "Da concordare in fase di preventivo",
    team: "Area Marketing + Project Manager"
  },
  {
    id: "sales-lead-generation", brief: "Contatti in target, non numeri generici.",
    title: "Lead Generation",
    category: "sales",
    categoryLabel: "Sales & BD",
    shortDesc: "Generare contatti realmente interessati al prodotto o servizio dell'azienda che commissiona il progetto.",
    deliverables: ["Contatti qualificati", "Strategia di acquisizione", "Monitoraggio dei risultati"],
    fullDesc: "Il servizio punta a portare all'azienda contatti in target, non numeri generici: persone o realtà con un interesse concreto verso l'offerta.",
    methodology: "Definizione del profilo di cliente ideale, scelta dei canali di contatto e qualificazione progressiva dei lead raccolti.",
    timeline: "Da concordare in fase di preventivo",
    team: "Area Sales & Business Development + Project Manager"
  },
  {
    id: "it-sito-web", brief: "Costruito su cosa deve ottenere, non su come appare.",
    title: "Sviluppo Sito Web",
    category: "it",
    categoryLabel: "IT",
    shortDesc: "Un sito web ben fatto è il biglietto da visita con cui un'impresa si presenta online, associato a un efficiente tracking dei dati.",
    deliverables: ["Sito web responsive", "Tracking dei dati", "Gestione dei contenuti"],
    fullDesc: "Progettiamo e sviluppiamo il sito partendo da ciò che deve ottenere: farsi trovare, raccontare l'attività e generare contatti.",
    methodology: "Analisi degli obiettivi e dei contenuti, progettazione della struttura, sviluppo responsive e affiancamento nella gestione autonoma.",
    timeline: "Da concordare in fase di preventivo",
    team: "Area IT + Project Manager"
  },
  {
    id: "it-google-analytics", brief: "Chi arriva sul sito, da dove e cosa fa.",
    title: "Google Analytics",
    category: "it",
    categoryLabel: "IT",
    shortDesc: "Implementazione di Google Analytics sul sito web per fornire analisi dettagliate sull'andamento del traffico online.",
    deliverables: ["Analytics configurato", "Report sul traffico", "Lettura dei dati"],
    fullDesc: "Senza misurazione non si sa se il sito stia funzionando. Implementiamo il tracciamento e lo rendiamo leggibile a chi deve decidere.",
    methodology: "Installazione e configurazione degli strumenti di misurazione, definizione degli eventi rilevanti e formazione alla lettura dei report.",
    timeline: "Da concordare in fase di preventivo",
    team: "Area IT + Project Manager"
  }
];

const CATEGORIES = [
  {
    id: "all",
    label: "Tutti i servizi",
    tabTitle: "Esplora l'offerta"
  },
  {
    id: "business-analysis",
    label: "Business Analysis",
    outcome: "Capire prima di decidere.",
    description: "Trasformiamo domande complesse in scenari leggibili: mercato, processi, numeri e priorità su cui costruire decisioni solide."
  },
  {
    id: "marketing",
    label: "Marketing",
    outcome: "Dare una direzione al brand.",
    description: "Costruiamo posizionamento, identità e contenuti coerenti per rendere il valore dell'azienda più chiaro e riconoscibile."
  },
  {
    id: "sales",
    label: "Sales & Business Development",
    outcome: "Trasformare interesse in opportunità.",
    description: "Definiamo il cliente ideale e un processo di acquisizione capace di generare contatti realmente in target."
  },
  {
    id: "it",
    label: "Information Technology",
    outcome: "Una presenza digitale che lavora.",
    description: "Progettiamo strumenti digitali utili, misurabili e semplici da gestire: dal sito al tracciamento dei risultati."
  }
];

const PROJECTS_DATA = [
  {
    id: "esempio-01", photo: "progetto-business-plan.jpg",
    isExample: true,
    title: "Business plan per l'apertura di una seconda sede",
    client: "Ristorazione · Venezia · 12 dipendenti",
    category: "Business Analysis",
    metrics: [
      { val: "5 anni", label: "Orizzonte di piano" },
      { val: "3", label: "Scenari valutati" },
      { val: "9 sett.", label: "Durata" }
    ],
    challenge: "L'attività aveva un'idea chiara del format da replicare, ma nessun documento in grado di reggere un'istruttoria bancaria: i numeri erano su fogli sparsi e le proiezioni si fermavano al primo anno.",
    solution: "Ricostruzione dei conti storici, analisi della domanda nel bacino della nuova sede e costruzione di tre scenari a cinque anni, con stress test su locazione e costo del personale.",
    results: ["Piano accettato in istruttoria", "Scenario prudenziale adottato come piano operativo", "Fabbisogno iniziale ridotto rivedendo il layout"]
  },
  {
    id: "esempio-02", photo: "progetto-sito-web.jpg",
    isExample: true,
    title: "Sito web e tracciamento per uno studio professionale",
    client: "Servizi professionali · Mestre · 15 dipendenti",
    category: "IT",
    metrics: [
      { val: "11 sett.", label: "Fino al lancio" },
      { val: "6", label: "Aree mappate" },
      { val: "100%", label: "Contatti tracciati" }
    ],
    challenge: "Sito fermo da anni, non navigabile da telefono e privo di qualsiasi misurazione. Le richieste arrivavano solo per passaparola e nessuno sapeva se il sito servisse a qualcosa.",
    solution: "Riprogettazione della struttura per aree di specializzazione, sviluppo responsive con ottimizzazione SEO di base e implementazione di Google Analytics con tracciamento dei form.",
    results: ["Sito gestibile in autonomia dallo studio", "Richieste in ingresso tracciate per canale", "Baseline di traffico su cui misurare i prossimi interventi"]
  },
  {
    id: "esempio-03", photo: "progetto-brand.jpg",
    isExample: true,
    title: "Riposizionamento del marchio di un birrificio",
    client: "Food & beverage · Provincia di Treviso · 8 dipendenti",
    category: "Marketing",
    metrics: [
      { val: "12", label: "Referenze" },
      { val: "1", label: "Sistema visivo" },
      { val: "8 sett.", label: "Durata" }
    ],
    challenge: "Prodotto apprezzato ma marchio irriconoscibile sullo scaffale: ogni etichetta era stata disegnata da una persona diversa, senza un sistema condiviso.",
    solution: "Workshop sui valori con i soci, analisi visiva dei competitor sullo scaffale e progettazione di un sistema di etichette applicabile a tutta la gamma, con linee guida d'uso.",
    results: ["Gamma coerente su tutte le referenze", "Allineamento tra packaging, sito e canali social", "Autonomia interna sui nuovi prodotti"]
  }
];

const METHOD_DATA = [
  { title: "Briefing e analisi", out: "Brief condiviso con obiettivi, priorità e KPI", desc: "Partiamo dal problema reale e traduciamo le esigenze in obiettivi misurabili.", tag: "Ascolto" },
  { title: "Proposta e team", out: "Proposta operativa con attività, team, tempi e costi", desc: "Costruiamo il percorso e scegliamo le competenze più adatte a ogni fase.", tag: "Progettazione" },
  { title: "Esecuzione del progetto", out: "Avanzamenti periodici e materiali di lavoro condivisi", desc: "Lavoriamo per avanzamenti, con confronti regolari e decisioni tracciabili.", tag: "Sviluppo" },
  { title: "Consegna e affiancamento", out: "Deliverable finale, formazione e passaggio di consegne", desc: "Restituiamo risultati applicabili e affianchiamo l'azienda nell'uso autonomo.", tag: "Impatto" }
];

const IMPACT_DATA = {
  2024: { projects: "36+", companies: "24", members: "34", awards: "3" },
  2025: { projects: "44+", companies: "29", members: "42", awards: "4" },
  2026: { projects: "52+", companies: "34", members: "48", awards: "5" }
};

/* ==========================================================================
   SERVIZI — tab d'area, riga di esito, griglia di card
   ========================================================================== */
let listaCorrente = [];

function renderFilters() {
  const w = $("#filters");
  if (!w) return;
  w.innerHTML = CATEGORIES.map((c, i) => `
    <button class="chip ${i === 0 ? "active" : ""}" data-filter="${c.id}"
            role="tab" aria-selected="${i === 0}">${c.label}</button>
  `).join("") + `<span class="chip-count" id="chipCount"></span>`;
}

function renderHeadIcos() {
  const w = $("#headIcos");
  if (!w) return;
  w.innerHTML = CATEGORIES.filter(c => c.id !== "all").map(c => `
    <span class="area-key-item">
      ${areaIco(c.id, "ico-head")}
      <span>${c.label}</span>
    </span>
  `).join("");
}

function renderServices(data) {
  const list = $("#exList");
  const view = $("#exView");
  if (!list || !view || !data.length) return;
  listaCorrente = data;

  const count = $("#chipCount");
  if (count) count.textContent = `${data.length} ${data.length === 1 ? "servizio" : "servizi"}`;

  list.innerHTML = data.map((s, i) => `
    <button class="ex-row ${i === 0 ? "is-active" : ""}" data-i="${i}" data-cat="${s.category}"
            aria-expanded="${i === 0}" aria-label="Dettagli di ${s.title}">
      <span class="ex-txt">
        <span class="ex-title">${s.title}</span>
        <span class="ex-cat">${s.categoryLabel}</span>
        <span class="ex-desc">${s.brief || s.shortDesc}</span>
      </span>
      <span class="ex-ico">${areaIco(s.category)}</span>
      <span class="ar" aria-hidden="true">&rarr;</span>
    </button>
  `).join("");

  updateServiceView(0);

  const conPuntatore = matchMedia("(hover: hover)").matches;
  $$(".ex-row", list).forEach(row => {
    const i = Number(row.dataset.i);
    if (conPuntatore) row.addEventListener("mouseenter", () => setServiceRow(i));
    row.addEventListener("focus", () => setServiceRow(i));
    row.addEventListener("click", () => {
      if (conPuntatore || row.classList.contains("is-active")) openService(listaCorrente[i], row);
      else setServiceRow(i);
    });
  });
}

function setServiceRow(i) {
  $$(".ex-row").forEach(row => {
    const active = Number(row.dataset.i) === i;
    row.classList.toggle("is-active", active);
    row.setAttribute("aria-expanded", String(active));
  });
  updateServiceView(i);
}

function updateServiceView(i) {
  const view = $("#exView");
  const service = listaCorrente[i];
  if (!view || !service) return;

  view.innerHTML = `
    ${illustration(service.id).replace('class="m-illu"', 'class="illu"')}
    <div class="ex-body">
      <span class="ex-cat">${service.categoryLabel}</span>
      <h3>${service.title}</h3>
      <p>${service.brief || service.shortDesc}</p>
      <ul class="ex-tags">${service.deliverables.map(item => `<li>${item}</li>`).join("")}</ul>
      <button class="btn btn-solid full ex-cta">Scopri di pi&ugrave; <span class="ar">&rarr;</span></button>
    </div>`;

  view.querySelector(".ex-cta")?.addEventListener("click", event => openService(service, event.currentTarget));
}

function initFilters() {
  const w = $("#filters");
  if (!w) return;
  w.addEventListener("click", e => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    $$(".chip", w).forEach(c => {
      const on = c === chip;
      c.classList.toggle("active", on);
      c.setAttribute("aria-selected", String(on));
    });
    const filter = chip.dataset.filter;
    renderServices(filter === "all" ? SERVICES_DATA : SERVICES_DATA.filter(s => s.category === filter));
  });
}

/* ==========================================================================
   METODO — linea ondulata con i pallini agganciati alla linea.
   L'animazione riempie la linea, accende i pallini e colora i numeri.
   ========================================================================== */
const RAIL_FRAC = [0.125, 0.375, 0.625, 0.875];   /* centro di ogni colonna */
const RAIL_YF   = [0.27, 0.72, 0.30, 0.68];       /* quota sulla fascia, 0 = alto */

function renderMethod() {
  const w = $("#method");
  if (!w) return;

  const n = METHOD_DATA.length;

  w.innerHTML = `
    <div class="rail-mid" aria-hidden="true">
      <svg class="rail-svg"><path class="rail-line"></path><path class="rail-fill"></path></svg>
      ${RAIL_FRAC.map((_, i) => `<span class="rail-dot" data-dot="${i}"></span>`).join("")}
    </div>
    <div class="rail-steps">
      ${METHOD_DATA.map((m, i) => `
        <article class="step" data-i="${i}">
          <div class="step-body">
            <span class="step-n">0${i + 1}</span>
            <h3>${m.title}</h3>
            <p class="step-desc">${m.desc}</p>
            <p class="step-out"><span>Cosa ricevi</span>${m.out}</p>
          </div>
        </article>
      `).join("")}
    </div>`;

  const mid = $(".rail-mid", w);
  const svg = $(".rail-svg", w);
  const line = $(".rail-line", w);
  const fill = $(".rail-fill", w);
  const dots = $$(".rail-dot", w);
  const steps = $$(".step", w);

  let L = 0;            /* lunghezza reale del tracciato, in px */
  let soglie = [];      /* frazione di percorso a cui cade ogni pallino */
  let progresso = 0;
  let fase = -2;

  /* onda a tangenti orizzontali (desktop) oppure verticale a serpentina (mobile) */
  function costruisci() {
    const box = mid.getBoundingClientRect();
    const W = box.width, H = box.height;
    if (!W || !H) { requestAnimationFrame(costruisci); return; }

    const verticale = W < 120;
    let pts, d;

    if (verticale) {
      /* i pallini si allineano al numero di ogni tappa */
      const y0 = mid.getBoundingClientRect().top;
      pts = steps.map((s, i) => {
        const num = $(".step-n", s);
        const r = (num || s).getBoundingClientRect();
        return [i % 2 ? W * 0.72 : W * 0.28, r.top - y0 + r.height * 0.55];
      });
      d = `M${pts[0][0].toFixed(2)} ${pts[0][1].toFixed(2)}`;
      for (let i = 1; i < pts.length; i++) {
        const [ax, ay] = pts[i - 1], [bx, by] = pts[i], dy = (by - ay) * 0.5;
        d += ` C${ax.toFixed(2)} ${(ay + dy).toFixed(2)}, ${bx.toFixed(2)} ${(by - dy).toFixed(2)}, ${bx.toFixed(2)} ${by.toFixed(2)}`;
      }
    } else {
      pts = RAIL_FRAC.map((f, i) => [f * W, RAIL_YF[i] * H]);
      d = `M${pts[0][0].toFixed(2)} ${pts[0][1].toFixed(2)}`;
      for (let i = 1; i < pts.length; i++) {
        const [ax, ay] = pts[i - 1], [bx, by] = pts[i], dx = (bx - ax) * 0.5;
        d += ` C${(ax + dx).toFixed(2)} ${ay.toFixed(2)}, ${(bx - dx).toFixed(2)} ${by.toFixed(2)}, ${bx.toFixed(2)} ${by.toFixed(2)}`;
      }
    }

    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);   /* scala 1:1, nessuna deformazione */
    line.setAttribute("d", d);
    fill.setAttribute("d", d);

    L = fill.getTotalLength();
    fill.style.strokeDasharray = String(L);

    /* posizione dei pallini letta dal tracciato: sempre sulla curva */
    soglie = pts.map(([px, py]) => {
      let best = 0, bestD = Infinity;
      for (let s = 0; s <= L; s += Math.max(0.5, L / 600)) {
        const q = fill.getPointAtLength(s);
        const dd = (q.x - px) ** 2 + (q.y - py) ** 2;
        if (dd < bestD) { bestD = dd; best = s; }
      }
      return best / L;
    });
    pts.forEach(([px, py], i) => {
      dots[i].style.left = `${px}px`;
      dots[i].style.top = `${py}px`;
    });

    imposta(progresso);
  }

  const accendi = k => {
    if (k === fase) return;
    fase = k;
    steps.forEach((s, i) => s.classList.toggle("is-on", i <= k));
    dots.forEach((d, i) => d.classList.toggle("is-on", i <= k));
  };

  function imposta(p) {
    progresso = Math.max(0, Math.min(1, p));
    if (L) fill.style.strokeDashoffset = String(L * (1 - progresso));
    let k = -1;
    for (let i = 0; i < n; i++) if (progresso >= (soglie[i] ?? 1) - 0.002) k = i;
    accendi(k);
  }

  costruisci();
  requestAnimationFrame(costruisci);
  addEventListener("load", costruisci);
  document.fonts?.ready.then(costruisci);
  if (window.ResizeObserver) {
    const ro = new ResizeObserver(costruisci);
    ro.observe(mid);
    ro.observe($(".rail-steps", w));
    w.__railRO = ro;                 /* riferimento vivo: non può essere raccolto */
  } else addEventListener("resize", costruisci);
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) { imposta(1); return; }

  /* ciclo continuo: riempimento, pausa a linea piena, azzeramento, ripartenza */
  const durata = 2400, pausa = 2600, respiro = 700;
  let inCorso = false, visibile = false, timer = 0;

  const ciclo = () => {
    if (!visibile || inCorso) return;
    inCorso = true;
    const t0 = performance.now();
    const passo = ora => {
      const p = Math.min((ora - t0) / durata, 1);
      imposta(p * p * (3 - 2 * p));
      if (p < 1) { requestAnimationFrame(passo); return; }
      timer = setTimeout(() => {
        imposta(0);
        inCorso = false;
        timer = setTimeout(ciclo, respiro);
      }, pausa);
    };
    requestAnimationFrame(passo);
  };

  new IntersectionObserver(entries => entries.forEach(entry => {
    visibile = entry.isIntersecting;
    if (visibile) ciclo();
    else { clearTimeout(timer); }
  }), { threshold: .2 }).observe(w);
}

/* ==========================================================================
   PROGETTI — fisarmonica orizzontale su illustrazione bianco/rosso
   ========================================================================== */
const ILLU_WORK = {
  /* Business plan: due sedi collegate e curva di crescita */
  "esempio-01": `
    <path d="M60 300h84v-96H60z" class="wf-soft"/>
    <path d="M60 204l42-30 42 30" class="ws-line"/>
    <path d="M84 300v-42h36v42" class="ws-red"/>
    <path d="M78 228h14M112 228h14" class="ws-hair"/>
    <path d="M256 300h84v-72h-84z" class="wf-red"/>
    <path d="M256 228l42-26 42 26" class="ws-red"/>
    <path d="M280 300v-36h36v36" class="ws-white"/>
    <path d="M144 268h112" class="ws-dash"/>
    <circle cx="200" cy="268" r="7" class="wf-red"/>
    <path d="M60 150l52-34 46 22 60-58 62 30" class="ws-red-2"/>
    <circle cx="112" cy="116" r="5" class="wf-red"/>
    <circle cx="218" cy="80" r="5" class="wf-red"/>
    <path d="M60 336h280" class="ws-hair"/>`,

  /* Sito web: finestra del browser e traffico misurato */
  "esempio-02": `
    <rect x="52" y="72" width="296" height="188" class="ws-line"/>
    <path d="M52 108h296" class="ws-line"/>
    <circle cx="70" cy="90" r="5" class="wf-red"/>
    <circle cx="88" cy="90" r="5" class="wf-soft"/>
    <circle cx="106" cy="90" r="5" class="wf-soft"/>
    <rect x="74" y="130" width="106" height="86" class="wf-red"/>
    <path d="M92 172h70M92 190h44" class="ws-white"/>
    <path d="M202 132h124M202 156h96M202 180h124M202 204h74" class="ws-hair"/>
    <path d="M74 236h252" class="ws-dash"/>
    <path d="M74 330l50-34 44 20 54-46 48 26 56-42" class="ws-red-2"/>
    <circle cx="168" cy="316" r="6" class="wf-red"/>
    <circle cx="272" cy="286" r="6" class="wf-red"/>`,

  /* Brand identity: bottiglia, etichetta e campioni di colore */
  "esempio-03": `
    <path d="M172 96h56v34l26 40v130h-108V170l26-40z" class="ws-line"/>
    <rect x="146" y="196" width="108" height="66" class="wf-red"/>
    <path d="M166 224h68M166 240h44" class="ws-white"/>
    <circle cx="200" cy="150" r="12" class="ws-red"/>
    <rect x="52" y="120" width="52" height="52" class="wf-red"/>
    <rect x="52" y="184" width="52" height="52" class="wf-soft"/>
    <rect x="52" y="248" width="52" height="52" class="ws-line"/>
    <rect x="296" y="120" width="52" height="52" class="ws-red"/>
    <rect x="296" y="184" width="52" height="52" class="wf-soft"/>
    <rect x="296" y="248" width="52" height="52" class="wf-red"/>
    <path d="M118 146h20M118 210h20M118 274h20M262 146h20M262 210h20M262 274h20" class="ws-hair"/>`
};

function workIllu(id) {
  const art = ILLU_WORK[id] || ILLU_WORK["esempio-01"];
  return `<div class="willu" aria-hidden="true">
    <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
      <path d="M300 0h30L230 400h-30z" fill="rgba(225,37,27,.10)"/>
      <path d="M348 0h12L260 400h-12z" fill="rgba(225,37,27,.07)"/>
      <g class="willu-art">${art}</g>
    </svg>
  </div>`;
}

function renderWorks() {
  const w = $("#works");
  if (!w) return;

  w.innerHTML = PROJECTS_DATA.map((p, i) => `
    <article class="pan ${i === 0 ? "is-open" : ""}" data-i="${i}" tabindex="0"
             role="button" aria-expanded="${i === 0}" aria-label="Leggi il caso: ${p.title}">
      ${workIllu(p.id)}
      <div class="pan-veil"></div>
      <span class="pan-flag">${p.isExample ? "Progetto realizzato" : "Caso reale"}</span>

      <div class="pan-shut">
        <h3 class="pan-vert">${p.category}</h3>
        <span class="pan-n">${String(i + 1).padStart(2, "0")}</span>
      </div>

      <div class="pan-open">
        <span class="pan-n">${String(i + 1).padStart(2, "0")}</span>
        <h3>${p.title}</h3>
        <p class="pan-cat">${p.category} &middot; ${p.client}</p>
        <p class="pan-out"><span>Risultato</span>${p.results[0]}</p>
        <div class="pan-kpis">
          ${p.metrics.map(m => `<div><b>${m.val}</b><span>${m.label}</span></div>`).join("")}
        </div>
        <span class="pan-go">Leggi il caso <span class="ar">&rarr;</span></span>
      </div>
    </article>
  `).join("");

  const pans = $$(".pan", w);
  const apri = el => pans.forEach(p => {
    const on = p === el;
    p.classList.toggle("is-open", on);
    p.setAttribute("aria-expanded", String(on));
  });

  pans.forEach(p => {
    p.addEventListener("mouseenter", () => apri(p));
    p.addEventListener("focus", () => apri(p));
    p.addEventListener("click", () => {
      if (p.classList.contains("is-open")) openWork(PROJECTS_DATA[+p.dataset.i], p);
      else apri(p);
    });
    p.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openWork(PROJECTS_DATA[+p.dataset.i], p); }
    });
  });
}

/* ==========================================================================
   IMPATTO
   ========================================================================== */
function initImpactYears() {
  const buttons = $$("[data-impact-year]");
  if (!buttons.length) return;

  const setValue = (key, value) => {
    const target = document.querySelector(`[data-impact-value="${key}"]`);
    if (!target) return;
    target.classList.remove("is-changing");
    void target.offsetWidth;
    target.innerHTML = value.endsWith("+") ? `${value.slice(0, -1)}<sup>+</sup>` : value;
    target.classList.add("is-changing");
  };

  const showYear = year => {
    const data = IMPACT_DATA[year];
    if (!data) return;
    buttons.forEach(button => {
      const active = Number(button.dataset.impactYear) === year;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    Object.entries(data).forEach(([key, value]) => setValue(key, value));
  };

  buttons.forEach(b => b.addEventListener("click", () => showYear(Number(b.dataset.impactYear))));
  showYear(2026);
}

/* ==========================================================================
   MODALE
   ========================================================================== */
let lastFocus = null;

function initModal() {
  const m = $("#modal");
  $("#modalClose")?.addEventListener("click", closeModal);
  m?.addEventListener("click", e => { if (e.target === m) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
  $("#modalBody")?.addEventListener("click", e => {
    if (e.target.closest(".m-cta")) {
      closeModal();
      location.hash = "#contatti";
    }
  });
}

function closeModal() {
  const m = $("#modal");
  if (!m?.classList.contains("active")) return;
  m.classList.remove("active");
  document.body.style.overflow = "";
  lastFocus?.focus();
}

function openModal(html, trigger) {
  const m = $("#modal"), b = $("#modalBody");
  if (!m || !b) return;
  lastFocus = trigger || null;
  b.innerHTML = html;
  m.classList.add("active");
  document.body.style.overflow = "hidden";
  $("#modalClose")?.focus();
}

function openService(s, trigger) {
  if (!s) return;
  openModal(`
    ${illustration(s.id)}
    <span class="m-tag">${s.categoryLabel}</span>
    <h2 class="m-title" id="modalTitle">${s.title}</h2>
    <p class="m-intro">${s.fullDesc}</p>
    <h3 class="m-h">Cosa consegniamo</h3>
    <ul class="m-list">${s.deliverables.map(d => `<li>${d}</li>`).join("")}</ul>
    <h3 class="m-h">Come lavoriamo su questo servizio</h3>
    <p class="m-txt">${s.methodology}</p>
    <div class="m-meta">
      <div><small>Tempistiche</small><b>${s.timeline}</b></div>
      <div><small>Chi ci lavora</small><b>${s.team}</b></div>
    </div>
    <button class="btn btn-solid full m-cta">Richiedi un preventivo per questo servizio <span class="ar">&rarr;</span></button>
  `, trigger);
}

function openWork(p, trigger) {
  if (!p) return;
  openModal(`
    <span class="m-tag">${p.isExample ? "Progetto realizzato" : "Caso reale"} · ${p.category}</span>
    <h2 class="m-title" id="modalTitle">${p.title}</h2>
    <p class="m-intro">${p.client}</p>
    <h3 class="m-h">Il problema di partenza</h3>
    <p class="m-txt">${p.challenge}</p>
    <h3 class="m-h">Come ci siamo mossi</h3>
    <p class="m-txt">${p.solution}</p>
    <h3 class="m-h">Cosa è cambiato</h3>
    <ul class="m-list">${p.results.map(r => `<li>${r}</li>`).join("")}</ul>
    <div class="m-meta">
      ${p.metrics.map(x => `<div><small>${x.label}</small><b>${x.val}</b></div>`).join("")}
    </div>
    <button class="btn btn-solid full m-cta">Parliamo di un progetto simile <span class="ar">&rarr;</span></button>
  `, trigger);
}

/* ==========================================================================
   FORM
   ========================================================================== */
function initForm() {
  const f = $("#contactForm");
  if (!f) return;
  f.addEventListener("submit", e => {
    e.preventDefault();
    const company = f.companyName.value.trim(), email = f.email.value.trim();
    const service = f.serviceInterest.options[f.serviceInterest.selectedIndex].text;
    const notes = f.projectNotes.value.trim();
    const body = [
      `Azienda / referente: ${company}`, `Email: ${email}`,
      `Area di interesse: ${service}`, "", "Descrizione del progetto:", notes
    ].join("\n");
    location.href = `mailto:info@jeve.it?subject=${encodeURIComponent("Richiesta di consulenza — " + company)}&body=${encodeURIComponent(body)}`;
    const btn = f.querySelector("button[type='submit']");
    const old = btn.innerHTML;
    btn.innerHTML = "Apertura del client di posta...";
    btn.disabled = true;
    setTimeout(() => { btn.innerHTML = old; btn.disabled = false; }, 4000);
  });
}

/* ==========================================================================
   MENU MOBILE + LEONE
   ========================================================================== */
function initMobileNav() {
  const btn = $("#menuBtn"), menu = $("#navMenu");
  if (!btn || !menu) return;
  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(open));
  });
  menu.addEventListener("click", e => {
    if (e.target.closest("a")) { menu.classList.remove("is-open"); btn.setAttribute("aria-expanded", "false"); }
  });
}

function initHeroEmblem() {
  const emblem = $("#heroEmblem");
  const canTilt = matchMedia("(pointer: fine)").matches &&
    !matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!emblem || !canTilt) return;

  const reset = () => {
    emblem.style.setProperty("--logo-rx", "-1deg");
    emblem.style.setProperty("--logo-ry", "-2deg");
  };
  emblem.addEventListener("pointermove", event => {
    const b = emblem.getBoundingClientRect();
    const x = (event.clientX - b.left) / b.width - .5;
    const y = (event.clientY - b.top) / b.height - .5;
    emblem.style.setProperty("--logo-rx", `${(-y * 5).toFixed(2)}deg`);
    emblem.style.setProperty("--logo-ry", `${(x * 7).toFixed(2)}deg`);
  });
  emblem.addEventListener("pointerleave", reset);
  emblem.addEventListener("blur", reset);
}

/* ==========================================================================
   AVVIO
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderHeadIcos();
  renderServices(SERVICES_DATA);
  initFilters();
  renderMethod();
  renderWorks();
  initImpactYears();
  initModal();
  initForm();
  initMobileNav();
  initHeroEmblem();
});
