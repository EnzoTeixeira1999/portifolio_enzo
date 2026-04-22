function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
        <h1 className="text-white text-lg md:text-xl font-semibold tracking-wider">
          Portifólio
        </h1>

        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar