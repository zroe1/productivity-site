import styles from './ProgressBlock.module.css'

const ProgressBlock = (props) => {
    return (
        <div className={styles.progressBlock}>
            <h2 className={styles.blockTitle}>{props.titleText} (book)</h2>
            <p><b>Status:</b> {props.status}</p>
            <p>
                {props.discription}
            </p>
        </div>
    )
}

export default ProgressBlock;