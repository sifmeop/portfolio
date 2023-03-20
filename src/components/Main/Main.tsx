import About from './About/About'
import Contact from './Contact/Contact'
import Hero from './Hero/Hero'
import styles from './Main.module.css'
import Projects from './Projects/Projects'

const Main = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

export default Main
