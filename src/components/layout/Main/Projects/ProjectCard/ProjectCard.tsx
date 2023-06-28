import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

import { Project } from 'types/project.interface'
import styles from './ProjectCard.module.scss'

interface Props {
  project: Project
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className={styles.project}>
      <a target='_blank' href={project.demo} className={styles.imageWrapper}>
        <img src={project.image} alt={project.title} className={styles.image} />
      </a>
      <div className={styles.info}>
        <h2 className={styles.name}>{project.title}</h2>
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
  )
}

export default ProjectCard
