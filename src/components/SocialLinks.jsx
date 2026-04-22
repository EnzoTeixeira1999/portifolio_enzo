function SocialLinks() {
  return (
    <div className="flex items-center gap-3 mt-8 flex-wrap">
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer"
        className="border border-cyan-400/40 rounded-full px-4 py-2 text-cyan-400 hover:bg-cyan-400 hover:text-black transition text-sm font-semibold"
      >
        Twitter
      </a>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        className="border border-cyan-400/40 rounded-full px-4 py-2 text-cyan-400 hover:bg-cyan-400 hover:text-black transition text-sm font-semibold"
      >
        Instagram
      </a>

      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
        className="border border-cyan-400/40 rounded-full px-4 py-2 text-cyan-400 hover:bg-cyan-400 hover:text-black transition text-sm font-semibold"
      >
        LinkedIn
      </a>

      <a
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
        className="border border-cyan-400/40 rounded-full px-4 py-2 text-cyan-400 hover:bg-cyan-400 hover:text-black transition text-sm font-semibold"
      >
        GitHub
      </a>
    </div>
  )
}

export default SocialLinks