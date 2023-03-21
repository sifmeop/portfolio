import About from './About/About'
import Contacts from './Contact/Contact'
import Hero from './Hero/Hero'
import styles from './Main.module.css'
import Projects from './Projects/Projects'

const Main = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Projects />
      <Contacts />
    </main>
  )
}

export default Main
