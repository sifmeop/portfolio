import { FaGithub, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        Copyright © 2023. All rights are reserved
      </p>
      <div className={styles.links}>
        <a target='_blank' href='https://github.com/sifmeop'>
          <FaGithub size='1.5rem' />
        </a>
        <a target='_blank' href=''>
          <FaLinkedin size='1.5rem' />
        </a>
      </div>
    </footer>
  )
}

export default Footer
