import { motion } from 'motion/react'
import { Section } from './Section'

export const About = () => {
  return (
    <Section title='About'>
      <motion.p
        className='mb-4 font-mono font-medium tracking-tight text-zinc-300'
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}>
        Frontend developer with 2.6 years of experience, focused on building
        polished user interfaces with React and Next.js. <br /> I care about
        clean code, smooth animations, and experiences that feel right.
      </motion.p>
    </Section>
  )
}
