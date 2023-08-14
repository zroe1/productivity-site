import styles from './Header.module.css'
// import Image from 'next/image'
import Link from 'next/link';

{/* <header>
  <img height="35px" class="icon" src="graphlogo.png" alt="">
  <h1 class="header-title">zephaniahsdata.com</h1>
  <menu class="desktop-menu">
    <a class="header-menu desktop-menu-link" href="#">Data</a>
    <a class="header-menu desktop-menu-link" href="#">Results</a>
    <a class="header-menu desktop-menu-link" href="#">Progress</a>
    <a class="header-menu desktop-menu-link" href="#">About</a>
    <a class="header-menu desktop-menu-link" href="#">GitHub</a>
    <img src="github-mark/github-mark.png" alt="github" class="github-logo">
  </menu>
</header>
<menu class="mobile-menu">
  <a class="header-menu" href="#">Data</a>
  <a class="header-menu" href="#">Results</a>
  <a class="header-menu" href="#">Progress</a>
  <a class="header-menu" href="#">About</a>
</menu> */}

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
          <a className={`${styles.navLink} ${styles.desktopMenuLink}` }>Data</a>
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