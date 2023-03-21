import { useEffect, useState } from 'react'

import BurgerMenu from './BurgerMenu/BurgerMenu'
import styles from './Header.module.css'

interface Link {
  id: number
  title: string
  href: string
}

const links: Link[] = [
  { id: 1, title: 'Home', href: '#home' },
  { id: 2, title: 'About', href: '#about' },
  { id: 3, title: 'Projects', href: '#projects' },
  { id: 4, title: 'Contact', href: '#contact' }
]

const Header = () => {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  return (
    <header className={styles.header}>
      <h1 className={styles.creator}>sifmeop</h1>
      <nav className={open ? `${styles.menu} ${styles.open}` : styles.menu}>
        <ul className={styles.list}>
          {links.map((link) => (
            <li key={link.id} className={styles.item}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <BurgerMenu open={open} setOpen={setOpen} />
    </header>
  )
}

export default Header
