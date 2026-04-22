import ProjectsCarousel from "../components/ProjectsCarousel";
import { projectsData } from "../data/projectsData";

function ProjectsSection({ t, language }) {
  return (
    <section
      id="projects"
      className="flex min-h-screen snap-start items-center bg-black px-4 py-4 text-white sm:px-6 sm:py-6 lg:px-10"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-center">
        <div className="mx-auto mb-4 max-w-2xl text-center sm:mb-5">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            {t.projectsTitle}
          </h2>

          <p className="mt-2 text-xs leading-5 text-zinc-400 sm:text-sm sm:leading-6">
            {t.projectsText}
          </p>
        </div>

        <ProjectsCarousel projects={projectsData} language={language} />
      </div>
    </section>
  );
}

export default ProjectsSection;