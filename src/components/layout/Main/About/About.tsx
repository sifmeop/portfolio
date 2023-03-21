import AboutImg from 'assets/images/about.webp'
import Section from 'components/Section/Section'
import styles from './About.module.scss'

const About = () => {
  return (
    <Section id='about'>
      <div className={styles.about}>
        <img src={AboutImg} alt='' className={styles.photo} />
        <div>
          <h1 className={styles.title}>ABOUT ME</h1>
          <h3 className={styles.subtitle}>
            "Building Better Web Experiences: A Collection of My Frontend
            Projects"
          </h3>
          <p className={styles.description}>
            As a frontend developer, my portfolio showcases my expertise in
            creating responsive and user-friendly websites. It includes examples
            of my proficiency in HTML, CSS(SCSS), JavaScript(TypeScript) and
            React. Additionally, it highlights my ability to collaborate with
            designers and developers to create visually appealing and efficient
            web applications. Through my portfolio, I aim to demonstrate my
            commitment to staying up-to-date with the latest technologies and
            trends in frontend development.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default About
