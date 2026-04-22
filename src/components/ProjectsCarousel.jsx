import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCarouselCard from "./ProjectCarouselCard";

function ProjectsCarousel({ projects, language = "pt" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = projects.length;

  const getIndex = (index) => {
    if (index < 0) return total - 1;
    if (index >= total) return 0;
    return index;
  };

  const prevIndex = getIndex(currentIndex - 1);
  const nextIndex = getIndex(currentIndex + 1);

  const handlePrev = () => {
    setCurrentIndex((prev) => getIndex(prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => getIndex(prev + 1));
  };

  const handleDragEnd = (_, info) => {
    const offsetX = info.offset.x;
    const velocityX = info.velocity.x;

    if (offsetX < -70 || velocityX < -450) {
      handleNext();
    } else if (offsetX > 70 || velocityX > 450) {
      handlePrev();
    }
  };

  const dragLabel =
    language === "pt" ? "Arraste para explorar" : "Drag to explore";

  if (!projects || projects.length === 0) {
    return (
      <div className="text-center text-zinc-400">
        {language === "pt" ? "Nenhum projeto encontrado." : "No projects found."}
      </div>
    );
  }

  if (projects.length === 1) {
    return (
      <div className="flex justify-center">
        <ProjectCarouselCard
          project={projects[0]}
          position="center"
          language={language}
        />
      </div>
    );
  }

  return (
    <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center py-2">
      <div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-zinc-500 sm:text-xs">
        <span className="text-xs">↔</span>
        <span>{dragLabel}</span>
      </div>

      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.16}
        onDragEnd={handleDragEnd}
        className="group relative flex w-full cursor-grab items-center justify-center gap-3 px-2 active:cursor-grabbing sm:px-4 lg:gap-4 lg:px-8"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-gradient-to-r from-black to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-black to-transparent sm:w-16" />

        <motion.div
          key={`left-${projects[prevIndex].id}-${language}`}
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 0.86 }}
          transition={{ duration: 0.3 }}
          className="hidden md:block"
        >
          <ProjectCarouselCard
            project={projects[prevIndex]}
            position="side"
            language={language}
          />
        </motion.div>

        <motion.div
          key={`center-${projects[currentIndex].id}-${language}`}
          initial={{ opacity: 0.7, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1, x: [0, -4, 4, 0] }}
          transition={{ duration: 0.45 }}
          className="relative z-10"
        >
          <ProjectCarouselCard
            project={projects[currentIndex]}
            position="center"
            language={language}
          />
        </motion.div>

        <motion.div
          key={`right-${projects[nextIndex].id}-${language}`}
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 0.86 }}
          transition={{ duration: 0.3 }}
          className="hidden md:block"
        >
          <ProjectCarouselCard
            project={projects[nextIndex]}
            position="side"
            language={language}
          />
        </motion.div>
      </motion.div>

      <div className="mt-4 flex items-center gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-6 bg-cyan-400"
                : "w-2 bg-zinc-600 hover:bg-zinc-400"
            }`}
            aria-label={`Ir para o projeto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsCarousel;