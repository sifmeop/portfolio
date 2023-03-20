import { ReactNode } from 'react'
import styles from './Section.module.css'

interface Props {
  title: string
  children: ReactNode
}

const Section = ({ title, children }: Props) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  )
}

export default Section
