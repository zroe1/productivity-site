import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header className={styles.pageHead}>
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <a href="../../">
          <img className={styles.icon} src="graphlogo.png" alt="logo"></img>
        </a>
        <Link className={styles.headerTitle} href="../../">zephaniahsdata.com</Link>
        <nav className={styles.desktopMenu}>
          <Link className={`${styles.navLink} ${styles.desktopMenuLink}`} href="/">Home</Link>
          <a className={`${styles.navLink} ${styles.desktopMenuLink}` }  href="/data">Data</a>
          <Link className={`${styles.navLink} ${styles.desktopMenuLink}`} href="/progress">Progress</Link>
          <Link className={`${styles.navLink} ${styles.desktopMenuLink}`} href="/about">About</Link>
          <a className={`${styles.navLink} ${styles.desktopMenuLink}`}>GitHub</a>
          {/*eslint-disable-next-line @next/next/no-img-element*/}
          <img src="github-mark.png" alt="github" className={styles.githubLogo}></img>
        </nav>
      </header>
      <nav className={styles.mobileMenu}>
        <a className={styles.navLink}>Data</a>
        <a className={styles.navLink}>Findings</a>
        <a className={styles.navLink}>Progress</a>
        <a className={styles.navLink}>About</a>
      </nav>
    </>
  )
}

export default Header;