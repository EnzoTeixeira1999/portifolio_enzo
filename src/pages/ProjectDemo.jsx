import { Link, useParams } from "react-router-dom";
import { projectsData } from "../data/projectsData";

function ProjectDemo() {
  const { lang, slug } = useParams();
  const language = lang === "en" ? "en" : "pt";

  const project = projectsData.find((item) => {
    const projectSlugs =
      typeof item.slug === "object"
        ? Object.values(item.slug)
        : [item.slug];

    return projectSlugs.includes(slug);
  });

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            {language === "en"
              ? "Demo not found"
              : "Demonstração não encontrada"}
          </h1>

          <Link
            to={`/${language}`}
            className="mt-6 inline-block rounded-full border border-cyan-400/30 px-5 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
          >
            {language === "en"
              ? "Back to home"
              : "Voltar para a página inicial"}
          </Link>
        </div>
      </main>
    );
  }

  const title =
    typeof project.title === "object"
      ? project.title[language]
      : project.title;

  const liveUrl =
    typeof project.liveUrl === "object"
      ? project.liveUrl[language]
      : project.liveUrl;

  const backLabel =
    language === "pt" ? "← Voltar" : "← Back";

  const demoTag = liveUrl
    ? language === "pt"
      ? "Demonstração publicada"
      : "Published demo"
    : "Demo";

  const areaTag = liveUrl
    ? language === "pt"
      ? "Projeto disponível online"
      : "Project available online"
    : language === "pt"
      ? "Área da demonstração"
      : "Demo area";

  const placeholderText = liveUrl
    ? language === "pt"
      ? "A aplicação está publicada e pronta para ser explorada. Utilize o botão abaixo para abrir o projeto completo em uma nova aba."
      : "The application is published and ready to be explored. Use the button below to open the complete project in a new tab."
    : language === "pt"
      ? "A versão navegável deste projeto ainda está sendo preparada."
      : "The navigable version of this project is still being prepared.";

  const openProjectLabel =
    language === "pt"
      ? "Abrir demonstração online"
      : "Open live demo";

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
          <div className="flex min-h-[65vh] items-center justify-center rounded-2xl border border-dashed border-white/10 bg-black px-6">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                {areaTag}
              </p>

              <h2 className="mt-3 text-2xl font-semibold">
                {title}
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-400">
                {placeholderText}
              </p>

              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex rounded-full border border-cyan-400/40 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
                >
                  {openProjectLabel}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProjectDemo;