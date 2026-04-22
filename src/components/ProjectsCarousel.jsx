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

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -50 || info.velocity.x < -300) {
      setCurrentIndex((prev) => getIndex(prev + 1));
    } else if (info.offset.x > 50 || info.velocity.x > 300) {
      setCurrentIndex((prev) => getIndex(prev - 1));
    }
  };

  const dragLabel =
    language === "pt" ? "Arraste para explorar" : "Drag to explore";

  return (
    <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center py-2">
      <div className="mb-3 text-[10px] uppercase tracking-[0.18em] text-zinc-500 sm:text-xs">
        ↔ {dragLabel}
      </div>

      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        className="flex w-full items-center justify-center gap-4 px-2 cursor-grab active:cursor-grabbing sm:gap-5"
      >
        {/* ESQUERDA */}
        <div className="hidden md:flex justify-end flex-1">
          <ProjectCarouselCard
            project={projects[prevIndex]}
            position="side"
            language={language}
          />
        </div>

        {/* CENTRO */}
        <div className="flex justify-center flex-[1.35]">
          <ProjectCarouselCard
            project={projects[currentIndex]}
            position="center"
            language={language}
          />
        </div>

        {/* DIREITA */}
        <div className="hidden md:flex justify-start flex-1">
          <ProjectCarouselCard
            project={projects[nextIndex]}
            position="side"
            language={language}
          />
        </div>
      </motion.div>

      {/* DOTS */}
      <div className="mt-4 flex justify-center">
        <div className="flex gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-7 bg-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.7)]"
                  : "w-2 bg-zinc-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsCarousel;