import Section from 'components/Section/Section'
import { FaTelegram } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import styles from './Contact.module.scss'

const Contacts = () => {
  return (
    <Section id='contact'>
      <h1 className={styles.title}>CONTACT</h1>
      <h3 className={styles.subtitle}>Contacts for communication! Write! 👇</h3>
      <div className={styles.contacts}>
        <div className={styles.contactItem}>
          <div className={styles.icon}>
            <FaTelegram color='#b73e3e' size='2rem' />
          </div>
          <div>
            <h3 className={styles.linkTitle}>Telegram</h3>
            <a
              target='_blank'
              href='https://t.me/selivestru'
              className={styles.link}>
              @selivestru
            </a>
          </div>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.icon}>
            <GrMail color='#b73e3e' size='2rem' />
          </div>
          <div>
            <h3 className={styles.linkTitle}>Mail</h3>
            <a
              target='_blank'
              href='mailto:sifmeop@gmail.com'
              className={styles.link}>
              sifmeop@gmail.com
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Contacts
