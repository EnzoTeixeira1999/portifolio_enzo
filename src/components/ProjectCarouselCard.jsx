import { Link } from "react-router-dom";

function ProjectCarouselCard({ project, position, language = "pt" }) {
  const isCenter = position === "center";

  const title =
    typeof project.title === "object"
      ? project.title[language]
      : project.title;

  const shortDescription =
    typeof project.shortDescription === "object"
      ? project.shortDescription[language]
      : project.shortDescription;

  const slug =
    typeof project.slug === "object"
      ? project.slug[language]
      : project.slug;

  const learnMoreLabel = language === "pt" ? "Saiba mais" : "Learn more";
  const viewProjectLabel = language === "pt" ? "Ver projeto" : "View project";

  return (
    <article
      className={`overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] text-white shadow-[0_0_30px_rgba(0,0,0,0.25)] transition-all duration-500 ${
        isCenter
          ? "w-[320px] sm:w-[360px] lg:w-[380px] scale-100 opacity-100"
          : "w-[220px] lg:w-[250px] scale-90 opacity-45"
      }`}
    >
      <div className="relative">
        <img
          src={project.coverImage}
          alt={title}
          className={`w-full object-cover ${
            isCenter ? "h-40 sm:h-44 lg:h-48" : "h-28 lg:h-32"
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      <div className="p-4 sm:p-4">
        <h3
          className={`font-semibold ${
            isCenter ? "text-base sm:text-lg" : "text-sm"
          }`}
        >
          {title}
        </h3>

        <p
          className={`mt-2 leading-5 text-zinc-400 ${
            isCenter ? "text-xs sm:text-sm" : "text-[11px]"
          }`}
        >
          {shortDescription}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-400/30 px-2 py-0.5 text-[9px] text-cyan-300 sm:text-[10px]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <Link
            to={`/${language}/project/${slug}`}
            className="rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-4 py-2 text-[11px] font-semibold text-fuchsia-300 transition hover:bg-fuchsia-400 hover:text-black sm:px-5 sm:text-xs"
          >
            {learnMoreLabel}
          </Link>

          <Link
            to={`/${language}/demo/${slug}`}
            className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-[11px] font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black sm:px-5 sm:text-xs"
          >
            {viewProjectLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProjectCarouselCard;