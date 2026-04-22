function ScrollIndicator() {
  return (
    <a
      href="#projects"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-zinc-400 animate-bounce text-2xl hover:text-white transition"
    >
      <span>⌄</span>
      <span className="-mt-3">⌄</span>
    </a>
  )
}

export default ScrollIndicator