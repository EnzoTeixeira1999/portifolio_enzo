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
          ? "w-full max-w-[500px] scale-100 opacity-100"
          : "w-full max-w-[330px] scale-90 opacity-60"
      }`}
    >
      <div className="h-[170px] w-full">
        <img
          src={project.coverImage}
          alt={title}
          draggable={false}
          className="h-full w-full object-cover select-none pointer-events-none"
        />
      </div>

      <div className="p-4">
        <h3 className={`${isCenter ? "text-lg" : "text-base"} font-semibold`}>
          {title}
        </h3>

        <p
          className={`mt-2 leading-6 text-zinc-400 ${
            isCenter ? "text-sm" : "text-xs"
          }`}
        >
          {shortDescription}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-400/30 px-2 py-1 text-[10px] text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-2.5">
          <Link
            to={`/${language}/project/${slug}`}
            className="flex-1 text-center rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-4 py-2 text-xs font-semibold text-fuchsia-300 transition hover:bg-fuchsia-400 hover:text-black"
          >
            {learnMoreLabel}
          </Link>

          <Link
            to={`/${language}/demo/${slug}`}
            className="flex-1 text-center rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
          >
            {viewProjectLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProjectCarouselCard;