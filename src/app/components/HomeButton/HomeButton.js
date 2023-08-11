import styles from './HomeButton.module.css'

const HomeButton = (props) => {
  return (
    <div className={styles.linkBox}>
      {props.text}
    </div>
  )
}

export default HomeButton