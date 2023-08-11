import styles from './OpeningText.module.css'
import HomeButton from '../HomeButton/HomeButton'

{/* <div class="text-div">
  <h1 class="intro-text">Hello, world. My name is Zephaniah.</h1>
  <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Sofia+Sans:300">
  <div class="discription">
    <p>
      For the last few months I have been
      tracking how I spend each 15 minute block of time. Every day.
      Every hour. No matter what. On this website you will find this data, updating by the minute, along
      with my what I am learning from it.
    </p>
  </div>
  <div class="link-list">
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Sofia+Sans:500">
    <div class="link-box">
      <h2>Veiw the data</h2>
    </div>
    <div class="link-box">
      <h2>What I've learned</h2>
    </div>
      <div class="link-box">
        <h2>Progress log</h2>
      </div>
  </div>
</div> */}

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
        <HomeButton text="Veiw the data" link="/about"/>
        <HomeButton text="What I've Learned" link="/about"/>
        <HomeButton text="Progress log" link="/about"/>
      </div>
    </div>
  )
}

export default OpeningText;