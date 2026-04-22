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
    coverImage:
      "https://placehold.co/800x500/png?text=Projeto+1",
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
          image: "https://placehold.co/700x500/png?text=Imagem+1",
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
          image: "https://placehold.co/700x500/png?text=Imagem+2",
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
];