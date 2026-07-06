import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

const whatsappUrl =
  'https://wa.me/5511953075288?text=Ol%C3%A1%2C%20vim%20do%20seu%20site%20e%20me%20interessei%20pelo%20seu%20curr%C3%ADculo.'

const contacts = [
  {
    label: 'WhatsApp',
    value: 'Enviar mensagem direta',
    href: whatsappUrl,
    icon: FaWhatsapp,
  },
  {
    label: 'GitHub',
    value: 'LukaoModesto',
    href: 'https://github.com/LukaoModesto',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    value: 'Meu perfil profissional',
    href: 'https://www.linkedin.com/',
    icon: FaLinkedinIn,
  },
  {
    label: 'E-mail',
    value: 'Entrar em contato',
    href: 'mailto:seuemail@email.com',
    icon: Mail,
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-white/[0.03] p-8 shadow-2xl backdrop-blur-xl md:p-12"
        >
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
                Contato
              </p>

              <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
                Vamos construir algo juntos?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                Estou aberto a oportunidades como desenvolvedor, projetos
                freelance, networking e conversas sobre tecnologia, produto e
                desenvolvimento de software.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Enviar mensagem
                <Send size={18} />
              </a>
            </div>

            <div className="space-y-4">
              {contacts.map((contact) => {
                const Icon = contact.icon
                const isMail = contact.href.startsWith('mailto')

                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={isMail ? undefined : '_blank'}
                    rel={isMail ? undefined : 'noreferrer'}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/70 p-5 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                      <Icon size={22} />
                    </div>

                    <div>
                      <p className="font-bold text-white">{contact.label}</p>
                      <p className="text-sm text-slate-400">{contact.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}