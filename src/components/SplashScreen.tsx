import { motion } from 'framer-motion'

const logoUrl = `${import.meta.env.BASE_URL}signature-logo.png`

export function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.14),_transparent_38%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.10),_transparent_52%)]" />

      <motion.div
        className="relative flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.94, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.img
          src={logoUrl}
          alt="Lucas Andrade"
          className="h-20 w-auto object-contain drop-shadow-[0_0_30px_rgba(34,211,238,0.28)] md:h-28"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        <motion.div
          className="mt-6 h-[2px] w-44 origin-center rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 shadow-[0_0_18px_rgba(34,211,238,0.35)]"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
        />

        <motion.p
          className="mt-5 text-xs font-medium uppercase tracking-[0.42em] text-slate-500"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.45 }}
        >
          Software Developer
        </motion.p>
      </motion.div>
    </motion.div>
  )
}