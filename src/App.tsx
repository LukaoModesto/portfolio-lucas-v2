import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />
      <Hero />
      <Projects />
    </main>
  )
}

export default App