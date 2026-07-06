const navItems = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contato', href: '#contact' },
]

export function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-bold tracking-tight text-white">
          Lucas<span className="text-cyan-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-400 transition hover:text-cyan-400"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
        href="https://wa.me/5511953075288?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site%20e%20me%20interessei%20pelo%20seu%20curr%C3%ADculo."
        target="_blank"
        rel="noreferrer"
        className="hidden rounded-full border border-cyan-400/40 px-5 py-2 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10 md:inline-flex"
        >
          Vamos conversar
          </a>
      </nav>
    </header>
  )
}