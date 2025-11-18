import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Music from './components/Music'
import Projects from './components/Projects'
import Featured from './components/Featured'
import Contact from './components/Contact'

function Navbar() {
  const items = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#music', label: 'Music' },
    { href: '#projects', label: 'Projects' },
    { href: '#featured', label: 'Featured' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur px-4 py-2">
          <a href="#home" className="font-semibold text-white">Portfolio</a>
          <div className="hidden md:flex items-center gap-4">
            {items.map((it) => (
              <a key={it.href} href={it.href} className="text-sm text-blue-200/80 hover:text-white transition">{it.label}</a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-blue-300/70 py-12">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} Your Name</div>
        <div className="text-sm">Built with love for code and music.</div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Music />
        <Projects />
        <Featured />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
