import styles from './ProgressBlock.module.css'

const ProgressBlock = (props) => {
  return (
    <a className={styles.progressLink} href={props.link} target="_blank">
      <div className={styles.progressBlock}>
        <h2 className={styles.blockTitle}>{props.titleText}</h2>
        <p><b>Status:</b> {props.status}</p>
        <p>
          {props.discription}
        </p>
      </div>
    </a>
  )
}

export default ProgressBlock;