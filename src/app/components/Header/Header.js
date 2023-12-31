import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header className={styles.pageHead}>
        <a href="../../">
          <img className={styles.icon} src="graphlogo.png" alt="logo"></img>
        </a>
        <Link className={styles.headerTitle} href="../../">zephaniahsdata.com</Link>
        <nav className={styles.desktopMenu}>
          <Link className={`${styles.navLink} ${styles.desktopMenuLink}`} href="/">Home</Link>
          <a className={`${styles.navLink} ${styles.desktopMenuLink}` }  href="/data">Data</a>
          <Link className={`${styles.navLink} ${styles.desktopMenuLink}`} href="/progress">Progress</Link>
          <Link className={`${styles.navLink} ${styles.desktopMenuLink}`} href="/about">About</Link>
          <a className={`${styles.navLink} ${styles.desktopMenuLink}`} href="https://github.com/zroe1/productivity-site" target="_blank">GitHub</a>
          <a href="https://github.com/zroe1/productivity-site" target="_blank"><img src="github-mark.png" alt="github" className={styles.githubLogo}></img></a>
        </nav>
      </header>
      <nav className={styles.mobileMenu}>
        <a className={styles.navLink} href="/">Home</a>
        <a className={styles.navLink} href="/data">Data</a>
        <a className={styles.navLink} href="/progress">Progress</a>
        <a className={styles.navLink} href="/about">About</a>
      </nav>
    </>
  )
}

export default Header;