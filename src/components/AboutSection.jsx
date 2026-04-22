export default function AboutSection({ t }) {
  return (
    <section
      id="about"
      className="flex min-h-screen snap-start items-center bg-black px-6 py-16 text-white lg:px-10"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
        
        {/* TEXTO */}
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400/70">
            {t.aboutTag}
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            {t.aboutTitle}
          </h2>

          <p className="mt-6 text-sm leading-7 text-zinc-400 sm:text-base">
            {t.aboutText}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-cyan-400/30 px-3 py-1 text-xs text-cyan-300">
              Java
            </span>
            <span className="rounded-full border border-cyan-400/30 px-3 py-1 text-xs text-cyan-300">
              Node.js
            </span>
            <span className="rounded-full border border-cyan-400/30 px-3 py-1 text-xs text-cyan-300">
              React
            </span>
            <span className="rounded-full border border-cyan-400/30 px-3 py-1 text-xs text-cyan-300">
              Docker
            </span>
          </div>
        </div>

        {/* IMAGEM */}
        <div className="relative flex items-center justify-center">
          
          {/* Glow atrás */}
          <div className="absolute h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <img
            src="/perfil.png"
            alt="Enzo"
            className="relative z-10 w-64 object-contain"
          />
        </div>
      </div>
    </section>
  );
}