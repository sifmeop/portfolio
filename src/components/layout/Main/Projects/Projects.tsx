import Section from 'components/Section/Section'
import { projects } from './list-projects'
import ProjectCard from './ProjectCard/ProjectCard'
import styles from './Projects.module.scss'

const Projects = () => {
  return (
    <Section id='projects'>
      <h1 className={styles.title}>PROJECTS</h1>
      <h3 className={styles.subtitle}>sift - a series of unique projects 📈</h3>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}

export default Projects
