import { Link } from "react-router-dom";
import "./tracePassCaseStudy.css";

const assets = "/projects/tracepass/";
const documentation = "https://github.com/EnzoTeixeira1999/enterprise-suite/tree/main/apps/tracepass#readme";

const content = {
  pt: {
    back: "Voltar aos projetos", category: "Rastreabilidade empresarial",
    headline: "Da origem ao destino, lote por lote.",
    intro: "O TracePass reúne fornecedores, movimentações e ocorrências em uma jornada consultável. Cada remessa tem um passaporte digital para compartilhar por link ou QR Code.",
    test: "Testar a demonstração", passport: "Ver passaporte", documentation: "Ler documentação",
    imageLabel: "Abrir captura em tamanho original",
    passportCaption: "Ficha do lote com origem, quantidade, validade e status operacional.",
    workflow: "Como a rastreabilidade funciona",
    panelTitle: "Cadastre o que será rastreado",
    panelText: "Comece com a empresa, cadastre o produto e o fornecedor e vincule os dois ao lote. A demonstração oferece um lote pronto para ir direto ao registro de movimentações.",
    panelCaption: "Painel da demonstração com as cinco etapas e o acesso opcional a Ocorrências.",
    mapTitle: "Registre cada etapa da jornada",
    mapText: "Marque onde a movimentação aconteceu e registre a data e o tipo do evento. O passaporte conecta os pontos em ordem cronológica e permite destacar no mapa o evento selecionado.",
    mapCaption: "Linha do tempo sincronizada com o mapa interativo. Cartografia © OpenStreetMap contributors.",
    incidentTitle: "Acompanhe desvios quando acontecerem",
    incidentText: "Em caso de avaria ou outro desvio, a equipe pode registrar a ocorrência, acompanhar o tratamento e documentar a resolução. Ocorrências graves podem acionar bloqueio preventivo.",
    tryTitle: "Experimente com um lote fictício",
    tryText: "Escolha o lote pronto, marque uma movimentação no mapa e abra o passaporte do mesmo lote para conferir o novo ponto. Os registros da demonstração ficam neste navegador.",
  },
  en: {
    back: "Back to projects", category: "Enterprise traceability",
    headline: "From origin to destination, batch by batch.",
    intro: "TracePass brings suppliers, movements, and incidents together in one batch history. Each shipment has a digital passport that can be shared by link or QR code.",
    test: "Try the demo (PT-BR)", passport: "View passport (PT-BR)", documentation: "Read the documentation (PT-BR)",
    imageLabel: "Open full-size screenshot",
    passportCaption: "Batch passport showing origin, quantity, expiry date, and operational status.",
    workflow: "How batch traceability works",
    panelTitle: "Set up what you want to track",
    panelText: "Create the organization, add a product and supplier, and link both to the batch. The demo includes a ready-made batch so you can start recording movements right away.",
    panelCaption: "Demo dashboard with five workflow steps and optional access to Incidents.",
    mapTitle: "Document each stage of the journey",
    mapText: "Pin where a movement took place and record the date and event type. The passport connects the points chronologically and highlights the selected event on the map.",
    mapCaption: "Timeline synchronized with the interactive map. Cartography © OpenStreetMap contributors.",
    incidentTitle: "Track exceptions when they happen",
    incidentText: "If damage or another issue occurs, the team can register the incident, track its investigation, and document the resolution. High-severity incidents may trigger a preventive hold.",
    tryTitle: "Try it with a sample batch",
    tryText: "Choose the existing sample batch, mark a movement on the map, and open that batch's passport to check the new point. Demo records are stored in this browser.",
  },
};

function Screenshot({ image, caption, label, width = 1563, height, priority = false }) {
  const src = assets + image;

  return (
    <figure className="trace-case__figure">
      <a href={src} target="_blank" rel="noreferrer" aria-label={`${label}: ${caption}`}>
        <img src={src} alt={caption} width={width} height={height}
          loading={priority ? "eager" : "lazy"} decoding="async" />
        <span className="trace-case__expand" aria-hidden="true">↗</span>
      </a>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function TracePassCaseStudy({ language, liveUrl, technologies }) {
  const t = content[language];
  const demo = `${liveUrl}/laboratorio`;
  const passport = `${liveUrl}/demo`;

  return (
    <main className="trace-case">
      <div className="trace-case__frame">
        <header className="trace-case__header">
          <Link to={`/${language}#projects`}>← {t.back}</Link>
          <a href={documentation} target="_blank" rel="noreferrer">{t.documentation} <span aria-hidden="true">↗&#xFE0E;</span></a>
        </header>

        <section className="trace-case__hero" aria-labelledby="trace-case-title">
          <div>
            <div className="trace-case__brand"><span aria-hidden="true">TP</span> TracePass</div>
            <p className="trace-case__category">{t.category}</p>
            <h1 id="trace-case-title">{t.headline}</h1>
            <p>{t.intro}</p>
            <div className="trace-case__actions">
              <a className="trace-case__primary" href={demo} target="_blank" rel="noreferrer">{t.test} <span aria-hidden="true">↗&#xFE0E;</span></a>
              <a href={passport} target="_blank" rel="noreferrer">{t.passport}</a>
            </div>
          </div>
          <Screenshot image="passaporte-atual.png" caption={t.passportCaption} label={t.imageLabel} height={699} priority />
        </section>

        <section className="trace-case__workflow" aria-labelledby="trace-case-workflow">
          <h2 id="trace-case-workflow">{t.workflow}</h2>
          <article>
            <div><h3>{t.panelTitle}</h3><p>{t.panelText}</p></div>
            <Screenshot image="painel-atual.png" caption={t.panelCaption} label={t.imageLabel} width={1562} height={782} />
          </article>
          <article>
            <div><h3>{t.mapTitle}</h3><p>{t.mapText}</p></div>
            <Screenshot image="jornada-atual.png" caption={t.mapCaption} label={t.imageLabel} height={758} />
          </article>
          <aside className="trace-case__incidents">
            <h3>{t.incidentTitle}</h3><p>{t.incidentText}</p>
          </aside>
        </section>

        <footer className="trace-case__footer">
          <div><h2>{t.tryTitle}</h2><p>{t.tryText}</p></div>
          <a className="trace-case__primary" href={demo} target="_blank" rel="noreferrer">{t.test} <span aria-hidden="true">↗&#xFE0E;</span></a>
          <ul>{technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
        </footer>
      </div>
    </main>
  );
}
