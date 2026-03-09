import { motion } from 'motion/react'

interface SectionProps extends React.PropsWithChildren {
  title: string
  className?: string
}

export const Section = ({ title, className, children }: SectionProps) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}>
      <h2 className='mb-2 font-mono text-3xl leading-10 font-semibold underline'>
        {title}
      </h2>
      {children}
    </motion.section>
  )
}
