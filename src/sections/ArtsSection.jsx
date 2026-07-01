import { motion } from "framer-motion";
import { Image, Layers, Palette, Sparkles } from "lucide-react";

function ArtCard({ art, t }) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden rounded-3xl border border-cyan-300/20 bg-white/[0.03] shadow-[0_0_24px_rgba(56,189,248,0.08)] transition hover:border-cyan-200/70 hover:bg-cyan-300/5"
    >
      {art.image_url ? (
        <img
          src={art.image_url}
          alt={art.title}
          draggable={false}
          className="h-40 w-full select-none object-cover transition duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-40 items-center justify-center bg-gradient-to-br from-zinc-900 to-black text-zinc-500">
          <Image size={34} />
        </div>
      )}

      <div className="p-4">
        <h3 className="text-base font-semibold text-white">{art.title}</h3>

        <p className="mt-2 text-xs leading-6 text-zinc-400">
          {art.description || t.noDescription}
        </p>

        {art.category && (
          <span className="mt-4 inline-block rounded-full border border-cyan-300/30 bg-cyan-300/5 px-3 py-1 text-[10px] text-cyan-200">
            {art.category}
          </span>
        )}
      </div>
    </motion.article>
  );
}

function ArtsSection({ arts = [], artsLoading = false, language = "pt" }) {
  const content = {
    pt: {
      tag: "Artes",
      title: "Design gráfico e criações visuais.",
      text:
        "Uma seleção de peças visuais, identidades, banners, thumbnails e projetos gráficos que representam meu lado criativo.",
      loading: "Carregando artes...",
      empty: "Nenhuma arte cadastrada ainda.",
      noDescription: "Projeto visual sem descrição cadastrada.",
      highlights: [
        { label: "Branding", Icon: Palette },
        { label: "Thumbnails", Icon: Image },
        { label: "Composição", Icon: Layers },
        { label: "Criatividade", Icon: Sparkles },
      ],
    },
    en: {
      tag: "Arts",
      title: "Graphic design and visual creations.",
      text:
        "A selection of visual pieces, identities, banners, thumbnails, and graphic projects that represent my creative side.",
      loading: "Loading arts...",
      empty: "No arts registered yet.",
      noDescription: "Visual project without a registered description.",
      highlights: [
        { label: "Branding", Icon: Palette },
        { label: "Thumbnails", Icon: Image },
        { label: "Composition", Icon: Layers },
        { label: "Creativity", Icon: Sparkles },
      ],
    },
  };

  const t = content[language] || content.pt;

  return (
    <section
      id="arts"
      className="flex min-h-screen snap-start items-center bg-black px-6 py-10 text-white lg:px-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-400/70">
            {t.tag}
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            {t.title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            {t.text}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {t.highlights.map(({ label, Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/5 px-4 py-2 text-xs text-cyan-200"
              >
                <Icon size={14} />
                {label}
              </span>
            ))}
          </div>
        </div>

        {artsLoading ? (
          <div className="text-center text-zinc-400">{t.loading}</div>
        ) : arts.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center text-zinc-400">
            {t.empty}
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {arts.slice(0, 6).map((art, index) => (
              <motion.div
                key={art.id || index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <ArtCard art={art} t={t} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ArtsSection;