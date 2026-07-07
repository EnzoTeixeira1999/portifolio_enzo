import { motion } from "framer-motion";
import {
  Code2,
  Braces,
  FileCode2,
  Hash,
  Palette,
  Database,
  Boxes,
  Cylinder,
  Server,
  Zap,
  Container,
  GitBranch,
  Terminal,
  Settings,
  Package,
  Cloud,
} from "lucide-react";

function SkillCard({ Icon, title, subtitle }) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.015 }}
      transition={{ duration: 0.2 }}
      className="group rounded-xl border border-cyan-300/20 bg-white/[0.03] p-2 shadow-[0_0_14px_rgba(56,189,248,0.05)] transition hover:border-cyan-200/70 hover:bg-cyan-300/5 sm:rounded-2xl sm:p-2.5"
    >
      <div className="flex items-center gap-2.5 sm:gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 sm:h-9 sm:w-9 sm:rounded-xl">
          <Icon size={16} />
        </div>

        <div className="min-w-0">
          <h4 className="truncate text-xs font-semibold text-white sm:text-sm">
            {title}
          </h4>
          <p className="mt-0.5 truncate text-[9px] text-zinc-500 sm:text-[10px]">
            {subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function SkillsSection({ language = "pt" }) {
  const content = {
    pt: {
      tag: "Habilidades",
      title: "Tecnologias e Ferramentas",
      text:
        "Tecnologias, bancos de dados e ferramentas que utilizo para desenvolver aplicações modernas, escaláveis e bem estruturadas.",
      backend: "Backend",
      frontend: "Frontend",
      database: "Banco de Dados",
      tools: "Ferramentas",
    },
    en: {
      tag: "Skills",
      title: "Technologies & Tools",
      text:
        "Technologies, databases and tools I use to build modern, scalable and well-structured applications.",
      backend: "Backend",
      frontend: "Frontend",
      database: "Database",
      tools: "Tools",
    },
  };

  const t = content[language] || content.pt;

  const sections = [
    {
      title: t.backend,
      items: [
        { title: "Java", subtitle: "Main backend language", Icon: Code2 },
        { title: "Python", subtitle: "Automation / Backend", Icon: Braces },
        { title: "C#", subtitle: "Backend / Enterprise", Icon: Hash },
        { title: "JavaScript", subtitle: "Backend / Node.js", Icon: FileCode2 },
      ],
    },
    {
      title: t.frontend,
      items: [
        { title: "HTML", subtitle: "Web structure", Icon: Code2 },
        { title: "CSS", subtitle: "Interface styling", Icon: Palette },
        { title: "JavaScript", subtitle: "Web language", Icon: FileCode2 },
        { title: "TypeScript", subtitle: "Typed JavaScript", Icon: Braces },
      ],
    },
    {
      title: t.database,
      items: [
        { title: "PostgreSQL", subtitle: "Relational DB", Icon: Database },
        { title: "MongoDB", subtitle: "NoSQL", Icon: Boxes },
        { title: "Oracle", subtitle: "Enterprise DB", Icon: Cylinder },
        { title: "MySQL", subtitle: "Relational DB", Icon: Server },
        { title: "SQL Server", subtitle: "Microsoft DB", Icon: Database },
        { title: "Redis", subtitle: "Cache / Performance", Icon: Zap },
      ],
    },
    {
      title: t.tools,
      items: [
        { title: "Docker", subtitle: "Containers", Icon: Container },
        { title: "Git", subtitle: "Version Control", Icon: GitBranch },
        { title: "Linux", subtitle: "Environment", Icon: Terminal },
        { title: "Jenkins", subtitle: "CI/CD", Icon: Settings },
        { title: "Maven", subtitle: "Build Tool", Icon: Package },
        { title: "AWS", subtitle: "Cloud", Icon: Cloud },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-black px-4 pt-10 pb-14 text-white md:flex md:min-h-screen md:snap-start md:items-center md:px-6 md:py-16 lg:px-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-400 sm:text-xs">
            {t.tag}
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {t.title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
            {t.text}
          </p>
        </div>

        <div className="grid gap-3 md:gap-4 lg:grid-cols-2">
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: sectionIndex * 0.06 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-3 shadow-[0_0_20px_rgba(0,0,0,0.16)] md:rounded-3xl md:p-3.5"
            >
              <h3 className="mb-2.5 text-sm font-semibold text-cyan-200 md:mb-3 md:text-base">
                {section.title}
              </h3>

              <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                {section.items.map((item) => (
                  <SkillCard
                    key={item.title}
                    Icon={item.Icon}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;