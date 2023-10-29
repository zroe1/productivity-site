import styles from './OpeningText.module.css'
import HomeButton from '../HomeButton/HomeButton'

const OpeningText = () => {
  return (
    <div className={styles.textDiv}>
      <h1 className={styles.introText}>Hello, world. My name is Zephaniah.</h1>
      <div className={styles.discription}>
        <p className={styles.discriptionText}>
          For the last four months I have been tracking how I spend each 15 
          minute block of time. Every day. Every hour. No matter what. This 
          website displays that data, updating by the minute, along
          with what I am learning from it.
        </p>
      </div>
      <div className={styles.linkList}>
        <HomeButton text="View the data" link="/data"/>
        <HomeButton text="Progress log" link="/progress"/>
        <HomeButton text="Open in GitHub" link="https://github.com/zroe1/productivity-site"/>
      </div>
    </div>
  )
}

export default OpeningText;