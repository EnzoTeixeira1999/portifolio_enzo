import { ArrowUpRight, ClipboardList, Database, MapPin, Package, QrCode, Route, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import "./tracePassCaseStudy.css";

const repository = "https://github.com/EnzoTeixeira1999/enterprise-suite/tree/main/apps/tracepass#readme";
const swagger = "https://tracepass-api.onrender.com/swagger-ui/index.html";
const captures = import.meta.glob("../assets/tracepass/case-*.webp", { eager: true, query: "?url", import: "default" });

const journeys = [
  { code: "ELE-SP-001", events: 5, stops: ["Santos", "São Paulo", "Campinas"], path: "/laboratorio/publico/passport/48a4ee40-24f0-46a8-ab09-4d28b2084fbf", image: "nacional" },
  { code: "EXP-PT-00", events: 7, stops: ["Campinas", "Guarulhos (GRU)", "Lisboa (LIS)"], path: "/laboratorio/publico/passport/55b4130c-11f5-48d8-9255-9821660e4943", image: "internacional" },
];

const featureIcons = [Package, MapPin, ShieldCheck, ClipboardList, QrCode, Database];

const copy = {
  pt: {
    back: "Voltar aos projetos", docs: "Documentação", test: "Testar o TracePass", cases: "Ver os dois passaportes",
    tag: "Estudo de caso · Rastreabilidade de lotes",
    title: "Do primeiro registro à entrega.",
    intro: "O TracePass reúne a procedência, as movimentações e as ocorrências de cada lote em um passaporte digital. A equipe registra o que aconteceu. Quem recebe o produto consulta o histórico por link ou QR Code.",
    overview: "De onde veio este lote?",
    purpose: "Quando uma entrega passa por várias equipes, confirmar a origem, o último recebimento e o tratamento de um desvio pode exigir consultas a vários registros. O TracePass vincula essas informações ao mesmo código de lote. A operação encontra o histórico para trabalhar e o destinatário recebe uma visão pública para consulta.",
    nav: [["fluxo", "Como funciona"], ["exemplos", "Exemplos"], ["recursos", "Funcionalidades"], ["tecnologia", "Tecnologia"]],
    workflow: "Como um lote ganha um passaporte",
    steps: [
      ["Empresas", "Crie ou escolha a empresa responsável pela operação."],
      ["Produtos", "Cadastre nome, SKU e unidade de medida."],
      ["Fornecedores", "Registre a procedência que poderá ser vinculada ao lote."],
      ["Lotes", "Vincule produto e fornecedor. Informe código, fabricação, validade quando aplicável e quantidade inicial."],
      ["Movimentações", "Registre data, responsável e local de cada evento. Marque o ponto no mapa ou informe as coordenadas."],
    ],
    optional: "Ocorrências entram no fluxo quando há um desvio. A equipe pode registrar a gravidade, investigar, documentar a resolução e liberar o lote após o tratamento.",
    examples: "Duas remessas para explorar",
    exampleIntro: "Cenários fictícios cadastrados no TracePass, com passaportes públicos e pontos geográficos reais.",
    domestic: ["Entrega rodoviária", "Kit de conectores elétricos", "Acompanhe 120 caixas da expedição em Santos à conferência em Campinas, com uma transferência em São Paulo."],
    international: ["Remessa aérea Brasil–Portugal", "Registrador digital de umidade", "Veja a troca de responsáveis em Guarulhos e Lisboa, do embarque à inspeção no centro de distribuição."],
    view: "Abrir passaporte", events: "movimentações", completed: "Concluído",
    featureTitle: "O que o TracePass permite fazer",
    features: [
      ["Consultar a procedência", "Encontre empresa, produto, SKU, fornecedor, fabricação, validade e quantidade na ficha do lote."],
      ["Explorar a jornada", "Selecione um evento para localizar seu ponto no mapa. A linha conecta registros em ordem cronológica."],
      ["Tratar desvios", "Ocorrências de gravidade alta ou crítica podem bloquear a operação. O histórico registra o tratamento e a liberação."],
      ["Auditar correções", "Consulte o antes e o depois das edições e o histórico de arquivamentos dos registros."],
      ["Compartilhar o passaporte", "Copie o link ou baixe o QR Code para abrir a ficha pública do lote no celular."],
      ["Experimentar o painel", "Os visitantes recebem uma cópia para testar no navegador. O administrador atualiza a base publicada em uma área própria."],
    ],
    decisions: "Decisões por trás do produto",
    details: [
      ["O mapa representa eventos registrados", "O ponto mostra onde uma etapa foi registrada. Entre dois pontos, a linha apresenta a sequência de eventos e o histórico informa o que aconteceu em cada parada."],
      ["Coordenadas funcionam como alternativa ao clique", "Latitude e longitude permitem salvar o local mesmo quando a cartografia detalhada demora ou falha. Um mapa-múndi simplificado mantém os pontos visíveis."],
      ["A demonstração tem uma base publicada", "O administrador consegue atualizar os casos sem uma nova publicação do código. Os visitantes podem testar os formulários na própria cópia."],
    ],
    tech: "Linguagens, bibliotecas e ferramentas",
    architecture: "O navegador chama a API REST. A API aplica as regras da operação e grava os registros no PostgreSQL. O passaporte reúne os dados liberados para consulta pública.",
    layers: [
      ["Interface", "TypeScript · React · CSS · Vite", "Formulários, painel de operação e passaporte público. O Vite prepara a aplicação para publicação."],
      ["API e dados", "Java 21 · Spring Boot · JPA · PostgreSQL · Flyway", "Regras de lotes e ocorrências, acesso ao banco e migrações versionadas."],
      ["Mapa e compartilhamento", "Leaflet · React Leaflet · OpenStreetMap · Natural Earth · qrcode.react", "Mapa interativo, cartografia de reserva e QR Codes do passaporte."],
      ["Desenvolvimento e publicação", "Docker Compose · Maven · Swagger/OpenAPI · GitHub · Vercel · Render", "Ambiente local, build da API, documentação interativa, versionamento e hospedagem."],
    ],
    screenshots: {
      capa: "Ficha pública do lote nacional, com produto, origem, quantidade e status.",
      nacional: "Jornada rodoviária com os registros de Santos, São Paulo e Campinas.",
      internacional: "Mapa e linha do tempo da remessa entre Brasil e Portugal.",
      operacao: "Formulário de movimentação com lote selecionado e localização do evento.",
      auditoria: "Histórico de alterações com arquivamentos de empresas, produtos, fornecedores, lotes e movimentações.",
      qr: "Área de compartilhamento do passaporte internacional, com QR Code para download.",
    },
    footer: "Abra um passaporte ou teste o fluxo completo.",
    api: "Explorar a API",
  },
  en: {
    back: "Back to projects", docs: "Documentation", test: "Try TracePass", cases: "See both passports",
    tag: "Case study · Batch traceability",
    title: "From first record to delivery.",
    intro: "TracePass brings each batch’s origin, movements, and incidents into one digital passport. Teams record what happens. Recipients inspect the history through a link or QR code.",
    overview: "Where did this batch come from?",
    purpose: "When deliveries move across teams, checking origin, receipt, and how an exception was handled can mean searching through several records. TracePass ties that information to a single batch code. Operators can work from the history and recipients get a public view.",
    nav: [["fluxo", "Workflow"], ["exemplos", "Examples"], ["recursos", "Features"], ["tecnologia", "Technology"]],
    workflow: "How a batch gets a passport",
    steps: [
      ["Companies", "Create or choose the organization responsible for the operation."],
      ["Products", "Record the product name, SKU, and unit of measure."],
      ["Suppliers", "Record the source that can be linked to the batch."],
      ["Batches", "Link the product and supplier. Enter the batch code, manufacturing date, expiry if applicable, and initial quantity."],
      ["Movements", "Log each event’s time, owner, and location. Pin it on the map or enter coordinates."],
    ],
    optional: "Log an incident when something goes wrong. The team can record severity, investigate, document the resolution, and release the batch after treatment.",
    examples: "Two shipments to explore",
    exampleIntro: "Fictional scenarios recorded in TracePass, with public passports and real geographic locations.",
    domestic: ["Domestic road delivery", "Electrical connector kit", "Follow 120 boxes from dispatch in Santos through a transfer in São Paulo to final inspection in Campinas."],
    international: ["Brazil–Portugal air shipment", "Digital humidity logger", "Follow the handoff across teams in Guarulhos and Lisbon, from boarding through inspection at the distribution center."],
    view: "Open passport", events: "movements", completed: "Completed",
    featureTitle: "What you can do in TracePass",
    features: [
      ["Check provenance", "Find the company, product, SKU, supplier, manufacturing date, expiry, and quantity in the batch record."],
      ["Explore the journey", "Select an event to find its pin on the map. The line connects records in chronological order."],
      ["Handle exceptions", "High or critical incidents can put operations on hold. The history records the response and release."],
      ["Audit corrections", "See before and after values for edits and track archived records."],
      ["Share a passport", "Copy a link or download a QR code to open the public batch record on a phone."],
      ["Try the dashboard", "Visitors test a browser-local copy. The administrator updates the published dataset from a dedicated workspace."],
    ],
    decisions: "Design decisions",
    details: [
      ["The map represents recorded events", "A pin shows where an event was recorded. Lines show the event sequence, and the timeline explains what happened at each stop."],
      ["Coordinates are an alternative to map clicks", "Enter latitude and longitude when detailed tiles are slow or unavailable. A simplified world map keeps pins visible."],
      ["The demo has a published dataset", "The administrator can update scenarios without redeploying the code. Visitors can try the forms in their own copy."],
    ],
    tech: "Languages, libraries, and tools",
    architecture: "The browser calls the REST API. The API applies operational rules and saves the records in PostgreSQL. The passport combines fields available for public viewing.",
    layers: [
      ["Interface", "TypeScript · React · CSS · Vite", "Forms, operations dashboard, and public passport. Vite builds the frontend for deployment."],
      ["API and data", "Java 21 · Spring Boot · JPA · PostgreSQL · Flyway", "Batch and incident rules, database access, and versioned migrations."],
      ["Maps and sharing", "Leaflet · React Leaflet · OpenStreetMap · Natural Earth · qrcode.react", "Interactive maps, fallback cartography, and passport QR codes."],
      ["Development and hosting", "Docker Compose · Maven · Swagger/OpenAPI · GitHub · Vercel · Render", "Local environment, API builds, interactive documentation, version control, and hosting."],
    ],
    screenshots: {
      capa: "Public record for the domestic batch, showing product, origin, quantity, and status.",
      nacional: "Road shipment timeline across Santos, São Paulo, and Campinas.",
      internacional: "Map and timeline for the Brazil–Portugal shipment.",
      operacao: "Movement form with the selected batch and event location.",
      auditoria: "Audit history showing archived companies, products, suppliers, batches, and movements.",
      qr: "Sharing panel for the international passport with a downloadable QR code.",
    },
    footer: "Open a passport or try the full workflow.",
    api: "Explore the API",
  },
};

const captureSizes = {
  capa: [1832, 866],
  nacional: [1833, 868],
  internacional: [1833, 865],
  operacao: [1833, 862],
  auditoria: [1831, 866],
  qr: [1835, 860],
};

function Capture({ name, caption, priority = false }) {
  const source = captures["../assets/tracepass/case-" + name + ".webp"];
  if (!source) return null;
  const [width, height] = captureSizes[name];

  return (
    <figure className="trace-case__figure">
      <a href={source} target="_blank" rel="noreferrer">
        <img src={source} alt={caption} width={width} height={height} loading={priority ? "eager" : "lazy"} decoding="async" />
      </a>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function RouteStops({ stops }) {
  return <ol className="trace-case__stops">{stops.map((stop) => <li key={stop}>{stop}</li>)}</ol>;
}

export default function TracePassCaseStudy({ language, liveUrl }) {
  const t = copy[language] ?? copy.pt;
  const demo = liveUrl + "/laboratorio";

  return (
    <main className="trace-case">
      <div className="trace-case__frame">
        <header className="trace-case__header">
          <Link to={`/${language}#projects`}>← {t.back}</Link>
          <a href={repository} target="_blank" rel="noreferrer">{t.docs} <ArrowUpRight size={15} aria-hidden="true" /></a>
        </header>

        <section className="trace-case__hero" aria-labelledby="trace-case-title">
          <div>
            <div className="trace-case__brand"><span aria-hidden="true">TP</span> TracePass</div>
            <p className="trace-case__category">{t.tag}</p>
            <h1 id="trace-case-title">{t.title}</h1>
            <p>{t.intro}</p>
            <div className="trace-case__actions">
              <a className="trace-case__primary" href={demo} target="_blank" rel="noreferrer">{t.test} <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a href="#exemplos">{t.cases}</a>
            </div>
          </div>
          {captures["../assets/tracepass/case-capa.webp"]
            ? <Capture name="capa" caption={t.screenshots.capa} priority />
            : <div className="trace-case__preview">
                <div className="trace-case__preview-head"><Package aria-hidden="true" /><code>{journeys[0].code}</code><span>{t.completed}</span></div>
                <h2>{t.domestic[1]}</h2>
                <RouteStops stops={journeys[0].stops} />
                <p>{journeys[0].events} {t.events}</p>
              </div>}
        </section>

        <nav aria-label={language === "en" ? "Case study sections" : "Seções do estudo de caso"} className="trace-case__nav">
          {t.nav.map(([id, label]) => <a key={id} href={"#" + id}>{label}</a>)}
        </nav>

        <section className="trace-case__section trace-case__purpose">
          <h2>{t.overview}</h2><p>{t.purpose}</p>
        </section>

        <section className="trace-case__section" id="fluxo">
          <h2>{t.workflow}</h2>
          <ol className="trace-case__steps">
            {t.steps.map(([title, description]) => <li key={title}><h3>{title}</h3><p>{description}</p></li>)}
          </ol>
          <p className="trace-case__note"><ShieldCheck size={22} aria-hidden="true" />{t.optional}</p>
          <Capture name="operacao" caption={t.screenshots.operacao} />
        </section>

        <section className="trace-case__section" id="exemplos">
          <h2>{t.examples}</h2><p>{t.exampleIntro}</p>
          <div className="trace-case__examples">
            {journeys.map((journey, index) => {
              const [title, product, description] = index === 0 ? t.domestic : t.international;
              return (
                <article className="trace-case__example" key={journey.code}>
                  <Route aria-hidden="true" />
                  <h3>{title}</h3>
                  <p className="trace-case__example-meta"><code>{journey.code}</code> · {journey.events} {t.events}</p>
                  <RouteStops stops={journey.stops} />
                  <p><strong>{product}</strong> {description}</p>
                  <Capture name={journey.image} caption={t.screenshots[journey.image]} />
                  <a href={liveUrl + journey.path} target="_blank" rel="noreferrer">{t.view} <ArrowUpRight size={16} aria-hidden="true" /></a>
                </article>
              );
            })}
          </div>
        </section>

        <section className="trace-case__section" id="recursos">
          <h2>{t.featureTitle}</h2>
          <div className="trace-case__features">
            {t.features.map(([title, description], index) => {
              const Icon = featureIcons[index];
              return <article key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>;
            })}
          </div>
          <div className="trace-case__gallery">
            <Capture name="auditoria" caption={t.screenshots.auditoria} />
            <Capture name="qr" caption={t.screenshots.qr} />
          </div>
        </section>

        <section className="trace-case__section trace-case__decisions">
          <h2>{t.decisions}</h2>
          {t.details.map(([title, description]) => <details key={title}><summary>{title}</summary><p>{description}</p></details>)}
        </section>

        <section className="trace-case__section" id="tecnologia">
          <h2>{t.tech}</h2><p>{t.architecture}</p>
          <dl className="trace-case__layers">
            {t.layers.map(([label, tools, description]) => (
              <div key={label}><dt>{label}</dt><dd><strong>{tools}</strong><p>{description}</p></dd></div>
            ))}
          </dl>
          <div className="trace-case__actions"><a href={swagger} target="_blank" rel="noreferrer">{t.api} <ArrowUpRight size={16} aria-hidden="true" /></a></div>
        </section>

        <footer className="trace-case__footer">
          <h2>{t.footer}</h2>
          <a className="trace-case__primary" href={demo} target="_blank" rel="noreferrer">{t.test} <ArrowUpRight size={17} aria-hidden="true" /></a>
        </footer>
      </div>
    </main>
  );
}
