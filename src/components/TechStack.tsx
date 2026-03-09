import { motion } from 'motion/react'
import Marquee from 'react-fast-marquee'
import StackIcon from 'tech-stack-icons'
import { Section } from './Section'

const STACK = [
  [
    { icon: 'typescript', name: 'TypeScript' },
    { icon: 'react', name: 'React' },
    { icon: 'nextjs2', name: 'Next.js' },
    { icon: 'tailwindcss', name: 'Tailwind CSS' }
  ],
  [
    { icon: 'zustand', name: 'Zustand' },
    { icon: 'reactquery', name: 'TanStack Query' },
    { icon: 'graphql', name: 'GraphQL' },
    { icon: 'zod', name: 'Zod' }
  ],
  [
    { icon: 'nestjs', name: 'NestJS' },
    { icon: 'prisma', name: 'Prisma' }
  ],
  [
    { icon: 'vitejs', name: 'Vite' },
    { icon: 'motion', name: 'Motion' },
    { icon: 'git', name: 'Git' }
  ]
]

export const TechStack = () => {
  return (
    <Section title='Tech Stack'>
      <div className='space-y-2'>
        {STACK.map((items, index) => (
          <motion.div
            key={index}
            className='overflow-hidden bg-white/10 py-3'
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.45,
              ease: 'easeOut',
              delay: index * 0.05
            }}>
            <Marquee
              autoFill
              pauseOnHover
              speed={20}
              direction={index % 2 === 0 ? 'left' : 'right'}>
              {items.map(({ icon, name }) => (
                <div
                  key={icon}
                  className='mr-5 flex shrink-0 items-center gap-2'>
                  <StackIcon name={icon} className='size-8' />
                  <p className='font-serif text-2xl font-semibold'>{name}</p>
                </div>
              ))}
            </Marquee>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
