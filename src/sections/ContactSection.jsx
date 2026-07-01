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
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="group rounded-3xl border border-cyan-400/20 bg-white/[0.03] p-6 text-center transition hover:border-cyan-300 hover:bg-cyan-400/5 hover:shadow-[0_0_30px_rgba(34,211,238,.18)]"
    >
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-black">
        <Icon size={30} />
      </div>

      <h3 className="text-lg font-semibold text-white">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-zinc-400">
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
      className="flex min-h-screen snap-start items-center bg-black px-6 py-12 text-white"
    >
      <div className="mx-auto w-full max-w-7xl">

        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
            {t.tag}
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            {t.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            {t.subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

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

        <div className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-zinc-500">
          © 2026 Enzo Teixeira Alves • Backend Developer
        </div>

      </div>
    </section>
  );
}