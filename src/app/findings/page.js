import styles from '../outsidePages.module.css'
import Footer from '../components/Footer/Footer'

const Findings = () => {
    return (
        <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 className={styles.title}>What I have learned from the data</h1>
        <p>
          This page is intended to give an overall picture of the data I have
          collected and some lessons I have learned from it. I like to think
          of this page as an informal "findings" section.
        </p>
        <h2 className={styles.secondTitle}>1. Wasted time comes in small blocks, not big ones. </h2>
        <p>
          My intuition, when I started collecting my data, was that wasting time
          looked something like sitting on the couch for four hours watching TV.
          For me personally, this turns out to not be true.
        </p>
        <p>
          Most of my wasted time comes in small periods in between different activities
          which add up over time. Sometimes, I don't feel lazy, but when I look
          back at the data I collected, I realize that I didn't actually do anything all day.
        </p>
        <p>
          Large blocks of wasted time (e.g., watching a few hours of TV), are largly
          insignificant because they become outweighed by everything
          else in my life. Realizing this made me think differently about wasting
          time. I now believe that there is nothing wrong with watching a few hours
          of TV in a week as long as I don't get distracted durring transition
          periods.
        </p>
        <h2 className={styles.secondTitle}>2. I'm not as great as I thought</h2>
        <p>
          My intuition, when I started collecting my data, was that wasting time
          looked something like sitting on the couch for four hours watching TV.
          For me personally, this turns out to not be true.
        </p>
        <h2 className={styles.secondTitle}>3. Good things take lots and lots and lots of time.</h2>
        <p>
          My intuition, when I started collecting my data, was that wasting time
          looked something like sitting on the couch for four hours watching TV.
          For me personally, this turns out to not be true.
        </p>
        <h2 className={styles.secondTitle}>4. Being consistently productive is painful, dificult, and rewarding.</h2>
        <p>
          My intuition, when I started collecting my data, was that wasting time
          looked something like sitting on the couch for four hours watching TV.
          For me personally, this turns out to not be true.
        </p>
        {/* <div className={styles.divider}></div> */}
        
      </div>
      <Footer />
    </div>
    )
}

export default Findings;