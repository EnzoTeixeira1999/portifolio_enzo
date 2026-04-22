import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

function ProjectDetails() {
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
          <h1 className="text-3xl font-bold">Projeto não encontrado</h1>
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

  const purpose =
    typeof project.details?.purpose === "object" &&
    !Array.isArray(project.details?.purpose)
      ? project.details.purpose[language]
      : project.details?.purpose;

  const usability =
    typeof project.details?.usability === "object" &&
    !Array.isArray(project.details?.usability)
      ? project.details.usability[language]
      : project.details?.usability;

  const curiosities =
    typeof project.details?.curiosities === "object" &&
    !Array.isArray(project.details?.curiosities)
      ? project.details.curiosities[language]
      : project.details?.curiosities || [];

  const backLabel = language === "pt" ? "← Voltar" : "← Back";
  const demoLabel = language === "pt" ? "Ver projeto" : "View project";
  const heroTag = language === "pt" ? "Projeto em destaque" : "Featured project";
  const extrasTag = language === "pt" ? "Extras" : "Extras";
  const curiositiesTitle =
    language === "pt" ? "Curiosidades do projeto" : "Project curiosities";
  const structureTag = language === "pt" ? "Estrutura" : "Structure";
  const structureTitle =
    language === "pt"
      ? "Detalhes visuais e funcionais"
      : "Visual and functional details";
  const codeTag = language === "pt" ? "Código" : "Code";
  const codeTitle =
    language === "pt" ? "Trechos do projeto" : "Project snippets";
  const blockLabel = language === "pt" ? "Bloco" : "Block";
  const notFoundTitle =
    language === "pt" ? "Projeto não encontrado" : "Project not found";
  const homeLabel =
    language === "pt" ? "Voltar para a home" : "Back to home";

  const projectSlug =
    typeof project.slug === "object" ? project.slug[language] : project.slug;

  return (
    <main className="min-h-screen bg-black px-4 py-10 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            to={`/${language}`}
            className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
          >
            {backLabel}
          </Link>

          <Link
            to={`/${language}/demo/${projectSlug}`}
            className="inline-flex items-center rounded-full border border-cyan-400/30 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
          >
            {demoLabel}
          </Link>
        </div>

        <section className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500 sm:text-xs">
              {heroTag}
            </p>

            <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {title}
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
              {purpose}
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
              {usability}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-400/30 px-3 py-1 text-[11px] text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_0_30px_rgba(0,0,0,0.25)]">
            <img
              src={project.coverImage}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {curiosities?.length > 0 && (
          <section className="mt-16">
            <div className="mb-6">
              <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500 sm:text-xs">
                {extrasTag}
              </p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                {curiositiesTitle}
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {curiosities.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_20px_rgba(0,0,0,0.18)]"
                >
                  <p className="text-sm leading-6 text-zinc-300">{item}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {project.details.sections?.length > 0 && (
          <section className="mt-16 space-y-14">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500 sm:text-xs">
                {structureTag}
              </p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                {structureTitle}
              </h2>
            </div>

            {project.details.sections.map((section, index) => {
              const isImageRight = section.type === "image-right";

              const sectionTitle =
                typeof section.title === "object"
                  ? section.title[language]
                  : section.title;

              const sectionText =
                typeof section.text === "object"
                  ? section.text[language]
                  : section.text;

              return (
                <div
                  key={index}
                  className="grid gap-8 lg:grid-cols-2 lg:items-center"
                >
                  <div className={isImageRight ? "lg:order-2" : ""}>
                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_0_25px_rgba(0,0,0,0.2)]">
                      <img
                        src={section.image}
                        alt={sectionTitle}
                        className="w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className={isImageRight ? "lg:order-1" : ""}>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500 sm:text-xs">
                      {blockLabel} {index + 1}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold">
                      {sectionTitle}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
                      {sectionText}
                    </p>
                  </div>
                </div>
              );
            })}
          </section>
        )}

        {project.details.codeSnippets?.length > 0 && (
          <section className="mt-16">
            <div className="mb-6">
              <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500 sm:text-xs">
                {codeTag}
              </p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                {codeTitle}
              </h2>
            </div>

            <div className="space-y-6">
              {project.details.codeSnippets.map((item, index) => {
                const codeTitleText =
                  typeof item.title === "object"
                    ? item.title[language]
                    : item.title;

                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-[0_0_25px_rgba(0,0,0,0.25)]"
                  >
                    <div className="border-b border-white/10 px-4 py-3 text-sm text-zinc-300">
                      {codeTitleText}
                    </div>

                    <pre className="overflow-x-auto p-4 text-xs leading-6 text-cyan-300 sm:text-sm">
                      <code>{item.code}</code>
                    </pre>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default ProjectDetails;