import { useEffect, useState } from 'react'
import SocialLinks from '../components/SocialLinks'
import ScrollIndicator from '../components/ScrollIndicator'

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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_25%),radial-gradient(circle_at_right,rgba(168,85,247,0.10),transparent_20%)]"></div>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
        <div className="max-w-2xl">
          <p className="text-lg text-zinc-300">Hello, It&apos;s Me</p>

          <h2 className="mt-2 text-4xl md:text-6xl font-bold">
            Enzo Teixeira
          </h2>

          <h3 className="mt-4 text-xl md:text-3xl text-zinc-200">
            And I&apos;m a{' '}
            <span className="text-cyan-400 font-semibold animate-pulse">
              {roles[currentRole]}
            </span>
          </h3>

          <p className="mt-6 text-zinc-400 leading-7 max-w-xl">
            Sou um desenvolvedor focado em criar soluções modernas, APIs bem
            estruturadas e experiências digitais organizadas. Gosto de unir
            backend, frontend e design em projetos com identidade forte e visual
            marcante.
          </p>

          <SocialLinks />

          <button className="mt-8 inline-flex items-center gap-2 bg-cyan-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-cyan-300 transition">
            <span>↓</span>
            Download CV
          </button>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  )
}

export default HomeSection