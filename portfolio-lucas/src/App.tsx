import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />
      <Hero />
    </main>
  )
}

export default App