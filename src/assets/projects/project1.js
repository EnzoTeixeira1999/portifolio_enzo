const project1 = {
  id: 1,
  slug: "sistema-locacao-vagas",
  title: "Sistema de Locação de Vagas",
  shortDescription:
    "Sistema para controle e aluguel de vagas com foco em regras de negócio, organização e escalabilidade.",
  coverImage: "https://placehold.co/800x500/png?text=Projeto+1",
  technologies: ["Java", "Spring Boot", "MongoDB", "Docker"],
  demoUrl: "/demo/sistema-locacao-vagas",
  details: {
    purpose:
      "Esse projeto foi criado para gerenciar vagas de estacionamento, facilitar o aluguel de espaços e centralizar as principais regras de negócio em uma aplicação organizada.",
    usability:
      "A proposta foi permitir uma experiência simples de consulta, controle de disponibilidade, cadastro e visualização das vagas, com foco em clareza e boa estrutura de backend.",
    curiosities: [
      "Esse projeto representa bem meu foco em backend e regras de negócio.",
      "A estrutura foi pensada para demonstrar organização de API REST.",
      "Também serve como peça forte de portfólio para mostrar escalabilidade e clareza técnica.",
    ],
    sections: [
      {
        type: "image-left",
        title: "Visão geral do sistema",
        text: "Aqui o objetivo é apresentar a estrutura principal da aplicação, mostrando como o projeto foi pensado para organizar o controle de vagas e facilitar a navegação do usuário.",
        image: "https://placehold.co/700x500/png?text=Visao+Geral",
      },
      {
        type: "image-right",
        title: "Fluxo de utilização",
        text: "Essa parte explica como o usuário interage com o sistema, desde a consulta até a utilização dos recursos disponíveis, sempre com foco em praticidade e leitura simples.",
        image: "https://placehold.co/700x500/png?text=Fluxo+de+Uso",
      },
      {
        type: "image-left",
        title: "Organização técnica",
        text: "Este bloco pode mostrar a lógica da arquitetura, os componentes principais e a ideia de separação de responsabilidades do projeto.",
        image: "https://placehold.co/700x500/png?text=Arquitetura",
      },
    ],
    codeSnippets: [
      {
        title: "Exemplo de endpoint REST",
        code: `GET /api/vagas`,
      },
      {
        title: "Exemplo de estrutura de controller",
        code: `@GetMapping("/vagas")
public ResponseEntity<List<VagaResponse>> listarVagas() {
  return ResponseEntity.ok(service.listarTodas());
}`,
      },
    ],
  },
};

export default project1;