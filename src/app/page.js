import styles from './page.module.css'
import OpeningText from './components/OpeningText/OpeningText'
import LearnMoreButton from './components/LearnMoreButton/LearnMoreButton'

export default function Home() {

  return (
    <main>
      <div className={styles.container}>
        <OpeningText />
        <img className={styles.homeGraphic} src="temp.png"></img>
      </div>
      <div className={styles.homePageBottom}>
        <LearnMoreButton />
      </div>
    </main>
  )
}
