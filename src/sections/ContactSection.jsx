import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

function ContactCard({ Icon, title, text, href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -5, scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="group rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-4 transition hover:border-cyan-300 hover:bg-cyan-400/5 hover:shadow-[0_0_30px_rgba(34,211,238,.18)] sm:rounded-3xl sm:p-6"
    >
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-black sm:mb-5 sm:h-16 sm:w-16 sm:rounded-2xl">
        <Icon size={24} />
      </div>

      <h3 className="mt-3 text-center text-sm font-semibold text-white sm:text-lg">
        {title}
      </h3>

      {/* Apenas desktop */}
      <p className="mt-2 hidden w-full text-center text-sm leading-6 text-zinc-400 sm:block">
       {text}
     </p>
    </motion.a>
  );
}

export default function ContactSection({ language = "pt" }) {
  const t =
    language === "pt"
      ? {
          tag: "Contato",
          title: "Vamos trabalhar juntos?",
          subtitle:
            "Se você procura alguém comprometido para desenvolver soluções modernas, será um prazer conversar.",
          email: "Envie um e-mail.",
          linkedin: "Meu perfil profissional.",
          github: "Veja meus projetos.",
          whatsapp: "Fale comigo.",
        }
      : {
          tag: "Contact",
          title: "Let's work together?",
          subtitle:
            "If you're looking for someone committed to building modern solutions, I'd love to talk.",
          email: "Send me an email.",
          linkedin: "My professional profile.",
          github: "See my projects.",
          whatsapp: "Talk to me.",
        };

  return (
    <section
      id="contact"
      className="flex min-h-screen snap-start items-center bg-black px-5 py-14 text-white sm:px-6 sm:py-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 text-center sm:mb-14">
          <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-400 sm:text-xs">
            {t.tag}
          </p>

          <h2 className="mx-auto mt-3 max-w-md text-3xl font-bold leading-tight sm:mt-4 sm:text-5xl">
            {t.title}
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-zinc-400 sm:mt-5 sm:max-w-2xl sm:text-base">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
          <ContactCard
            Icon={FaEnvelope}
            title="Email"
            text={t.email}
            href="mailto:enzoteixeira2022@gmail.com"
          />

          <ContactCard
            Icon={FaLinkedin}
            title="LinkedIn"
            text={t.linkedin}
            href="https://www.linkedin.com/in/enzo-teixeira-alves-b80836215/"
          />

          <ContactCard
            Icon={FaGithub}
            title="GitHub"
            text={t.github}
            href="https://github.com/EnzoTeixeira1999"
          />

          <ContactCard
            Icon={FaWhatsapp}
            title="WhatsApp"
            text={t.whatsapp}
            href="https://wa.me/5548991206698"
          />
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 text-center text-xs text-zinc-500 sm:mt-16 sm:pt-6 sm:text-sm">
          © 2026 Enzo Teixeira Alves • Backend Developer
        </div>
      </div>
    </section>
  );
}