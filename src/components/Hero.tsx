import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const whatsappUrl =
  'https://wa.me/5511953075288?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site%20e%20me%20interessei%20pelo%20seu%20curr%C3%ADculo.'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.16),_transparent_34%)]" />

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,_rgba(148,163,184,0.07)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(148,163,184,0.07)_1px,_transparent_1px)] bg-[size:48px_48px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-300 sm:text-sm">
            Software Developer • React • TypeScript • Backend
          </div>

          <h1 className="max-w-4xl font-black tracking-tight">
            <span className="block text-[clamp(2.5rem,5.2vw,4.2rem)] leading-[1.05] text-white">
              Lucas Andrade
            </span>

            <span className="mt-4 block max-w-3xl bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-[clamp(2.4rem,5vw,4rem)] leading-[1.18] text-transparent">
              construindo produtos digitais.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Desenvolvedor focado em criar aplicações modernas, organizadas e com
            experiência visual profissional. Trabalho com interfaces em React,
            TypeScript e backends estruturados para projetos reais.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Ver projetos
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Entrar em contato
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/LukaoModesto"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="mailto:seuemail@email.com"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
              aria-label="E-mail"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-cyan-400/20 blur-3xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-xl">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="space-y-4 font-mono text-sm">
              <p className="text-slate-500">const developer = &#123;</p>

              <p className="pl-6 text-cyan-300">
                name: <span className="text-white">'Lucas Andrade'</span>,
              </p>

              <p className="pl-6 text-cyan-300">
                focus:{' '}
                <span className="text-white">'Full Stack Development'</span>,
              </p>

              <p className="pl-6 text-cyan-300">
                stack:{' '}
                <span className="text-white">
                  ['React', 'TypeScript', 'FastAPI']
                </span>
                ,
              </p>

              <p className="pl-6 text-cyan-300">
                project: <span className="text-white">'LifeHUB'</span>,
              </p>

              <p className="pl-6 text-cyan-300">
                status: <span className="text-emerald-300">'building...'</span>,
              </p>

              <p className="pl-6 text-cyan-300">
                currentMission:{' '}
                <span className="text-violet-300">
                  'procurando a primeira vaga :)'
                </span>
                ,
              </p>

              <p className="text-slate-500">&#125;</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}