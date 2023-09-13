import styles from "./Footer.module.css"
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <h3 className={styles.footerTitle}>zephaniahsdata.com</h3>
        <div className={styles.shortDivider}></div>
        <p className={`${styles.footerText} ${styles.footerDiscription}`}>For the last few months I have been tracking how I spend each 
            15 minute block of time. Every day. Every hour. No matter what. 
        </p>
      </div>
      <div className={styles.footerMid}>
        <Link href="/" className={styles.footerText}>Home</Link>
        <Link href="/data" className={styles.footerText}>Data</Link>
        <Link href="/progress" className={styles.footerText}>Progress</Link>
        <Link href="/about" className={styles.footerText}>About</Link>
        <Link href="https://github.com/zroe1/productivity-site" className={styles.footerText}>GitHub</Link>
      </div>
      <div className={styles.footerRight}>
        <p className={styles.footerText}><b>About me:</b></p>
        <Link href="https://zephaniahdev.com/" target="_blank" className={styles.footerText}>zephaniahdev.com</Link>
        <Link href="https://github.com/zroe1" target="_blank" className={styles.footerText}>github.com/zroe1</Link>
        <p className={styles.footerText}>zroe@uchicago.edu</p>
      </div>
      <div className={styles.bottomFooterText}>
        Roe web-development ©2023
      </div>
    </footer>
  )
}

export default Footer;