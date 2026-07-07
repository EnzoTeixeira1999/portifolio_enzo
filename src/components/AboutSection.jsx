import { motion } from "framer-motion";

function StatCard({ number, label }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-cyan-300/20 bg-white/[0.03] px-3 py-3 text-center shadow-[0_0_20px_rgba(56,189,248,0.08)] transition hover:border-cyan-200/70 hover:bg-cyan-300/5 sm:px-5 sm:py-4"
    >
      <p className="text-xl font-bold text-cyan-200 sm:text-2xl">{number}</p>
      <p className="mt-1 text-[10px] leading-4 text-zinc-500 sm:text-xs">
        {label}
      </p>
    </motion.div>
  );
}

function AboutSection({ language = "pt" }) {
  const content = {
    pt: {
      tag: "Sobre mim",
      title: "Entre código, design e soluções reais.",
      text:
        "Sou desenvolvedor com foco em backend, especializado em Java e arquitetura de sistemas. Minha experiência une desenvolvimento, design e visão de negócio para criar aplicações modernas, escaláveis e intuitivas.",
      stats: [
        { number: "2+", label: "anos de experiência" },
        { number: "15+", label: "tecnologias" },
        { number: "3", label: "projetos relevantes" },
        { number: "8+", label: "ferramentas" },
      ],
    },
    en: {
      tag: "About me",
      title: "Between code, design and real solutions.",
      text:
        "Backend developer focused on Java and scalable architectures. I combine software development, design, and business thinking to build modern, intuitive, and scalable applications.",
      stats: [
        { number: "2+", label: "years of experience" },
        { number: "15+", label: "technologies" },
        { number: "3", label: "featured projects" },
        { number: "8+", label: "tools" },
      ],
    },
  };

  const about = content[language] || content.pt;

  return (
    <section
      id="about"
      className="flex min-h-screen snap-start items-center bg-black px-5 py-16 text-white sm:px-8 sm:py-12"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-7 lg:flex-row lg:justify-between lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="w-full max-w-2xl text-center lg:text-left"
        >
          <div className="mb-5 flex justify-center lg:hidden">
            <img
              src="/perfil.png"
              alt="Enzo"
              draggable={false}
              className="h-28 w-28 rounded-full object-cover object-top shadow-[0_0_30px_rgba(34,211,238,0.18)]"
            />
          </div>

          <p className="text-[10px] uppercase tracking-[0.32em] text-cyan-400 sm:text-xs">
            {about.tag}
          </p>

          <h2 className="mx-auto mt-3 max-w-[330px] text-4xl font-bold leading-tight sm:max-w-none sm:text-5xl lg:mx-0 lg:text-6xl">
            {about.title}
          </h2>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-zinc-400 sm:max-w-2xl sm:text-base lg:mx-0 lg:text-lg lg:leading-9">
            {about.text}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
            {["Java", "Spring Boot", "React", "Docker", "Git", "AWS"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-400/30 px-3 py-1.5 text-xs text-cyan-300 sm:px-4 sm:py-2 sm:text-sm"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          <div className="mx-auto mt-7 grid max-w-md grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4 sm:gap-4 lg:mx-0 lg:max-w-none">
            {about.stats.map((item) => (
              <StatCard
                key={item.label}
                number={item.number}
                label={item.label}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="hidden flex-1 items-end justify-center lg:flex"
        >
          <img
            src="/perfil.png"
            alt="Enzo"
            draggable={false}
            className="max-h-[700px] w-auto select-none object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.45)]"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;