import Section from 'components/Section/Section'
import { projects } from './list-projects'
import styles from './Projects.module.css'

const Projects = () => {
  return (
    <Section title='PROJECTS'>
      <div>
        {projects.map((project) => (
          <div key={project.id} className={styles.project}>
            <div className={styles.imageWrapper}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
              />
            </div>
            <div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div>
                <a href={project.code}>Code</a>
                <a href={project.demo}>Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Projects
