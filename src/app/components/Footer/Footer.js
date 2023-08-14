{/* <footer id="footer">
    <div class="footer-left">
      <h3 class="footer-title">Roe Stories</h3>
      <p class="footer-text footer-discription">A compilation of investigations by Pulitzer Prize-winning journalist Sam
        Roe.</p>
      <p class="footer-email">sroe@colum.edu</p>
    </div>
    <div class="footer-mid">
      <a href="sectionpages/publichealth.html" class="footer-text">Public health</a>
      <a href="sectionpages/business.html" class="footer-text">Business</a>
      <a href="sectionpages/environment.html" class="footer-text">Environment</a>
      <a href="sectionpages/policeshootings.html" class="footer-text">Police shootings</a>
      <a href="sectionpages/nursing.html" class="footer-text">Nursing care</a>
      <a href="sectionpages/nationalsecurity.html" class="footer-text mobile-only">National security</a>
      <a href="sectionpages/projectsiveedited.html" class="footer-text mobile-only">Editing</a>
      <a href="sectionpages/about.html" class="footer-text mobile-only">About</a>
    </div>
    <div class="footer-right">
      <a href="sectionpages/nationalsecurity.html" class="footer-text">National security</a>
      <a href="sectionpages/projectsiveedited.html" class="footer-text">Editing</a>
      <a href="sectionpages/about.html" class="footer-text">About</a>
    </div>
    <div class="bottom-footer-text">
      Roe web-development ©2023
    </div>
  </footer> */}

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
                <Link href="/" className={styles.footerText}>Data</Link>
                <Link href="/findings" className={styles.footerText}>Findings</Link>
                <Link href="/progress" className={styles.footerText}>Progress</Link>
                <Link href="/" className={styles.footerText}>About</Link>
            </div>
            <div className={styles.footerRight}>
                <a href="https://github.com/zroe1" target="_blank" className={styles.footerText}>Github</a>
                <Link href="https://zephaniahdev.com/" target="_blank" className={styles.footerText}>zephaniahdev.com</Link>
                <p className={styles.footerText}>zroe@uchicago.edu</p>
            </div>
            <div className={styles.bottomFooterText}>
                Roe web-development ©2023
            </div>
        </footer>
    )
}

export default Footer;