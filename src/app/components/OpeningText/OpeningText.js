import styles from './OpeningText.module.css'
import HomeButton from '../HomeButton/HomeButton'

const OpeningText = () => {
  return (
    <div className={styles.textDiv}>
      <h1 className={styles.introText}>Hello, world. My name is Zephaniah.</h1>
      <div className={styles.discription}>
        <p className={styles.discriptionText}>
          For the last few months I have been tracking how I spend each 15 
          minute block of time. Every day. Every hour. No matter what. On this 
          website you will find this data, updating by the minute, along
          with my what I am learning from it.
        </p>
      </div>
      <div className={styles.linkList}>
        <HomeButton text="Veiw the data" link="/data"/>
        <HomeButton text="Progress log" link="/progress"/>
        <HomeButton text="Open in GitHub" link="/findings"/>
      </div>
    </div>
  )
}

export default OpeningText;