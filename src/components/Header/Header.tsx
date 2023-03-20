import styles from './Header.module.css'

interface Link {
  id: number
  title: string
  href: string
}

const Header = () => {
  const links: Link[] = [
    { id: 1, title: 'Home', href: '#home' },
    { id: 2, title: 'About', href: '#about' },
    { id: 3, title: 'Projects', href: '#projects' },
    { id: 4, title: 'Contact', href: '#contact' }
  ]

  return (
    <header className={styles.header}>
      <h1 className={styles.creator}>sifmeop</h1>
      <nav>
        <ul className={styles.list}>
          {links.map((link) => (
            <li key={link.id} className={styles.item}>
              <a href={link.href} className={styles.link}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
