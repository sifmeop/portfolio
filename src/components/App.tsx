import { motion } from 'motion/react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { About } from './About'
import { Hero } from './Hero'
import { Projects } from './Projects'
import { TechStack } from './TechStack'

export const App = () => {
  return (
    <div className='min-h-dvh px-4'>
      <div className='pointer-events-none fixed inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[20px_20px] opacity-25' />
      <div className='bg-background z-px pointer-events-none fixed inset-0 flex items-center justify-center mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]' />
      <motion.div
        className='relative z-2 mx-auto w-full max-w-2xl space-y-4 py-10'
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}>
        <Hero />
        <About />
        <TechStack />
        <Projects />
      </motion.div>
      <motion.div className='flex justify-center'>
        <motion.a
          href='/cv.pdf'
          target='_blank'
          rel='noreferrer'
          className='border-border flex items-center gap-3 rounded-full border bg-white/5 px-6 py-3 text-sm leading-7 font-semibold backdrop-blur'
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.1,
            boxShadow: '0 10px 30px rgba(15,23,42,0.35)'
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 280, damping: 20 }}>
          View CV
          <FaExternalLinkAlt size={16} />
        </motion.a>
      </motion.div>
      <footer className='py-6 text-center font-mono text-sm text-zinc-500'>
        © {new Date().getFullYear()} Eugene Selivestru
      </footer>
    </div>
  )
}
