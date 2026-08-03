import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import usePageSeo from "../hooks/usePageSeo";

function ProjectDetails() {
  const { lang, slug } = useParams();
  const language = lang === "en" ? "en" : "pt";
    const getText = (value) =>
    typeof value === "object" && !Array.isArray(value)
      ? value?.[language]
      : value;

  const project = projectsData.find((item) => {
    const projectSlugs =
      typeof item.slug === "object" ? Object.values(item.slug) : [item.slug];

    return projectSlugs.includes(slug);
  });

    const seoTitle = project
    ? `${getText(project.title)} | Enzo Teixeira`
    : language === "en"
      ? "Project not found | Enzo Teixeira"
      : "Projeto não encontrado | Enzo Teixeira";

  const seoDescription = project
    ? getText(project.shortDescription)
    : language === "en"
      ? "The requested project was not found."
      : "O projeto solicitado não foi encontrado.";

  const canonicalSlug = project
    ? getText(project.slug)
    : slug;

  usePageSeo({
    title: seoTitle,
    description: seoDescription,
    language:
      language === "en"
        ? "en"
        : "pt-BR",
    path: `/${language}/project/${canonicalSlug}`,
    robots: project
      ? "index, follow, max-image-preview:large"
      : "noindex, nofollow",
  });

  if (!project) {
    return (
      <main className="h-screen overflow-y-auto bg-black px-4 py-10 text-white sm:px-6 lg:px-10">
        <div className="mx-auto flex min-h-full max-w-3xl items-center justify-center text-center">
          <div>
            <h1 className="text-3xl font-bold">
              {language === "en" ? "Project not found" : "Projeto não encontrado"}
            </h1>
            <Link
              to={`/${language}`}
              className="mt-6 inline-block rounded-full border border-cyan-400/30 px-5 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
            >
              {language === "en" ? "Back to home" : "Voltar para a home"}
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const title = getText(project.title);
  const purpose = getText(project.details?.purpose);
  const usability = getText(project.details?.usability);
  const curiosities = getText(project.details?.curiosities) || [];
  const coverTagline = getText(project.coverTagline);
  const coverInitials =
    project.coverInitials ?? project.coverBrand?.slice(0, 2) ?? "ES";
  const liveUrl = getText(project.liveUrl);

  const backLabel = language === "pt" ? "← Voltar" : "← Back";
  const developmentLabel =
    language === "pt" ? "Em desenvolvimento" : "In development";
  const demoLabel =
    language === "pt"
      ? "Ver projeto"
      : project.liveLanguage
        ? `View project (${project.liveLanguage})`
        : "View project";
  const heroTag =
    project.status === "PUBLISHED"
      ? language === "pt" ? "Projeto em destaque" : "Featured project"
      : language === "pt" ? "Enterprise Suite — Em desenvolvimento" : "Enterprise Suite — In development";
  const extrasTag = language === "pt" ? "Planejamento" : "Planning";
  const curiositiesTitle =
    project.status === "PUBLISHED"
      ? language === "pt" ? "Curiosidades do projeto" : "Project curiosities"
      : language === "pt" ? "Diferenciais planejados" : "Planned highlights";
  const structureTag = language === "pt" ? "Estrutura" : "Structure";
  const structureTitle =
    language === "pt"
      ? "Detalhes visuais e funcionais"
      : "Visual and functional details";
  const codeTag = language === "pt" ? "Código" : "Code";
  const codeTitle =
    language === "pt" ? "Trechos do projeto" : "Project snippets";
  const blockLabel = language === "pt" ? "Bloco" : "Block";

  return (
    <main className="h-screen overflow-y-auto bg-black px-4 py-10 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl pb-16">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            to={`/${language}#projects`}
            className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
          >
            {backLabel}
          </Link>

          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-cyan-400/30 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
            >
              {demoLabel}
            </a>
          ) : (
            <span className="inline-flex cursor-not-allowed items-center rounded-full border border-amber-300/20 bg-amber-300/5 px-4 py-2 text-sm text-amber-200/70">
              {developmentLabel}
            </span>
          )}
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
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-cyan-400/30 px-3 py-1 text-[11px] text-cyan-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {project.coverImage ? (
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_0_30px_rgba(0,0,0,0.25)]">
              <img
                src={project.coverImage}
                alt={title}
                style={{ objectPosition: project.coverPosition ?? "center" }}
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="relative min-h-[330px] overflow-hidden rounded-3xl border border-cyan-300/15 bg-[#04131f] shadow-[0_0_35px_rgba(34,211,238,0.08)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_15%_90%,rgba(217,70,239,0.12),transparent_34%),linear-gradient(135deg,#02070c_0%,#061d2b_58%,#07121b_100%)]" />
              <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-cyan-300/10" />
              <div className="absolute -bottom-28 -left-10 h-64 w-64 rounded-full border border-fuchsia-300/10" />

              <div className="relative flex min-h-[330px] flex-col items-center justify-center px-8 text-center">
                <span className="rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-200">
                  {developmentLabel}
                </span>

                <div className="mt-7 flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/40 bg-cyan-400/10 text-2xl font-bold text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.14)]">
                  {coverInitials}
                </div>

                <strong className="mt-5 text-3xl font-bold tracking-tight text-white">
                  {project.coverBrand ?? title}
                </strong>

                {coverTagline && (
                  <span className="mt-2 text-sm text-cyan-200/75">
                    {coverTagline}
                  </span>
                )}

                <small className="mt-6 uppercase tracking-[0.28em] text-zinc-600">
                  Enterprise Suite
                </small>
              </div>
            </div>
          )}
        </section>

        {curiosities.length > 0 && (
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
                  key={`${item}-${index}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_20px_rgba(0,0,0,0.18)]"
                >
                  <div className="mb-3 h-1 w-10 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400" />
                  <p className="text-sm leading-6 text-zinc-300">{item}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {project.details?.sections?.length > 0 && (
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
              const sectionTitle = getText(section.title);
              const sectionText = getText(section.text);

              return (
                <div
                  key={`${sectionTitle}-${index}`}
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

        {project.details?.codeSnippets?.length > 0 && (
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
                const codeTitleText = getText(item.title);

                return (
                  <div
                    key={`${codeTitleText}-${index}`}
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