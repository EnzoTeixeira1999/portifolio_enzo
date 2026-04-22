const project2 = {
  id: 2,
  slug: "migracao-sistema-legado",
  title: "Migração de Sistema Legado",
  shortDescription:
    "Projeto focado em modernização de sistema antigo para uma arquitetura mais organizada e escalável.",
  coverImage: "https://placehold.co/800x500/png?text=Projeto+2",
  technologies: ["Java", "Quarkus", "PostgreSQL", "Kubernetes"],
  demoUrl: "/demo/migracao-sistema-legado",
  details: {
    purpose:
      "Esse projeto foi pensado para representar a evolução de um sistema legado para uma solução mais moderna, organizada e preparada para crescimento.",
    usability:
      "O foco está em demonstrar modernização, estrutura técnica mais limpa e melhor manutenção ao longo do tempo.",
    curiosities: [
      "Representa bem conhecimento em arquitetura.",
      "É uma ótima peça para mostrar evolução técnica.",
    ],
    sections: [
      {
        type: "image-left",
        title: "Estrutura inicial",
        text: "Aqui pode ser apresentada a base da arquitetura e a diferença entre o modelo antigo e o novo.",
        image: "https://placehold.co/700x500/png?text=Estrutura+Inicial",
      },
    ],
    codeSnippets: [
      {
        title: "Exemplo de classe de serviço",
        code: `public class UsuarioService {
  public List<Usuario> listar() {
    return repository.findAll();
  }
}`,
      },
    ],
  },
};

export default project2;