import React, { useEffect, useRef, useState } from 'react'
import AboutSection from '../components/AboutSection'
import ContactSection from '../sections/ContactSection'
import ServicesSection from '../sections/ServicesSection'
import ProjectsSection from '../sections/ProjectsSection'
import SkillsSection from '../sections/SkillsSection'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import usePageSeo from '../hooks/usePageSeo'

const navItems = {
  pt: [
    { label: 'Início', href: '#home' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Contato', href: '#contact' },
  ],
  en: [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ],
}

const translations = {
  pt: {
    hello: 'Olá, me chamo',
    intro:
      'Desenvolvedor de Software com foco em Backend, especializado em Java e desenvolvimento de APIs REST. Tenho experiência na construção de aplicações modernas, escaláveis e bem estruturadas, aplicando boas práticas de arquitetura, código limpo e tecnologias atuais para desenvolver soluções eficientes, seguras e de alta qualidade.',
    downloadCv: 'Baixar CV',
    rolePrefix: 'E eu sou um',
    projectsTag: 'Projetos',
    projectsTitle: 'Projetos em destaque',
    projectsText:
      'Alguns projetos que representam minha experiência, evolução técnica e a forma como desenvolvo soluções na prática.',
  },
  en: {
    hello: 'Hello, my name is',
    intro:
      'Software Developer focused on Backend, specialized in Java and REST API development. Experienced in building modern, scalable and well-structured applications using clean architecture, best coding practices and modern technologies to deliver efficient, secure and high-quality solutions.',
    downloadCv: 'Download CV',
    rolePrefix: "And I'm a",
    projectsTag: 'Projects',
    projectsTitle: 'Featured Projects',
    projectsText:
      'Some projects that represent my technical experience and how I build practical software solutions.',
  },
}

function FloatingSectionNav({ visible, language }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`fixed left-5 top-5 z-50 transition-all duration-500 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none -translate-y-6 opacity-0'
      }`}
    >
      <div className="w-[170px] rounded-2xl border border-cyan-300/15 bg-black/35 px-3 py-2 shadow-[0_0_20px_rgba(56,189,248,0.06)] backdrop-blur-md">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex w-full items-center justify-between text-xs font-semibold text-cyan-100 outline-none"
        >
          <span>Menu</span>
          <span className="text-base leading-none">{open ? '×' : '☰'}</span>
        </button>

        {open && (
          <div className="mt-3 grid gap-1.5 pb-1">
            {navItems[language].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-1.5 text-xs text-zinc-300 transition hover:bg-cyan-300/10 hover:text-cyan-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function SocialLinks() {
  const baseClass =
    'rounded-full border border-cyan-300/35 bg-black/10 px-4 py-2 text-xs font-semibold text-cyan-200 shadow-[0_0_18px_rgba(56,189,248,0.08)] backdrop-blur-sm transition hover:border-cyan-200 hover:bg-cyan-300/10 hover:text-white sm:text-sm'

  return (
    <div className="mt-7 flex flex-wrap items-center gap-2.5 sm:mt-8 sm:gap-3">
      <a href="https://x.com/ETA_1999" target="_blank" rel="noreferrer" className={baseClass}>
        Twitter
      </a>

      <a href="https://www.instagram.com/enzoteixeira1999?igsh=dTAwOGh1cnV4cDc2" target="_blank" rel="noreferrer" className={baseClass}>
        Instagram
      </a>

      <a href="https://www.linkedin.com/in/enzo-teixeira-alves-b80836215/" target="_blank" rel="noreferrer" className={baseClass}>
        LinkedIn
      </a>

      <a href="https://github.com/EnzoTeixeira1999" target="_blank" rel="noreferrer" className={baseClass}>
        GitHub
      </a>
    </div>
  )
}

function SectionArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group inline-flex flex-col items-center text-2xl text-zinc-400 transition hover:text-cyan-200"
      aria-label="Descer para a próxima seção"
    >
      <span className="transition group-hover:translate-y-0.5">⌄</span>
      <span className="-mt-3 transition group-hover:translate-y-0.5">⌄</span>
    </button>
  )
}

function LanguageSwitch({ language, onChangeLanguage }) {
  const baseClass =
    'relative overflow-hidden rounded-full border px-4 py-2 text-xs font-semibold transition sm:px-5 sm:text-sm'

  return (
    <div className="mb-8 flex items-center gap-3 sm:absolute sm:left-0 sm:top-[-60px] sm:mb-0">
      <button
        onClick={() => onChangeLanguage('pt')}
        className={`${baseClass} ${
          language === 'pt'
            ? 'border-transparent text-white shadow-[0_0_16px_rgba(34,197,94,0.22),0_0_22px_rgba(234,179,8,0.18)]'
            : 'border-white/10 text-zinc-300 hover:bg-white/5'
        }`}
      >
        {language === 'pt' && (
          <span className="absolute inset-0 bg-[linear-gradient(90deg,#22c55e,#eab308)] opacity-80" />
        )}
        <span className="relative z-10">PT</span>
      </button>

      <button
        onClick={() => onChangeLanguage('en')}
        className={`${baseClass} ${
          language === 'en'
            ? 'border-transparent text-white shadow-[0_0_16px_rgba(59,130,246,0.22),0_0_22px_rgba(239,68,68,0.18)]'
            : 'border-white/10 text-zinc-300 hover:bg-white/5'
        }`}
      >
        {language === 'en' && (
          <span className="absolute inset-0 bg-[linear-gradient(90deg,#3b82f6,#ef4444)] opacity-80" />
        )}
        <span className="relative z-10">EN</span>
      </button>
    </div>
  )
}

const rolesByLanguage = {
  pt: [
    'Desenvolvedor Backend',
    'Desenvolvedor Frontend',
  ],
  en: [
    'Backend Developer',
    'Frontend Developer',
  ],
}

function HomeSection({
  onNext,
  language,
  onChangeLanguage,
  t,
}) {

  const finalRoles =
    rolesByLanguage[language] ?? rolesByLanguage.pt

  const glitchChars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&*'

  const [displayText, setDisplayText] =
    useState(finalRoles[0])

  useEffect(() => {
    let currentWordIndex = 0
    let timeoutId
    let intervalId

    const runGlitchAnimation = () => {
      const targetText =
        finalRoles[currentWordIndex]

      let iteration = 0

      intervalId = setInterval(() => {
        const glitched = targetText
          .split('')
          .map((char, index) => {
            if (char === ' ') {
              return ' '
            }

            if (index < iteration) {
              return targetText[index]
            }

            return glitchChars[
              Math.floor(
                Math.random() *
                  glitchChars.length,
              )
            ]
          })
          .join('')

        setDisplayText(glitched)
        iteration += 0.5

        if (iteration >= targetText.length) {
          clearInterval(intervalId)
          setDisplayText(targetText)

          timeoutId = setTimeout(() => {
            currentWordIndex =
              (currentWordIndex + 1) %
              finalRoles.length

            runGlitchAnimation()
          }, 1400)
        }
      }, 55)
    }

    runGlitchAnimation()

    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [finalRoles])

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] snap-start items-center overflow-hidden bg-black px-6 py-16 text-white sm:px-6 lg:px-10"
    >

      <div className="relative z-20 mx-auto flex w-full max-w-7xl items-center">
        <div className="w-full max-w-3xl">
          <LanguageSwitch
            language={language}
            onChangeLanguage={onChangeLanguage}
          />

          <p className="mb-3 text-sm text-zinc-300 sm:text-base">{t.hello}</p>

          <h1 className="whitespace-nowrap text-[2rem] font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.12)] min-[390px]:text-[2.25rem] sm:text-5xl lg:text-6xl">
            Enzo Teixeira Alves
          </h1>

          <h2 className="mt-4 text-lg text-zinc-200 sm:text-2xl lg:text-3xl">
            {t.rolePrefix}{' '}
            <span className="block h-8 max-w-full overflow-hidden whitespace-nowrap font-semibold text-cyan-300 sm:inline-block sm:h-auto sm:overflow-visible sm:align-baseline">
              <span className="relative inline-block min-w-[22ch] text-[1rem] leading-8 drop-shadow-[0_0_14px_rgba(125,211,252,0.95)] sm:min-w-[24ch] sm:text-2xl lg:text-3xl">
                {displayText}
              </span>
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-300 sm:mt-6 sm:text-base">
            {t.intro}
          </p>

          <SocialLinks />

          <a
            href={
              language === 'pt'
                ? '/Enzo_Teixeira_Alves_CV_PT.pdf'
                : '/Enzo_Teixeira_Alves_CV_EN.pdf'
            }
            download={
              language === 'pt'
                ? 'Enzo_Teixeira_Alves_CV_PT.pdf'
                : 'Enzo_Teixeira_Alves_CV_EN.pdf'
            }
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/45 bg-white/5 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(56,189,248,0.14)] backdrop-blur-sm transition hover:border-cyan-200 hover:bg-cyan-300/10 sm:mt-8 sm:px-6"
          >
            <span>↓</span>
            {t.downloadCv}
          </a>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 sm:block">
        <SectionArrow onClick={onNext} />
      </div>
    </section>
  )
}

