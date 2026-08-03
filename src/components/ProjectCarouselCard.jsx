import { Link } from "react-router-dom";

function ProjectCarouselCard({ project, position, language = "pt" }) {
  const isCenter = position === "center";

  const getText = (value) =>
    typeof value === "object" ? value?.[language] : value;

  const title = getText(project.title);
  const shortDescription = getText(project.shortDescription);
  const slug = getText(project.slug);
  const liveUrl = getText(project.liveUrl);
  const coverTagline = getText(project.coverTagline);
  const coverInitials = project.coverInitials ?? project.coverBrand?.slice(0, 2) ?? "ES";

  const learnMoreLabel = language === "pt" ? "Saiba mais" : "Learn more";
  const developmentLabel = language === "pt" ? "Em desenvolvimento" : "In development";
  const viewProjectLabel =
    language === "pt"
      ? "Ver projeto"
      : project.liveLanguage
        ? `View project (${project.liveLanguage})`
        : "View project";

  return (
    <article
      className={`overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] text-white shadow-[0_0_30px_rgba(0,0,0,0.25)] transition-all duration-500 ${
        isCenter
          ? "w-full max-w-[500px] scale-100 opacity-100"
          : "w-full max-w-[330px] scale-90 opacity-60"
      }`}
    >
      <div className="relative h-[170px] w-full overflow-hidden bg-[#04131f]">
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={title}
            draggable={false}
            style={{ objectPosition: project.coverPosition ?? "center" }}
            className={`h-full w-full select-none object-cover pointer-events-none ${
              project.coverBrand ? "scale-110 opacity-50" : ""
            }`}
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(34,211,238,0.16),transparent_34%),linear-gradient(135deg,#02070c_0%,#061d2b_58%,#07121b_100%)]" />
            <div className="absolute -right-8 -top-16 h-44 w-44 rounded-full border border-cyan-300/10" />
            <div className="absolute -bottom-24 left-8 h-48 w-48 rounded-full border border-fuchsia-300/10" />
          </>
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-[#051b29]/85 to-cyan-950/30" />

        <div className="absolute right-3 top-3 rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-amber-200">
          {project.status === "PUBLISHED"
            ? language === "pt" ? "Publicado" : "Published"
            : developmentLabel}
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-6 pt-5">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-400/10 text-lg font-bold text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.12)]">
              {coverInitials}
            </div>

            <div>
              <strong className={`block font-bold tracking-tight text-white ${isCenter ? "text-3xl" : "text-xl"}`}>
                {project.coverBrand ?? title}
              </strong>

              {coverTagline && (
                <span className="mt-1 block text-xs text-cyan-200/80">
                  {coverTagline}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className={`font-semibold ${isCenter ? "text-lg" : "text-base"}`}>
          {title}
        </h3>

        <p className={`mt-2 leading-6 text-zinc-400 ${isCenter ? "text-sm" : "text-xs"}`}>
          {shortDescription}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-cyan-400/30 px-2 py-1 text-[10px] text-cyan-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-2.5">
          <Link
            to={`/${language}/project/${slug}`}
            className="flex-1 rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-4 py-2 text-center text-xs font-semibold text-fuchsia-300 transition hover:bg-fuchsia-400 hover:text-black"
          >
            {learnMoreLabel}
          </Link>

          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-center text-xs font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
            >
              {viewProjectLabel}
            </a>
          ) : (
            <span className="flex flex-1 cursor-not-allowed items-center justify-center rounded-full border border-white/10 px-4 py-2 text-center text-xs font-semibold text-zinc-500">
              {developmentLabel}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCarouselCard;