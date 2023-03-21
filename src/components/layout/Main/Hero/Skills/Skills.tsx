import Css from 'assets/icons/css.svg'
import Html from 'assets/icons/html.svg'
import Javascript from 'assets/icons/js.svg'
import Next from 'assets/icons/next.svg'
import ReactQuery from 'assets/icons/react-query.svg'
import React from 'assets/icons/react.svg'
import Redux from 'assets/icons/redux.svg'
import Sass from 'assets/icons/sass.svg'
import Tailwind from 'assets/icons/tailwind.svg'
import Typescript from 'assets/icons/typescript.svg'
import styles from './Skills.module.scss'

const Skills = () => {
  return (
    <div>
      <p className={styles.text}>Tech Stack</p>
      <ul className={styles.stack}>
        <li className={styles.technology}>
          <img src={Html} alt='HTML' />
        </li>
        <li className={styles.technology}>
          <img src={Css} alt='CSS' />
        </li>
        <li className={styles.technology}>
          <img src={Sass} alt='SCSS' />
        </li>
        <li className={styles.technology}>
          <img src={Tailwind} alt='Tailwind' />
        </li>
        <li className={styles.technology}>
          <img src={Javascript} alt='JS' />
        </li>
        <li className={styles.technology}>
          <img src={Typescript} alt='TS' />
        </li>
        <li className={styles.technology}>
          <img src={React} alt='React' />
        </li>
        <li className={styles.technology}>
          <img src={Next} alt='Next' />
        </li>
        <li className={styles.technology}>
          <img src={Redux} alt='Redux' />
        </li>
        <li className={styles.technology}>
          <img src={ReactQuery} alt='React-Query' />
        </li>
      </ul>
    </div>
  )
}

export default Skills
