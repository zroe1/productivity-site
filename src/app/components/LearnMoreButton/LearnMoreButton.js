import styles from './LearnMoreButton.module.css'
import Link from 'next/link';

const LearnMoreButton = () => {
  return (
    <Link className={styles.linkBox} href="/about">
      Learn More
    </Link>
  )
}

export default LearnMoreButton