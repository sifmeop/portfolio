import { motion } from 'motion/react'
import type { IconType } from 'react-icons'
import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import { TbFileCvFilled } from 'react-icons/tb'

const LINKS: { icon: IconType; link: string }[] = [
  { icon: FaGithub, link: 'https://github.com/sifmeop' },
  { icon: FaLinkedin, link: 'https://www.linkedin.com/in/eugene-selivestru' },
  { icon: IoMail, link: 'mailto:sifmeop@gmail.com' },
  { icon: FaTelegramPlane, link: 'https://t.me/selivestru' },
  { icon: TbFileCvFilled, link: '/cv.pdf' }
]

export const Hero = () => {
  return (
    <motion.section
      className='text-center'
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}>
      <div className='relative z-10 mx-auto mb-3 flex aspect-square h-auto max-w-60 items-center justify-center'>
        <motion.div
          className='absolute inset-0 rounded-full border-2 border-white/25'
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.2, 0] }}
          transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
        />
        <img
          src='/images/avatar.webp'
          alt='avatar'
          className='relative z-10 h-full w-full rounded-full object-cover'
        />
      </div>
      <h1 className='mb-0.5 font-mono text-3xl font-bold'>Eugene Selivestru</h1>
      <p className='text-muted mb-3 font-mono text-2xl font-semibold'>
        Frontend Developer
      </p>
      <motion.div
        className='mb-4 flex justify-center gap-2'
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}>
        {LINKS.map(({ icon: Icon, link }, index) => (
          <motion.a
            key={index}
            href={link}
            target='_blank'
            rel='noreferrer'
            className='border-border hover:bg-border rounded-lg border px-4 py-2 transition-colors duration-300'
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}>
            <Icon className='size-6' />
          </motion.a>
        ))}
      </motion.div>
      <p className='font-mono text-2xl font-medium underline opacity-80'>
        Ukraine, Dnipro
      </p>
    </motion.section>
  )
}
