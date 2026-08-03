export const projectsData = [
  {
    id: 1,
    slug: {
      pt: "sistema-locacao-vagas",
      en: "parking-rental-system",
    },
    title: {
      pt: "Sistema de Locação de Vagas",
      en: "Parking Rental System",
    },
    shortDescription: {
      pt: "Sistema para controle e aluguel de vagas com foco em regras de negócio, organização e escalabilidade.",
      en: "System for parking space control and rental focused on business rules, organization, and scalability.",
    },
    coverImage: "/projects/project1/capa.png",
    technologies: ["Java", "Spring Boot", "MongoDB", "Docker"],
    demoUrl: {
      pt: "/pt/demo/sistema-locacao-vagas",
      en: "/en/demo/parking-rental-system",
    },
    details: {
      purpose: {
        pt: "Esse projeto foi criado para gerenciar vagas de estacionamento e facilitar o controle de locação.",
        en: "This project was created to manage parking spaces and simplify rental control.",
      },
      usability: {
        pt: "O usuário pode visualizar vagas, consultar disponibilidade e acompanhar o fluxo de utilização.",
        en: "Users can view parking spaces, check availability, and follow the usage flow.",
      },
      curiosities: {
        pt: [
          "Foi pensado para representar backend robusto.",
          "A estrutura foi desenhada com foco em APIs REST.",
        ],
        en: [
          "It was designed to represent a robust backend.",
          "The structure was designed with a focus on REST APIs.",
        ],
      },
      sections: [
        {
          type: "image-left",
          title: {
            pt: "Visão inicial do sistema",
            en: "Initial system overview",
          },
          text: {
            pt: "Aqui fica a apresentação geral do projeto e o objetivo da aplicação.",
            en: "This section presents the overall project and the goal of the application.",
          },
          image: "/projects/project1/tela1.png",
        },
        {
          type: "image-right",
          title: {
            pt: "Fluxo interno",
            en: "Internal flow",
          },
          text: {
            pt: "Essa parte mostra como o sistema organiza os dados e a navegação.",
            en: "This part shows how the system organizes data and navigation.",
          },
          image: "/projects/project1/tela2.png",
        },
      ],
      codeSnippets: [
        {
          title: {
            pt: "Exemplo de endpoint",
            en: "Endpoint example",
          },
          code: `GET /api/vagas`,
        },
      ],
    },
  },
    {
    id: 2,
    slug: {
      pt: "migracao-sistema-legado",
      en: "legacy-system-migration",
    },
    title: {
      pt: "Migração de Sistema Legado",
      en: "Legacy System Migration",
    },
    shortDescription: {
      pt: "Projeto focado em modernização de sistema antigo para uma arquitetura mais organizada e escalável.",
      en: "Project focused on modernizing an old system into a more organized and scalable architecture.",
    },
    coverImage:
      "https://placehold.co/800x500/png?text=Projeto+2",
    technologies: ["Java", "Quarkus", "PostgreSQL", "Kubernetes"],
    demoUrl: {
      pt: "/pt/demo/migracao-sistema-legado",
      en: "/en/demo/legacy-system-migration",
    },
    details: {
      purpose: {
        pt: "Esse projeto foi criado para representar a modernização de um sistema legado para uma estrutura mais atual.",
        en: "This project was created to represent the modernization of a legacy system into a more current structure.",
      },
      usability: {
        pt: "A proposta foi melhorar manutenção, escalabilidade e clareza de responsabilidades.",
        en: "The goal was to improve maintenance, scalability, and clarity of responsibilities.",
      },
      curiosities: {
        pt: [
          "Inspirado em projetos reais de migração.",
          "Foco em arquitetura e organização do backend.",
        ],
        en: [
          "Inspired by real migration projects.",
          "Focused on architecture and backend organization.",
        ],
      },
      sections: [
        {
          type: "image-left",
          title: {
            pt: "Arquitetura inicial",
            en: "Initial architecture",
          },
          text: {
            pt: "Essa parte mostra a estrutura macro do sistema.",
            en: "This part shows the macro structure of the system.",
          },
          image: "https://placehold.co/700x500/png?text=Imagem+1",
        },
      ],
      codeSnippets: [
        {
          title: {
            pt: "Exemplo de serviço",
            en: "Service example",
          },
          code: `public class UsuarioService {}`,
        },
      ],
    },
  },
    {
    id: 3,
    slug: {
      pt: "dashboard-colaboradores",
      en: "employee-dashboard",
    },
    title: {
      pt: "Dashboard de Colaboradores",
      en: "Employee Dashboard",
    },
    shortDescription: {
      pt: "Interface visual para gestão de colaboradores com foco em usabilidade e organização das informações.",
      en: "Visual interface for employee management focused on usability and information organization.",
    },
    coverImage:
      "https://placehold.co/800x500/png?text=Projeto+3",
    technologies: ["React", "JavaScript", "CSS", "Node.js"],
    demoUrl: {
      pt: "/pt/demo/dashboard-colaboradores",
      en: "/en/demo/employee-dashboard",
    },
    details: {
      purpose: {
        pt: "Esse projeto foi pensado para organizar informações de colaboradores em uma interface limpa.",
        en: "This project was designed to organize employee information in a clean interface.",
      },
      usability: {
        pt: "Permite consulta mais visual e prática de dados importantes.",
        en: "It allows a more visual and practical way to consult important data.",
      },
      curiosities: {
        pt: [
          "Tem foco maior em experiência visual.",
          "Pode ser um ótimo projeto de destaque no portfólio.",
        ],
        en: [
          "It has a stronger focus on visual experience.",
          "It can be a great featured project in the portfolio.",
        ],
      },
      sections: [
        {
          type: "image-left",
          title: {
            pt: "Tela principal",
            en: "Main screen",
          },
          text: {
            pt: "Aqui o usuário consegue visualizar os dados principais.",
            en: "Here the user can view the main data.",
          },
          image: "https://placehold.co/700x500/png?text=Imagem+1",
        },
      ],
      codeSnippets: [
        {
          title: {
            pt: "Exemplo de componente",
            en: "Component example",
          },
          code: `function Dashboard() { return <div>Painel</div>; }`,
        },
      ],
    },
  },
  {
    id: 4,
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
    coverImage: "/projects/tracepass/capa.png",
        coverBrand: "TracePass",
    coverTagline: {
      pt: "Rastreabilidade de ponta a ponta",
      en: "End-to-end traceability",
    },
    coverPosition: "center 38%",
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
    sourceUrl:
      "https://github.com/EnzoTeixeira1999/enterprise-suite",
    apiDocsUrl:
      "https://tracepass-api.onrender.com/swagger-ui/index.html",
    demoUrl: {
      pt: "/pt/demo/tracepass-rastreabilidade",
      en: "/en/demo/tracepass-traceability",
    },
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
          title: {
            pt: "Painel administrativo",
            en: "Administrative dashboard",
          },
          text: {
            pt: "O painel permite gerenciar empresas, produtos, fornecedores e lotes rastreados pela plataforma.",
            en: "The dashboard manages companies, products, suppliers, and batches tracked by the platform.",
          },
          image:
            "/projects/tracepass/painel-administrativo.png",
        },
        {
          type: "image-right",
          title: {
            pt: "Linha do tempo rastreável",
            en: "Traceable timeline",
          },
          text: {
            pt: "Cada evento é preservado em ordem cronológica, registrando local, responsável, quantidade e horário.",
            en: "Each event is preserved chronologically, recording location, responsible person, quantity, and time.",
          },
          image: "/projects/tracepass/linha-do-tempo.png",
        },
        {
          type: "image-left",
          title: {
            pt: "Mapa da jornada",
            en: "Journey map",
          },
          text: {
            pt: "As coordenadas registradas nos eventos formam uma rota geográfica interativa da jornada do lote.",
            en: "Coordinates recorded in events form an interactive geographic route of the batch journey.",
          },
          image: "/projects/tracepass/mapa-da-jornada.png",
        },
        {
          type: "image-right",
          title: {
            pt: "Passaporte digital público",
            en: "Public digital passport",
          },
          text: {
            pt: "Clientes e parceiros podem consultar procedência, situação, movimentações e autenticidade do produto.",
            en: "Customers and partners can verify the product's provenance, status, movements, and authenticity.",
          },
          image:
            "/projects/tracepass/passaporte-digital.png",
        },
        {
          type: "image-left",
          title: {
            pt: "Segurança operacional",
            en: "Operational safety",
          },
          text: {
            pt: "Desvios críticos acionam bloqueios automáticos, investigação, resolução e liberação controlada.",
            en: "Critical incidents trigger automatic blocking, investigation, resolution, and controlled release.",
          },
          image:
            "/projects/tracepass/seguranca-operacional.png",
        },
        {
          type: "image-right",
          title: {
            pt: "Acesso por QR Code",
            en: "QR Code access",
          },
          text: {
            pt: "O QR Code pode ser adicionado à embalagem para abrir diretamente o passaporte público do lote.",
            en: "The QR Code can be attached to the package to open the batch's public passport directly.",
          },
          image: "/projects/tracepass/qr-code.png",
        },
        {
          type: "image-left",
          title: {
            pt: "API documentada",
            en: "Documented API",
          },
          text: {
            pt: "A API REST possui documentação interativa com Swagger e OpenAPI, organizada por domínio.",
            en: "The REST API has interactive Swagger and OpenAPI documentation organized by domain.",
          },
          image: "/projects/tracepass/swagger-api.png",
        },
      ],
      codeSnippets: [
        {
          title: {
            pt: "Consultar passaporte público",
            en: "Get public passport",
          },
          code: `GET /api/public/passports/{batchId}`,
        },
        {
          title: {
            pt: "Registrar movimentação",
            en: "Register movement",
          },
          code: `POST /api/companies/{companyId}/products/{productId}/batches/{batchId}/movements`,
        },
        {
          title: {
            pt: "Liberar lote após inspeção",
            en: "Release batch after inspection",
          },
          code: `POST /api/companies/{companyId}/products/{productId}/batches/{batchId}/release`,
        },
      ],
    },
  },
];