import { motion, type Variants } from 'motion/react'
import { Section } from './Section'

const PROJECTS = [
  {
    title: 'Sift-Shop',
    image: '/images/sift-shop.webp',
    description: [
      'Full-stack e-commerce monorepo with storefront,',
      'admin panel, auth, payments and AWS S3 uploads.'
    ],
    stack: ['Next.js', 'NestJS', 'GraphQL', 'Prisma', 'PostgreSQL'],
    links: {
      live: 'https://sift-shop.xyz',
      github: 'https://github.com/sifmeop/sift-shop'
    }
  },
  {
    title: 'Sift-Ludo',
    image: '/images/sift-ludo.webp',
    description: [
      'Classic board game in React with bot AI,',
      'step-by-step animations and glassmorphism UI.'
    ],
    stack: ['React', 'TypeScript', 'Zustand', 'Framer Motion'],
    links: {
      live: 'https://sift-ludo.vercel.app',
      github: 'https://github.com/sifmeop/sift-ludo'
    }
  },
  {
    title: 'Sift-Rate',
    image: '/images/sift-rate.webp',
    description: [
      'PWA for rating movies, games, books and music',
      'with yearly stats, timeline and API integrations.'
    ],
    stack: ['Next.js', 'tRPC', 'TanStack Query', 'Prisma'],
    links: {
      live: 'https://sift-rate.xyz',
      github: 'https://github.com/sifmeop/sift-rate'
    }
  }
]

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 }
  }
}

export const Projects = () => {
  return (
    <Section title='Projects'>
      <motion.div
        className='space-y-4'
        variants={listVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}>
        {PROJECTS.map(({ title, image, description, stack, links }) => (
          <motion.div
            variants={cardVariants}
            className='group flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 font-mono shadow-[0_20px_50px_-40px_rgba(0,0,0,0.9)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10'>
            <div className='relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-white/10 via-black/40 to-black/70'>
              <div className='aspect-video w-full'>
                <img
                  src={image}
                  alt={`${title} preview`}
                  className='size-full object-cover transition duration-300 group-hover:scale-105'
                />
              </div>
              <div className='pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent' />
            </div>
            <div className='space-y-3'>
              <h3 className='text-foreground text-2xl font-semibold'>
                {title}
              </h3>
              <div className='text-muted space-y-1 text-sm'>
                {description.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
            <div className='flex flex-wrap gap-2'>
              {stack.map((tag) => (
                <span
                  key={tag}
                  className='text-muted rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs'>
                  {tag}
                </span>
              ))}
            </div>
            <div className='flex flex-wrap items-center gap-4 text-sm'>
              <a
                href={links.live}
                target='_blank'
                rel='noreferrer'
                className='rounded-full border border-white/20 px-4 py-2 text-xs tracking-[0.2em] uppercase transition hover:border-white/60 hover:text-white'>
                Live
              </a>
              <a
                href={links.github}
                target='_blank'
                rel='noreferrer'
                className='rounded-full border border-white/20 px-4 py-2 text-xs tracking-[0.2em] uppercase transition hover:border-white/60 hover:text-white'>
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
