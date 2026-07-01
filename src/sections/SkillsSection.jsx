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
      className="group rounded-2xl border border-cyan-300/20 bg-white/[0.03] p-2.5 shadow-[0_0_18px_rgba(56,189,248,0.06)] transition hover:border-cyan-200/70 hover:bg-cyan-300/5"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
          <Icon size={20} />
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">{title}</h4>
          <p className="mt-0.5 text-[10px] text-zinc-500">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
}

function SkillsSection({ t, language = "pt" }) {
  const labels = {
    pt: {
      backend: "Backend",
      frontend: "Frontend",
      database: "Banco de Dados",
      tools: "Ferramentas",
    },
    en: {
      backend: "Backend",
      frontend: "Frontend",
      database: "Database",
      tools: "Tools",
    },
  };

  const text = labels[language] || labels.pt;

  const sections = [
    {
      title: text.backend,
      items: [
        { title: "Java", subtitle: "Main backend language", Icon: Code2 },
        { title: "Python", subtitle: "Automation / Backend", Icon: Braces },
        { title: "C#", subtitle: "Backend / Enterprise", Icon: Hash },
        { title: "JavaScript", subtitle: "Backend / Node.js", Icon: FileCode2 },
      ],
    },
    {
      title: text.frontend,
      items: [
        { title: "HTML", subtitle: "Web structure", Icon: Code2 },
        { title: "CSS", subtitle: "Interface styling", Icon: Palette },
        { title: "JavaScript", subtitle: "Web language", Icon: FileCode2 },
        { title: "TypeScript", subtitle: "Typed JavaScript", Icon: Braces },
      ],
    },
    {
      title: text.database,
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
      title: text.tools,
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
      className="flex min-h-screen snap-start items-center bg-black px-6 pt-20 pb-6 text-white lg:px-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto -mt-6 mb-5 max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">{t.skills}</h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: sectionIndex * 0.06 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/[0.025] p-3.5 shadow-[0_0_24px_rgba(0,0,0,0.18)]"
            >
              <h3 className="mb-3 text-base font-semibold text-cyan-200">
                {section.title}
              </h3>

              <div className="grid gap-2.5 sm:grid-cols-2">
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