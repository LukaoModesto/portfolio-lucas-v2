import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

export default App