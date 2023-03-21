import { memo } from 'react'
import styles from './BurgerMenu.module.scss'

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
}

const BurgerMenu = ({ open, setOpen }: Props) => {
  return (
    <div
      className={
        open ? `${styles.burgerMenu} ${styles.open}` : styles.burgerMenu
      }
      onClick={() => setOpen(!open)}>
      <span />
      <span />
      <span />
      <span />
    </div>
  )
}

export default memo(BurgerMenu)
