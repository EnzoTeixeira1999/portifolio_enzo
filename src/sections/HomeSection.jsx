import { useEffect, useState } from 'react'
import SocialLinks from '../components/SocialLinks'
import ScrollIndicator from '../components/ScrollIndicator'
import UniverseBackground from '../components/UniverseBackground'

function HomeSection() {
  const roles = [
    'Backend Developer',
    'Frontend Developer',
    'Designer',
    'Youtuber',
  ]

  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white flex items-center overflow-hidden"
    >
      <UniverseBackground />

      <div className="max-w-7xl mx-auto w-full px-6 relative z-20">
        <div className="max-w-2xl">
          <p className="text-lg text-cyan-300 tracking-[0.25em] uppercase">
            Cosmic Portfolio
          </p>

          <h2 className="mt-3 text-4xl md:text-6xl font-bold">
            Enzo Teixeira
          </h2>

          <h3 className="mt-4 text-xl md:text-3xl text-zinc-200">
            And I&apos;m a{' '}
            <span className="text-cyan-300 font-semibold animate-pulse drop-shadow-[0_0_14px_rgba(125,211,252,0.8)]">
              {roles[currentRole]}
            </span>
          </h3>

          <p className="mt-6 text-zinc-300 leading-7 max-w-xl">
            Sou um desenvolvedor focado em criar soluções modernas, APIs bem
            estruturadas e experiências digitais organizadas. Gosto de unir
            backend, frontend e design em projetos com identidade forte e visual
            marcante.
          </p>

          <SocialLinks />

          <button className="mt-8 inline-flex items-center gap-2 border border-cyan-400/60 text-white font-semibold px-6 py-3 rounded-full hover:bg-cyan-400/10 transition shadow-[0_0_25px_rgba(34,211,238,0.25)]">
            <span>↓</span>
            Download CV
          </button>
        </div>
      </div>

      <div className="relative z-20">
        <ScrollIndicator />
      </div>
    </section>
  )
}

export default HomeSection