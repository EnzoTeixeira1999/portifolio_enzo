import React, { useEffect, useRef, useState } from "react";
import { supabase } from "../lib/supabase";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../sections/ProjectsSection";
import { useNavigate, useParams } from "react-router-dom";

const navItems = {
  pt: [
    { label: "Início", href: "#home" },
    { label: "Projetos", href: "#projects" },
    { label: "Artes", href: "#arts" },
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Habilidades", href: "#skills" },
    { label: "Contato", href: "#contact" },
  ],
  en: [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Arts", href: "#arts" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
};

const translations = {
  pt: {
    hello: "Hello, It's Me",
    intro:
      "Desenvolvedor com foco em backend, apaixonado por criar soluções modernas, APIs bem estruturadas e interfaces funcionais. Também atuo com design e gosto de unir visual limpo com tecnologia bem organizada.",
    downloadCv: "Baixar CV",
    rolePrefix: "E eu sou um",
    projectsTag: "Projetos",
    projectsTitle: "Projetos em destaque",
    projectsText:
      "Alguns projetos que representam minha base técnica e minha forma de construir soluções na prática.",
    artsTag: "Artes",
    artsTitle: "Artes em destaque",
    artsText:
      "Trabalhos visuais, peças gráficas e criações que representam meu lado criativo.",
    about: "Sobre",
    services: "Serviços",
    skills: "Habilidades",
    contact: "Contato",
    aboutText:
      "Seção para contar sua trajetória, forma de trabalho, visão profissional e o que te diferencia como desenvolvedor.",
    servicesText:
      "Área opcional para apresentar serviços que você pode oferecer, se quiser transformar o site também em vitrine profissional.",
    skillsText:
      "Aqui vamos colocar sua experiência, stacks, ferramentas, linguagens e diferenciais profissionais em um layout mais forte e visual.",
    contactText:
      "Seção final para links, formulário, email, redes sociais e meios de contato profissional.",
    loadingArts: "Carregando artes...",
    noArts: "Nenhuma arte cadastrada ainda.",
    noImage: "Sem imagem",
  },
  en: {
    hello: "Hello, It's Me",
    intro:
      "Backend-focused developer passionate about building modern solutions, well-structured APIs, and functional interfaces. I also work with design and enjoy combining clean visuals with well-organized technology.",
    downloadCv: "Download CV",
    rolePrefix: "And I'm a",
    projectsTag: "Projects",
    projectsTitle: "Featured projects",
    projectsText:
      "Some projects that represent my technical foundation and how I build practical solutions.",
    artsTag: "Arts",
    artsTitle: "Featured arts",
    artsText:
      "Visual works, graphic pieces, and creations that represent my creative side.",
    about: "About",
    services: "Services",
    skills: "Skills",
    contact: "Contact",
    aboutText:
      "A section to tell my story, my way of working, my professional vision, and what makes me different as a developer.",
    servicesText:
      "Optional area to present services I can offer if I want to turn the site into a professional showcase too.",
    skillsText:
      "Here I will present my experience, stacks, tools, languages, and professional strengths in a stronger visual layout.",
    contactText:
      "Final section for links, form, email, social media, and professional contact channels.",
    loadingArts: "Loading arts...",
    noArts: "No arts registered yet.",
    noImage: "No image",
  },
};

function FloatingSectionNav({ visible, language }) {
  return (
    <div
      className={`fixed left-1/2 top-6 z-50 -translate-x-1/2 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-x-1/2 -translate-y-16 opacity-0"
      }`}
    >
      <div className="rounded-full border border-white/10 bg-black/70 px-6 py-3 backdrop-blur-xl">
        <div className="flex items-center justify-center gap-6 overflow-x-auto text-sm text-zinc-300">
          {navItems[language].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function SocialLinks() {
  const baseClass =
    "rounded-full border border-cyan-400/35 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black";

  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      <a href="https://twitter.com" target="_blank" rel="noreferrer" className={baseClass}>
        Twitter
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer" className={baseClass}>
        Instagram
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={baseClass}>
        LinkedIn
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer" className={baseClass}>
        GitHub
      </a>
    </div>
  );
}

function SectionArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group inline-flex flex-col items-center text-2xl text-zinc-400 transition hover:text-white"
      aria-label="Descer para a próxima seção"
    >
      <span className="transition group-hover:translate-y-0.5">⌄</span>
      <span className="-mt-3 transition group-hover:translate-y-0.5">⌄</span>
    </button>
  );
}

function LanguageSwitch({ language, onChangeLanguage }) {
  const baseClass =
    "relative overflow-hidden rounded-full border px-5 py-2 text-sm font-semibold transition";

  return (
    <div className="absolute left-0 top-[-60px] flex items-center gap-3">
      <button
        onClick={() => onChangeLanguage("pt")}
        className={`${baseClass} ${
          language === "pt"
            ? "text-white border-transparent shadow-[0_0_12px_rgba(34,197,94,0.25),0_0_18px_rgba(234,179,8,0.2)]"
            : "border-white/10 text-zinc-300 hover:bg-white/5"
        }`}
      >
        {language === "pt" && (
          <span className="absolute inset-0 bg-[linear-gradient(90deg,#22c55e,#eab308)] opacity-80" />
        )}
        <span className="relative z-10">PT</span>
      </button>

      <button
        onClick={() => onChangeLanguage("en")}
        className={`${baseClass} ${
          language === "en"
            ? "text-white border-transparent shadow-[0_0_12px_rgba(59,130,246,0.25),0_0_18px_rgba(239,68,68,0.2)]"
            : "border-white/10 text-zinc-300 hover:bg-white/5"
        }`}
      >
        {language === "en" && (
          <span className="absolute inset-0 bg-[linear-gradient(90deg,#3b82f6,#ef4444)] opacity-80" />
        )}
        <span className="relative z-10">EN</span>
      </button>
    </div>
  );
}

function HomeSection({ onNext, language, onChangeLanguage, t }) {
  const finalRoles =
    language === "pt"
      ? [
          "Desenvolvedor Backend",
          "Desenvolvedor Frontend",
          "Designer",
          "Youtuber",
        ]
      : [
          "Backend Developer",
          "Frontend Developer",
          "Designer",
          "Youtuber",
        ];

  const glitchChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&*";
  const [displayText, setDisplayText] = useState(finalRoles[0]);

  useEffect(() => {
    let currentWordIndex = 0;
    let timeoutId;
    let intervalId;

    const runGlitchAnimation = () => {
      const targetText = finalRoles[currentWordIndex];
      let iteration = 0;

      intervalId = setInterval(() => {
        const glitched = targetText
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) return targetText[index];
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join("");

        setDisplayText(glitched);
        iteration += 0.5;

        if (iteration >= targetText.length) {
          clearInterval(intervalId);
          setDisplayText(targetText);

          timeoutId = setTimeout(() => {
            currentWordIndex = (currentWordIndex + 1) % finalRoles.length;
            runGlitchAnimation();
          }, 1400);
        }
      }, 55);
    };

    runGlitchAnimation();

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [language]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen snap-start items-center overflow-hidden bg-black px-6 lg:px-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_22%),radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.12),transparent_18%),linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(0,0,0,0))]" />

      <div className="relative mx-auto flex w-full max-w-7xl items-center">
        <div className="max-w-2xl">
          <LanguageSwitch language={language} onChangeLanguage={onChangeLanguage} />

          <p className="mb-3 text-base text-zinc-300">{t.hello}</p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
            Enzo Teixeira
          </h1>

          <h2 className="mt-4 text-xl text-zinc-200 sm:text-2xl lg:text-3xl">
            {t.rolePrefix}{" "}
            <span className="relative inline-block font-semibold text-cyan-400">
              <span className="relative z-10 drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]">
                {displayText}
              </span>

              <span
                aria-hidden="true"
                className="absolute left-0 top-0 z-0 translate-x-[1px] text-pink-500 opacity-60"
              >
                {displayText}
              </span>

              <span
                aria-hidden="true"
                className="absolute left-0 top-0 z-0 -translate-x-[1px] text-cyan-300 opacity-60"
              >
                {displayText}
              </span>
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
            {t.intro}
          </p>

          <SocialLinks />

          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:bg-white/10"
          >
            <span>↓</span>
            {t.downloadCv}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <SectionArrow onClick={onNext} />
      </div>
    </section>
  );
}

