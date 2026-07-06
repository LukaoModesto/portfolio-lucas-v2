import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects } from '../data/projects'

export function Projects() {
  const featuredProject = projects.find((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Projetos
          </p>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Produtos, APIs e aplicações construídas com foco real.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Aqui estão alguns projetos que mostram minha evolução em backend,
            frontend, organização de código, autenticação, APIs e construção de
            experiências digitais mais completas.
          </p>
        </motion.div>

        {featuredProject && (
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="group relative mb-8 overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-white/[0.03] p-8 shadow-2xl backdrop-blur-xl"
          >
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                  Projeto em destaque
                </div>

                <h3 className="text-3xl font-black text-white md:text-4xl">
                  {featuredProject.title}
                </h3>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
                  {featuredProject.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {featuredProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                  >
                    <FaGithub size={18} />
                    Ver GitHub
                  </a>

                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                    >
                      Ver online
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5">
                <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-sm font-semibold text-slate-300">
                    Status do produto
                  </span>

                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                    {featuredProject.status}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-sm text-slate-500">Core atual</p>
                    <p className="mt-1 font-semibold text-white">
                      Agenda, eventos, usuários e autenticação
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-sm text-slate-500">Próximo passo</p>
                    <p className="mt-1 font-semibold text-white">
                      Frontend integrado ao backend
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-sm text-slate-500">Objetivo</p>
                    <p className="mt-1 font-semibold text-white">
                      Produto PWA instalável no celular
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {otherProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05]"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <span className="mt-3 inline-flex rounded-full bg-white/5 px-3 py-1 text-xs font-bold text-slate-300">
                    {project.status}
                  </span>
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
                  aria-label={`Abrir ${project.title} no GitHub`}
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>

              <p className="leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition hover:text-cyan-200"
                >
                  Ver online
                  <ArrowUpRight size={16} />
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}