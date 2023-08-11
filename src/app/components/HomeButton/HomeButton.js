import styles from './HomeButton.module.css'
import Link from 'next/link';

const HomeButton = (props) => {
  return (
    <Link className={styles.linkBox} href={props.link}>
      {props.text}
    </Link>
  )
}

export default HomeButton