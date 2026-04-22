const project3 = {
  id: 3,
  slug: "dashboard-colaboradores",
  title: "Dashboard de Colaboradores",
  shortDescription:
    "Interface visual para gestão de colaboradores com foco em usabilidade e organização das informações.",
  coverImage: "https://placehold.co/800x500/png?text=Projeto+3",
  technologies: ["React", "JavaScript", "CSS", "Node.js"],
  demoUrl: "/demo/dashboard-colaboradores",
  details: {
    purpose:
      "Esse projeto foi desenvolvido para organizar informações de colaboradores em uma interface visual clara e acessível.",
    usability:
      "A proposta é facilitar o acompanhamento de dados e melhorar a leitura das informações em um dashboard limpo.",
    curiosities: [
      "Tem foco visual mais forte.",
      "Ajuda a equilibrar backend e frontend no portfólio.",
    ],
    sections: [
      {
        type: "image-left",
        title: "Painel principal",
        text: "Aqui o usuário encontra os dados mais importantes organizados visualmente.",
        image: "https://placehold.co/700x500/png?text=Painel+Principal",
      },
    ],
    codeSnippets: [
      {
        title: "Exemplo de componente",
        code: `function Dashboard() {
  return <div>Painel</div>;
}`,
      },
    ],
  },
};

export default project3;