function ArtsSection({ arts, artsLoading, t }) {
  return (
    <section
      id="arts"
      className="flex min-h-screen snap-start items-center bg-black px-6 py-16 text-white lg:px-10"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            {t.artsTag}
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            {t.artsTitle}
          </h2>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            {t.artsText}
          </p>
        </div>

        {artsLoading ? (
          <div className="mt-10 text-center text-zinc-400">
            {t.loadingArts}
          </div>
        ) : arts.length === 0 ? (
          <div className="mt-10 text-center text-zinc-400">
            {t.noArts}
          </div>
        ) : (
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {arts.map((art) => (
              <article
                key={art.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                {art.image_url ? (
                  <img
                    src={art.image_url}
                    alt={art.title}
                    className="h-40 w-full object-cover"
                  />
                ) : (
                  <div className="flex h-40 items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 text-xs text-zinc-500">
                    {t.noImage}
                  </div>
                )}

                <div className="p-4">
                  <h3 className="text-base font-semibold">{art.title}</h3>

                  <p className="mt-2 text-xs leading-6 text-zinc-400">
                    {art.description}
                  </p>

                  {art.category && (
                    <span className="mt-4 inline-block rounded-full border border-cyan-400/30 px-2.5 py-1 text-[10px] text-cyan-300">
                      {art.category}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function PlaceholderSection({ id, title, text }) {
  return (
    <section
      id={id}
      className="flex min-h-screen snap-start items-center bg-black px-6 py-24 text-white lg:px-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">{title}</p>
        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">{title}</h2>
        <p className="mt-5 max-w-2xl leading-7 text-zinc-400">{text}</p>
      </div>
    </section>
  );
}

function PublicHome() {
  const navigate = useNavigate();
  const { lang } = useParams();

  const containerRef = useRef(null);
  const [showNav, setShowNav] = useState(false);
  const [language, setLanguage] = useState(lang === "en" ? "en" : "pt");
  const t = translations[language];
  const [arts, setArts] = useState([]);
  const [artsLoading, setArtsLoading] = useState(true);

  const handleChangeLanguage = (nextLanguage) => {
    setLanguage(nextLanguage);
    navigate(nextLanguage === "en" ? "/en" : "/pt");
  };

  const scrollToNext = () => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  async function fetchArts() {
    setArtsLoading(true);

    const { data, error } = await supabase
      .from("arts")
      .select("*")
      .order("id", { ascending: false });

    if (!error) {
      setArts(data || []);
    }

    setArtsLoading(false);
  }

  useEffect(() => {
    setLanguage(lang === "en" ? "en" : "pt");
  }, [lang]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setShowNav(container.scrollTop > window.innerHeight * 0.3);
    };

    handleScroll();
    fetchArts();

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white">
      <FloatingSectionNav visible={showNav} language={language} />

      <main
        ref={containerRef}
        className="hide-scrollbar h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth"
      >
        <HomeSection
          onNext={scrollToNext}
          language={language}
          onChangeLanguage={handleChangeLanguage}
          t={t}
        />

        <ProjectsSection t={t} language={language} />

        <ArtsSection
          arts={arts}
          artsLoading={artsLoading}
          t={t}
        />

        <AboutSection t={t} />

        <PlaceholderSection
          id="services"
          title={t.services}
          text={t.servicesText}
        />

        <PlaceholderSection
          id="skills"
          title={t.skills}
          text={t.skillsText}
        />

        <PlaceholderSection
          id="contact"
          title={t.contact}
          text={t.contactText}
        />
      </main>
    </div>
  );
}

export default PublicHome;