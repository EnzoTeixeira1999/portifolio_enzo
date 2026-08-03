const createPlannedProject = ({
  id,
  slug,
  name,
  initials,
  tagline,
  shortDescription,
  technologies,
  purpose,
  usability,
  curiosities,
}) => ({
  id,
  slug,
  title: {
    pt: name,
    en: name,
  },
  shortDescription,
  coverBrand: name,
  coverInitials: initials,
  coverTagline: tagline,
  status: "IN_DEVELOPMENT",
  technologies,
  details: {
    purpose,
    usability,
    curiosities,
    sections: [],
    codeSnippets: [],
  },
});

export const projectsData = [
  {
    id: 1,
    slug: {
      pt: "tracepass-rastreabilidade",
      en: "tracepass-traceability",
    },
    title: {
      pt: "TracePass — Rastreabilidade Empresarial",
      en: "TracePass — Enterprise Traceability",
    },
    shortDescription: {
      pt: "Plataforma full stack para rastrear produtos, lotes, fornecedores, movimentações, ocorrências e passaportes digitais.",
      en: "Full-stack platform for tracking products, batches, suppliers, movements, incidents, and digital product passports.",
    },
    coverImage: "/projects/tracepass/capa.webp",
    coverBrand: "TracePass",
    coverInitials: "TP",
    coverTagline: {
      pt: "Rastreabilidade de ponta a ponta",
      en: "End-to-end traceability",
    },
    coverPosition: "center 38%",
    status: "PUBLISHED",
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Flyway",
    ],
    liveUrl: "https://tracepass-enterprise.vercel.app",
    liveLanguage: "PT-BR",
    sourceUrl: "https://github.com/EnzoTeixeira1999/enterprise-suite",
    apiDocsUrl: "https://tracepass-api.onrender.com/swagger-ui/index.html",
    details: {
      purpose: {
        pt: "O TracePass foi criado para centralizar a rastreabilidade operacional de produtos, lotes e fornecedores, preservando toda a jornada desde a produção até o destino final.",
        en: "TracePass was created to centralize the operational traceability of products, batches, and suppliers, preserving the entire journey from production to final destination.",
      },
      usability: {
        pt: "A plataforma permite cadastrar organizações, produtos, fornecedores e lotes, registrar movimentações geográficas, tratar ocorrências com bloqueio automático e disponibilizar um passaporte digital público por QR Code.",
        en: "The platform allows organizations to register products, suppliers, and batches, record geographic movements, handle incidents with automatic blocking, and provide a public digital passport through a QR Code.",
      },
      curiosities: {
        pt: [
          "Aplicação publicada com frontend na Vercel, backend Docker no Render e PostgreSQL no Neon.",
          "Ocorrências graves bloqueiam automaticamente o lote até investigação, resolução e liberação controlada.",
          "O passaporte público apresenta procedência, jornada geográfica, histórico de segurança e QR Code verificável.",
        ],
        en: [
          "Application deployed with the frontend on Vercel, Docker backend on Render, and PostgreSQL on Neon.",
          "High-severity incidents automatically block the batch until investigation, resolution, and controlled release.",
          "The public passport presents provenance, geographic journey, safety history, and a verifiable QR Code.",
        ],
      },
      sections: [
        {
          type: "image-left",
          title: { pt: "Painel administrativo", en: "Administrative dashboard" },
          text: {
            pt: "O painel permite gerenciar empresas, produtos, fornecedores e lotes rastreados pela plataforma.",
            en: "The dashboard manages companies, products, suppliers, and batches tracked by the platform.",
          },
          image: "/projects/tracepass/painel-administrativo.webp",
        },
        {
          type: "image-right",
          title: { pt: "Linha do tempo rastreável", en: "Traceable timeline" },
          text: {
            pt: "Cada evento é preservado em ordem cronológica, registrando local, responsável, quantidade e horário.",
            en: "Each event is preserved chronologically, recording location, responsible person, quantity, and time.",
          },
          image: "/projects/tracepass/linha-do-tempo.webp",
        },
        {
          type: "image-left",
          title: { pt: "Mapa da jornada", en: "Journey map" },
          text: {
            pt: "As coordenadas registradas nos eventos formam uma rota geográfica interativa da jornada do lote.",
            en: "Coordinates recorded in events form an interactive geographic route of the batch journey.",
          },
          image: "/projects/tracepass/mapa-da-jornada.webp",
        },
        {
          type: "image-right",
          title: { pt: "Passaporte digital público", en: "Public digital passport" },
          text: {
            pt: "Clientes e parceiros podem consultar procedência, situação, movimentações e autenticidade do produto.",
            en: "Customers and partners can verify the product's provenance, status, movements, and authenticity.",
          },
          image: "/projects/tracepass/passaporte-digital.webp",
        },
        {
          type: "image-left",
          title: { pt: "Segurança operacional", en: "Operational safety" },
          text: {
            pt: "Desvios críticos acionam bloqueios automáticos, investigação, resolução e liberação controlada.",
            en: "Critical incidents trigger automatic blocking, investigation, resolution, and controlled release.",
          },
          image: "/projects/tracepass/seguranca-operacional.webp",
        },
        {
          type: "image-right",
          title: { pt: "Acesso por QR Code", en: "QR Code access" },
          text: {
            pt: "O QR Code pode ser adicionado à embalagem para abrir diretamente o passaporte público do lote.",
            en: "The QR Code can be attached to the package to open the batch's public passport directly.",
          },
          image: "/projects/tracepass/qr-code.png",
        },
        {
          type: "image-left",
          title: { pt: "API documentada", en: "Documented API" },
          text: {
            pt: "A API REST possui documentação interativa com Swagger e OpenAPI, organizada por domínio.",
            en: "The REST API has interactive Swagger and OpenAPI documentation organized by domain.",
          },
          image: "/projects/tracepass/swagger-api.png",
        },
      ],
      codeSnippets: [
        {
          title: { pt: "Consultar passaporte público", en: "Get public passport" },
          code: "GET /api/public/passports/{batchId}",
        },
        {
          title: { pt: "Registrar movimentação", en: "Register movement" },
          code: "POST /api/companies/{companyId}/products/{productId}/batches/{batchId}/movements",
        },
        {
          title: { pt: "Liberar lote após inspeção", en: "Release batch after inspection" },
          code: "POST /api/companies/{companyId}/products/{productId}/batches/{batchId}/release",
        },
      ],
    },
  },

  createPlannedProject({
    id: 2,
    slug: { pt: "coldtrack-cadeia-fria", en: "coldtrack-cold-chain" },
    name: "ColdTrack",
    initials: "CT",
    tagline: { pt: "Monitoramento inteligente da cadeia fria", en: "Smart cold-chain monitoring" },
    shortDescription: {
      pt: "Monitoramento de temperatura e condições de transporte com alertas, histórico e integração à rastreabilidade.",
      en: "Temperature and transport-condition monitoring with alerts, history, and traceability integration.",
    },
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "IoT", "WebSocket"],
    purpose: {
      pt: "O ColdTrack será o módulo responsável por monitorar a cadeia fria de produtos sensíveis, reunindo leituras de sensores e eventos logísticos em um histórico confiável.",
      en: "ColdTrack will monitor the cold chain of sensitive products, combining sensor readings and logistics events into a reliable history.",
    },
    usability: {
      pt: "Operadores poderão acompanhar temperaturas em tempo real, configurar faixas seguras, receber alertas e relacionar desvios aos lotes do TracePass.",
      en: "Operators will be able to track temperatures in real time, configure safe ranges, receive alerts, and associate deviations with TracePass batches.",
    },
    curiosities: {
      pt: ["Integração planejada com o TracePass.", "Alertas por limite e permanência fora da faixa.", "Histórico auditável das leituras."],
      en: ["Planned integration with TracePass.", "Threshold and out-of-range duration alerts.", "Auditable reading history."],
    },
  }),

  createPlannedProject({
    id: 3,
    slug: { pt: "vendorguard-fornecedores", en: "vendorguard-suppliers" },
    name: "VendorGuard",
    initials: "VG",
    tagline: { pt: "Risco e conformidade de fornecedores", en: "Supplier risk and compliance" },
    shortDescription: {
      pt: "Gestão de fornecedores com documentos, indicadores de desempenho, conformidade e avaliação de riscos.",
      en: "Supplier management with documents, performance indicators, compliance, and risk assessment.",
    },
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "OpenAPI"],
    purpose: {
      pt: "O VendorGuard será criado para centralizar a avaliação de fornecedores e reduzir riscos relacionados a documentação, qualidade, prazo e conformidade.",
      en: "VendorGuard will centralize supplier assessment and reduce risks related to documentation, quality, deadlines, and compliance.",
    },
    usability: {
      pt: "A empresa poderá registrar fornecedores, controlar documentos, acompanhar avaliações e utilizar uma pontuação para apoiar decisões de compra.",
      en: "Companies will register suppliers, manage documents, track reviews, and use a score to support purchasing decisions.",
    },
    curiosities: {
      pt: ["Pontuação baseada em múltiplos critérios.", "Alertas para documentos próximos do vencimento.", "Histórico de avaliações por fornecedor."],
      en: ["Multi-criteria scoring.", "Alerts for documents nearing expiration.", "Review history for each supplier."],
    },
  }),

  createPlannedProject({
    id: 4,
    slug: { pt: "stockbalancer-estoques", en: "stockbalancer-inventory" },
    name: "StockBalancer",
    initials: "SB",
    tagline: { pt: "Equilíbrio de estoque entre unidades", en: "Inventory balance across locations" },
    shortDescription: {
      pt: "Análise de estoque entre filiais para identificar excessos, rupturas e oportunidades de redistribuição.",
      en: "Cross-branch inventory analysis to identify excess, shortages, and redistribution opportunities.",
    },
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "Analytics"],
    purpose: {
      pt: "O StockBalancer será desenvolvido para equilibrar estoques entre unidades e reduzir simultaneamente falta de produtos e capital parado.",
      en: "StockBalancer will balance inventory across locations and reduce both stockouts and idle capital.",
    },
    usability: {
      pt: "Gestores poderão comparar cobertura de estoque, demanda e giro, recebendo sugestões de transferência entre filiais.",
      en: "Managers will compare inventory coverage, demand, and turnover while receiving transfer suggestions across branches.",
    },
    curiosities: {
      pt: ["Sugestões explicáveis de redistribuição.", "Indicadores de excesso e risco de ruptura.", "Visão consolidada por produto e filial."],
      en: ["Explainable redistribution suggestions.", "Excess and stockout risk indicators.", "Consolidated view by product and branch."],
    },
  }),

  createPlannedProject({
    id: 5,
    slug: { pt: "wastelessbusiness-reducao-perdas", en: "wastelessbusiness-loss-reduction" },
    name: "WasteLessBusiness",
    initials: "WL",
    tagline: { pt: "Redução inteligente de perdas", en: "Smart business loss reduction" },
    shortDescription: {
      pt: "Controle de perdas, vencimentos e desperdícios com identificação de causas e planos de ação.",
      en: "Loss, expiration, and waste control with cause identification and action plans.",
    },
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "Analytics"],
    purpose: {
      pt: "O WasteLessBusiness será um módulo para tornar desperdícios visíveis, mensuráveis e tratáveis dentro da operação empresarial.",
      en: "WasteLessBusiness will make operational waste visible, measurable, and actionable.",
    },
    usability: {
      pt: "Equipes poderão registrar perdas, classificar causas, acompanhar impacto financeiro e definir ações preventivas.",
      en: "Teams will record losses, classify causes, track financial impact, and define preventive actions.",
    },
    curiosities: {
      pt: ["Análise por causa, produto e unidade.", "Acompanhamento de validade e risco de descarte.", "Integração planejada com o StockBalancer."],
      en: ["Analysis by cause, product, and location.", "Expiration and disposal-risk tracking.", "Planned integration with StockBalancer."],
    },
  }),

  createPlannedProject({
    id: 6,
    slug: { pt: "datagalaxy-governanca-dados", en: "datagalaxy-data-governance" },
    name: "DataGalaxy",
    initials: "DG",
    tagline: { pt: "Mapa vivo dos dados empresariais", en: "A living map of enterprise data" },
    shortDescription: {
      pt: "Catálogo visual para entender origem, dependências, responsáveis e qualidade dos dados empresariais.",
      en: "Visual catalog for understanding enterprise data origin, dependencies, ownership, and quality.",
    },
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "Data Visualization"],
    purpose: {
      pt: "O DataGalaxy será criado para organizar o conhecimento sobre dados e mostrar como informações importantes percorrem os sistemas da empresa.",
      en: "DataGalaxy will organize data knowledge and show how important information flows across company systems.",
    },
    usability: {
      pt: "Usuários poderão consultar conjuntos de dados, responsáveis, dependências, regras de qualidade e impactos de alterações.",
      en: "Users will consult datasets, owners, dependencies, quality rules, and the impact of changes.",
    },
    curiosities: {
      pt: ["Visualização de linhagem de dados.", "Definição de responsáveis por domínio.", "Indicadores de qualidade e confiabilidade."],
      en: ["Data-lineage visualization.", "Domain ownership definition.", "Quality and reliability indicators."],
    },
  }),

  createPlannedProject({
    id: 7,
    slug: { pt: "lostopportunity-oportunidades", en: "lostopportunity-analysis" },
    name: "LostOpportunity",
    initials: "LO",
    tagline: { pt: "Aprendizado sobre vendas perdidas", en: "Learning from missed sales" },
    shortDescription: {
      pt: "Registro e análise de oportunidades perdidas, seus motivos, impacto financeiro e possibilidades de recuperação.",
      en: "Recording and analysis of lost opportunities, their causes, financial impact, and recovery possibilities.",
    },
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "Analytics"],
    purpose: {
      pt: "O LostOpportunity será desenvolvido para transformar vendas não concluídas em informação útil para decisões comerciais e operacionais.",
      en: "LostOpportunity will turn unsuccessful sales into useful information for commercial and operational decisions.",
    },
    usability: {
      pt: "Times comerciais poderão registrar motivos de perda, valores, concorrentes e ações de recuperação, acompanhando padrões em painéis.",
      en: "Sales teams will record loss reasons, values, competitors, and recovery actions while tracking patterns in dashboards.",
    },
    curiosities: {
      pt: ["Taxonomia configurável de motivos.", "Cálculo do impacto financeiro perdido.", "Identificação de padrões recorrentes."],
      en: ["Configurable reason taxonomy.", "Calculation of lost financial impact.", "Identification of recurring patterns."],
    },
  }),

  createPlannedProject({
    id: 8,
    slug: { pt: "processgenome-processos", en: "processgenome-processes" },
    name: "ProcessGenome",
    initials: "PG",
    tagline: { pt: "Mapeamento profundo de processos", en: "Deep process mapping" },
    shortDescription: {
      pt: "Mapeamento de processos, etapas, responsáveis, dependências, riscos e oportunidades de melhoria.",
      en: "Mapping of processes, stages, owners, dependencies, risks, and improvement opportunities.",
    },
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "BPM"],
    purpose: {
      pt: "O ProcessGenome será uma ferramenta para revelar como os processos realmente funcionam e onde estão seus gargalos e riscos.",
      en: "ProcessGenome will reveal how processes actually work and where bottlenecks and risks are located.",
    },
    usability: {
      pt: "Gestores poderão documentar etapas, responsáveis, entradas, saídas e dependências, criando uma visão navegável da operação.",
      en: "Managers will document stages, owners, inputs, outputs, and dependencies to create a navigable operational view.",
    },
    curiosities: {
      pt: ["Mapas de dependência entre processos.", "Registro de gargalos e riscos.", "Histórico de melhorias e versões."],
      en: ["Dependency maps across processes.", "Bottleneck and risk records.", "Improvement and version history."],
    },
  }),

  createPlannedProject({
    id: 9,
    slug: { pt: "oficina-transparente", en: "transparent-workshop" },
    name: "Oficina Transparente",
    initials: "OT",
    tagline: { pt: "Confiança digital no serviço automotivo", en: "Digital trust in automotive service" },
    shortDescription: {
      pt: "Ordens de serviço transparentes com diagnóstico, orçamento, evidências, aprovações e acompanhamento pelo cliente.",
      en: "Transparent service orders with diagnosis, estimates, evidence, approvals, and customer tracking.",
    },
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "QR Code"],
    purpose: {
      pt: "A Oficina Transparente será criada para melhorar a confiança entre oficinas e clientes por meio de um histórico claro de cada serviço.",
      en: "Oficina Transparente will improve trust between repair shops and customers through a clear history of every service.",
    },
    usability: {
      pt: "A oficina poderá registrar diagnóstico, peças, orçamento e evidências; o cliente acompanhará o andamento e autorizará etapas digitalmente.",
      en: "Repair shops will record diagnosis, parts, estimates, and evidence while customers track progress and approve stages digitally.",
    },
    curiosities: {
      pt: ["Acompanhamento público por link ou QR Code.", "Aprovação digital de orçamento e serviços.", "Histórico de manutenção por veículo."],
      en: ["Public tracking by link or QR Code.", "Digital approval of estimates and services.", "Maintenance history by vehicle."],
    },
  }),
];