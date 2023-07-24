import Link from 'next/link'
import styles from './Navigation.module.css'

const links = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'About',
    route: '/about'
  },
  {
    label: 'Projects',
    route: '/projects'
  }
]

export function Navigation () {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul className={styles.ult}>
          {links.map(({ label, route }) => (
            <li className={styles.litem} key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
