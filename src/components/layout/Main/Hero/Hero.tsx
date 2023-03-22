import { FaGithub, FaLinkedin } from 'react-icons/fa'

import Section from 'components/Section/Section'
import styles from './Hero.module.scss'
import Skills from './Skills/Skills'

const Hero = () => {
  return (
    <Section id='home'>
      <div className={styles.hero}>
        <div className={styles.text}>
          <h1 className={styles.title}>Front-End Developer</h1>
          <p className={styles.description}>
            Hi, I'm Eugene Selivestru. Front-End React Developer based in
            Novomoskovsk, Ukraine🔵🟡
          </p>
          <div className={styles.links}>
            <a target='_blank' href='https://github.com/sifmeop'>
              <FaGithub size='2rem' />
            </a>
            <a target='_blank' href=''>
              <FaLinkedin size='2rem' />
            </a>
          </div>
        </div>
        <div className={styles.photo} />
      </div>
      <Skills />
    </Section>
  )
}

export default Hero