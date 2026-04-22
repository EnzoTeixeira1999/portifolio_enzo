import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

function ProjectDemo() {
  const { lang, slug } = useParams();

  const project = projectsData.find((item) => {
    const projectSlug =
      typeof item.slug === "object" ? Object.values(item.slug) : [item.slug];

    return projectSlug.includes(slug);
  });

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Demo não encontrada</h1>
          <Link
            to={`/${language}`}
            className="mt-6 inline-block rounded-full border border-cyan-400/30 px-5 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
          >
            Voltar para a home
          </Link>
        </div>
      </main>
    );
  }

  const language = lang === "en" ? "en" : "pt";

  const title =
    typeof project.title === "object"
      ? project.title[language]
      : project.title;

  const backLabel = language === "pt" ? "← Voltar" : "← Back";
  const demoTag = language === "pt" ? "Demo" : "Demo";
  const areaTag = language === "pt" ? "Área da demo" : "Demo area";
  const placeholderTitle = title;

  const placeholderText =
    language === "pt"
      ? "Aqui vai ficar a versão navegável do projeto. Depois você pode substituir esse espaço por um iframe, uma versão hospedada, ou uma demonstração interna feita em React."
      : "This is where the navigable version of the project will appear. Later, you can replace this space with an iframe, a hosted version, or an internal demo built in React.";

  return (
    <main className="min-h-screen bg-black px-6 py-14 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              {demoTag}
            </p>
            <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
              {title}
            </h1>
          </div>

          <Link
            to={`/${language}`}
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
          >
            {backLabel}
          </Link>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <div className="flex min-h-[65vh] items-center justify-center rounded-2xl border border-dashed border-white/10 bg-black">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                {areaTag}
              </p>
              <h2 className="mt-3 text-2xl font-semibold">
                {placeholderTitle}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-400">
                {placeholderText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProjectDemo;