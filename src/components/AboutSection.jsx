import { motion } from "framer-motion";

function StatCard({ number, label }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-cyan-300/20 bg-white/[0.03] px-5 py-4 text-center shadow-[0_0_20px_rgba(56,189,248,0.08)] transition hover:border-cyan-200/70 hover:bg-cyan-300/5"
    >
      <p className="text-2xl font-bold text-cyan-200">{number}</p>
      <p className="mt-1 text-xs text-zinc-500">{label}</p>
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
      className="flex min-h-screen snap-start items-center bg-black px-8 py-12 text-white"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
            {about.tag}
          </p>

          <h2 className="mt-4 text-5xl font-bold leading-tight lg:text-6xl">
            {about.title}
          </h2>

          <p className="mt-8 text-lg leading-9 text-zinc-400">
            {about.text}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Java", "Spring Boot", "React", "Docker", "Git", "AWS"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-400/30 px-4 py-2 text-sm text-cyan-300"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          <div className="mt-10 grid grid-cols-4 gap-4">
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
          className="flex flex-1 items-end justify-center"
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