import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

import Section from 'components/Section/Section'
import { projects } from './list-projects'
import styles from './Projects.module.scss'

const Projects = () => {
  return (
    <Section id='projects'>
      <h1 className={styles.title}>PROJECTS</h1>
      <h3 className={styles.subtitle}>sift - a series of unique projects 📈</h3>
      <div>
        {projects.map((project) => (
          <div key={project.id} className={styles.project}>
            <div className={styles.imageWrapper}>
              <a
                target='_blank'
                href={project.demo}
                style={{ backgroundImage: `url(${project.image})` }}
                className={styles.image}>
                {/* <img */}
                {/* src={project.image} */}
                {/* alt={project.title} */}
                {/* className={styles.image} */}
                {/* /> */}
              </a>
            </div>
            <div className={styles.info}>
              <h2 className={styles.name}>{project.title}</h2>
              {/* <p className={styles.description}>{project.description}</p> */}
              <ul className={styles.list}>
                {project.stack.map((technology) => (
                  <li key={technology} className={styles.item}>
                    {technology}
                  </li>
                ))}
              </ul>
              <div className={styles.links}>
                <a target='_blank' href={project.code} className={styles.link}>
                  Code
                  <FaGithub size='1.3rem' />
                </a>
                <a target='_blank' href={project.demo} className={styles.link}>
                  Live Demo
                  <FaExternalLinkAlt size='1.3rem' />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Projects