function FadeSection({ children }) {
  const sectionRef = useRef(null)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const isMobile = window.matchMedia(
      '(max-width: 767px)',
    ).matches

    if (isMobile) {
      return
    }

    const element = sectionRef.current

    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setOpacity(
          entry.intersectionRatio > 0.4 ? 1 : 0,
        )
      },
      {
        threshold: [0.4],
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="relative"
      style={{
        opacity,
        transition:
          'opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  )
}

function PublicHome() {
  const location = useLocation()
  const navigate = useNavigate()
  const { lang } = useParams()

  const containerRef = useRef(null)
  useEffect(() => {
  if (!location.hash) return

  const frameId = requestAnimationFrame(() => {
    const targetSection = document.querySelector(location.hash)

    targetSection?.scrollIntoView({
      behavior: 'auto',
      block: 'start',
    })
  })

  return () => cancelAnimationFrame(frameId)
}, [location.hash])
  const [showNav, setShowNav] = useState(false)
  const language = lang === 'en' ? 'en' : 'pt'
  const t = translations[language]
    usePageSeo({
    title:
      language === 'en'
        ? 'Enzo Teixeira Alves | Java Backend Developer'
        : 'Enzo Teixeira Alves | Desenvolvedor Java Backend',

    description:
      language === 'en'
        ? 'Portfolio of Enzo Teixeira Alves, a Java Backend Developer focused on Spring Boot, REST APIs, microservices, Docker, Kubernetes, and software architecture.'
        : 'Portfólio de Enzo Teixeira Alves, desenvolvedor Java Backend especializado em Spring Boot, APIs REST, microsserviços, Docker, Kubernetes e arquitetura de sistemas.',

    language:
      language === 'en'
        ? 'en'
        : 'pt-BR',

    path:
      language === 'en'
        ? '/en'
        : '/pt',
  })

  const handleChangeLanguage = (nextLanguage) => {
    navigate(nextLanguage === 'en' ? '/en' : '/pt')
  }

  const scrollToNext = () => {
    const container = containerRef.current
    if (!container) return

    container.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      setShowNav(container.scrollTop > window.innerHeight * 0.3)
    }

    handleScroll()

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-black text-white">
      <FloatingSectionNav visible={showNav} language={language} />

      <main
        ref={containerRef}
        className="hide-scrollbar h-screen overflow-y-scroll scroll-smooth md:snap-y md:snap-mandatory"
      >
        <FadeSection>
          <HomeSection
            onNext={scrollToNext}
            language={language}
            onChangeLanguage={handleChangeLanguage}
            t={t}
          />
        </FadeSection>

        <FadeSection>
          <ProjectsSection t={t} language={language} />
        </FadeSection>

        <FadeSection>
          <AboutSection t={t} language={language} />
        </FadeSection>

        <FadeSection>
          <ServicesSection language={language} />
        </FadeSection>

        <FadeSection>
          <SkillsSection t={t} language={language} />
        </FadeSection>

        <FadeSection>
          <ContactSection language={language} />
        </FadeSection>
      </main>
    </div>
  )
}

export default PublicHome