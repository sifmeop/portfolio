import { BsFillFileEarmarkPdfFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        Copyright © 2023. All rights are reserved
      </p>
      <div className={styles.links}>
        <a target='_blank' href='https://t.me/selivestru'>
          <FaTelegram size='2rem' />
        </a>
        <a target='_blank' href='https://github.com/sifmeop'>
          <FaGithub size='2rem' />
        </a>
        <a target='_blank' href='https://www.linkedin.com/in/eugene-selivestru'>
          <FaLinkedin size='2rem' />
        </a>
        <a href='/resume.pdf' download>
          <BsFillFileEarmarkPdfFill size='2rem' />
        </a>
      </div>
    </footer>
  )
}

export default Footer
