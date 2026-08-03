import { motion } from "framer-motion";
import {
  Server,
  Code2,
  Globe,
  Palette,
  PenTool,
  Wrench,
} from "lucide-react";

function ServiceCard({ Icon, title, text }) {
  return (
    <motion.article
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="group h-full rounded-2xl border border-cyan-300/20 bg-white/[0.03] p-4 shadow-[0_0_18px_rgba(56,189,248,0.06)] transition hover:border-cyan-200/70 hover:bg-cyan-300/5"
    >
      <div className="flex h-full items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 transition group-hover:bg-cyan-300/20">
          <Icon
            size={18}
            strokeWidth={1.8}
          />
        </div>

        <div className="min-w-0">
          <h3 className="text-sm font-semibold leading-5 text-white sm:text-base">
            {title}
          </h3>

          <p className="mt-1.5 text-xs leading-5 text-zinc-400 sm:text-[13px]">
            {text}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function ServicesSection({ language = "pt" }) {
  const content = {
    pt: {
      tag: "Serviços",
      title: "Soluções que posso entregar.",
      text:
        "Além do desenvolvimento, também atuo com design e criação visual, unindo tecnologia, organização e identidade profissional.",
      services: [
        {
          title: "Desenvolvimento Backend",
          text:
            "Criação de APIs, regras de negócio, integrações e estruturas escaláveis.",
          Icon: Server,
        },
        {
          title: "Desenvolvimento Frontend",
          text:
            "Interfaces modernas, responsivas e bem organizadas usando React e JavaScript.",
          Icon: Code2,
        },
        {
          title: "Landing Pages",
          text:
            "Páginas profissionais para apresentação de serviços, negócios, produtos e portfólios.",
          Icon: Globe,
        },
        {
          title: "Design Gráfico",
          text:
            "Criação de peças visuais, artes digitais, thumbnails, banners e materiais para redes sociais.",
          Icon: Palette,
        },
        {
          title: "Identidade Visual",
          text:
            "Construção de marca, direção visual, composição, cores, tipografia e presença digital.",
          Icon: PenTool,
        },
        {
          title: "Manutenção e Melhorias",
          text:
            "Ajustes, refatoração, melhorias visuais, organização de código e evolução de sistemas.",
          Icon: Wrench,
        },
      ],
    },
    en: {
      tag: "Services",
      title: "Solutions I can deliver.",
      text:
        "Besides development, I also work with design and visual creation, combining technology, organization, and professional identity.",
      services: [
        {
          title: "Backend Development",
          text:
            "Creation of APIs, business rules, integrations, and scalable structures.",
          Icon: Server,
        },
        {
          title: "Frontend Development",
          text:
            "Modern, responsive, and well-organized interfaces using React and JavaScript.",
          Icon: Code2,
        },
        {
          title: "Landing Pages",
          text:
            "Professional pages for services, businesses, products, and portfolios.",
          Icon: Globe,
        },
        {
          title: "Graphic Design",
          text:
            "Creation of digital artwork, thumbnails, banners, and social media materials.",
          Icon: Palette,
        },
        {
          title: "Visual Identity",
          text:
            "Brand construction, visual direction, composition, colors, typography, and digital presence.",
          Icon: PenTool,
        },
        {
          title: "Maintenance and Improvements",
          text:
            "Adjustments, refactoring, visual improvements, code organization, and system evolution.",
          Icon: Wrench,
        },
      ],
    },
  };

  const t = content[language] || content.pt;

  return (
    <section
      id="services"
      className="flex min-h-[100svh] items-center bg-black px-5 py-16 text-white md:h-[100svh] md:min-h-0 md:snap-start md:snap-always md:px-6 md:py-10 lg:px-10"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-400/70 sm:text-xs">
            {t.tag}
          </p>

          <h2 className="mx-auto mt-3 max-w-xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {t.title}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-zinc-400 lg:text-base lg:leading-7">
            {t.text}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {t.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: index * 0.05,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="h-full"
            >
              <ServiceCard
                Icon={service.Icon}
                title={service.title}
                text={service.text}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;