import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const formEndpoint =
  "https://formspree.io/f/mojgggze";

function ContactCard({ Icon, title, text, href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
      className="group flex h-full items-center gap-4 rounded-xl border border-white/10 bg-black/50 px-4 py-3 transition hover:border-cyan-300/60 hover:bg-cyan-400/[0.07]"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300 transition group-hover:bg-cyan-300 group-hover:text-black">
        <Icon size={20} />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 truncate text-xs text-zinc-400">
          {text}
        </p>
      </div>

      <span
        aria-hidden="true"
        className="text-lg text-zinc-600 transition group-hover:translate-x-1 group-hover:text-cyan-300"
      >
        →
      </span>
    </motion.a>
  );
}

export default function ContactSection({
  language = "pt",
}) {
  const [status, setStatus] = useState("idle");

  const t =
    language === "pt"
      ? {
          tag: "Contato",
          title: "Vamos trabalhar juntos?",
          subtitle:
            "Entre em contato pelas redes ou envie uma mensagem diretamente pelo formulário.",
          email: "Envie um e-mail.",
          linkedin: "Meu perfil profissional.",
          github: "Veja meus projetos.",
          whatsapp: "Fale comigo.",
          formTag: "Mensagem direta",
          formTitle: "Conte-me sobre sua ideia.",
          name: "Nome",
          namePlaceholder: "Como você se chama?",
          emailLabel: "E-mail",
          emailPlaceholder: "seuemail@exemplo.com",
          subject: "Assunto",
          subjectPlaceholder:
            "Projeto, oportunidade ou contato",
          message: "Mensagem",
          messagePlaceholder:
            "Escreva sua mensagem aqui...",
          send: "Enviar mensagem",
          sending: "Enviando...",
          success:
            "Mensagem enviada com sucesso! Responderei assim que possível.",
          error:
            "Não foi possível enviar agora. Tente novamente ou utilize um dos contatos ao lado.",
        }
      : {
          tag: "Contact",
          title: "Let's work together?",
          subtitle:
            "Contact me through social media or send a message directly through the form.",
          email: "Send me an email.",
          linkedin: "My professional profile.",
          github: "See my projects.",
          whatsapp: "Talk to me.",
          formTag: "Direct message",
          formTitle: "Tell me about your idea.",
          name: "Name",
          namePlaceholder: "What is your name?",
          emailLabel: "Email",
          emailPlaceholder: "youremail@example.com",
          subject: "Subject",
          subjectPlaceholder:
            "Project, opportunity, or contact",
          message: "Message",
          messagePlaceholder:
            "Write your message here...",
          send: "Send message",
          sending: "Sending...",
          success:
            "Message sent successfully! I will reply as soon as possible.",
          error:
            "The message could not be sent. Try again or use one of the contact options.",
        };

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="flex min-h-screen snap-start items-center bg-black px-5 py-5 text-white sm:px-6 lg:px-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-4 text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-400 sm:text-xs">
            {t.tag}
          </p>

          <h2 className="mx-auto mt-2 max-w-md text-2xl font-bold leading-tight sm:text-3xl">
            {t.title}
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-5 text-zinc-400">
            {t.subtitle}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr] md:items-stretch">
          <aside className="flex h-full flex-col rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-4 sm:p-5">
            <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-400">
              {language === "pt"
                ? "Outros canais"
                : "Other channels"}
            </p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              {language === "pt"
                ? "Prefere uma conversa rápida?"
                : "Prefer a quick conversation?"}
            </h3>

            <p className="mt-2 text-xs leading-5 text-zinc-400">
              {language === "pt"
                ? "Escolha o canal mais conveniente para falar comigo."
                : "Choose the most convenient channel to contact me."}
            </p>

            <div className="mt-4 grid flex-1 grid-rows-4 gap-3">
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
          </aside>

          <div className="rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-4 sm:p-5">
            <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-400">
              {t.formTag}
            </p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              {t.formTitle}
            </h3>

            <form
              className="mt-3 grid gap-3"
              onSubmit={handleSubmit}
            >
              <input
                type="hidden"
                name="_subject"
                value="Nova mensagem pelo portfólio"
              />

              <div className="hidden">
                <label htmlFor="contact-company">
                  Company
                </label>

                <input
                  id="contact-company"
                  type="text"
                  name="_gotcha"
                  tabIndex="-1"
                  autoComplete="off"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5 text-xs text-zinc-300">
                  {t.name}

                  <input
                    type="text"
                    name="name"
                    required
                    minLength="2"
                    maxLength="80"
                    autoComplete="name"
                    placeholder={t.namePlaceholder}
                    className="rounded-xl border border-white/10 bg-black/70 px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400/70"
                  />
                </label>

                <label className="grid gap-1.5 text-xs text-zinc-300">
                  {t.emailLabel}

                  <input
                    type="email"
                    name="email"
                    required
                    maxLength="120"
                    autoComplete="email"
                    placeholder={t.emailPlaceholder}
                    className="rounded-xl border border-white/10 bg-black/70 px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400/70"
                  />
                </label>
              </div>

              <label className="grid gap-1.5 text-xs text-zinc-300">
                {t.subject}

                <input
                  type="text"
                  name="subject"
                  required
                  minLength="3"
                  maxLength="120"
                  placeholder={t.subjectPlaceholder}
                  className="rounded-xl border border-white/10 bg-black/70 px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400/70"
                />
              </label>

              <label className="grid gap-1.5 text-xs text-zinc-300">
                {t.message}

                <textarea
                  name="message"
                  required
                  minLength="10"
                  maxLength="2000"
                  rows="3"
                  placeholder={t.messagePlaceholder}
                  className="resize-none rounded-xl border border-white/10 bg-black/70 px-4 py-2.5 text-sm leading-6 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400/70"
                />
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-xl border border-cyan-300/40 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300 hover:text-black disabled:cursor-wait disabled:opacity-60"
              >
                {status === "sending"
                  ? t.sending
                  : t.send}
              </button>

              {status === "success" && (
                <p
                  role="status"
                  className="text-center text-sm text-emerald-400"
                >
                  {t.success}
                </p>
              )}

              {status === "error" && (
                <p
                  role="alert"
                  className="text-center text-sm text-red-400"
                >
                  {t.error}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-4 border-t border-white/10 pt-4 text-center text-xs text-zinc-500">
          © 2026 Enzo Teixeira Alves • Backend Developer
        </div>
      </div>
    </section>
  );
}