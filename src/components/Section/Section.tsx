import { ReactNode } from 'react'
import styles from './Section.module.css'

interface Props {
  id: string
  children: ReactNode
}

const Section = ({ id, children }: Props) => {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.container}>{children}</div>
    </section>
  )
}

export default Section
