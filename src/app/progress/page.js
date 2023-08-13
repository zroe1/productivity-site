import styles from '../outsidePages.module.css'
// import progressStyles from './page.module.css'
import Footer from '../components/Footer/Footer'
import ProgressBlock from '../components/ProgressBlock/ProgressBlock'

const Progress = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 className={styles.title}>My progess log</h1>
        <p>
          Put simply, this site is a public display of all the personal
          data I have been collecting in a spreadsheet for the last
          few months. This site automatically updates as I input new 
          data into the spreadsheet so the wesite is always up-to-date and 
          accurate. The raw spreadsheet looks like this:
        </p>
        <p>
          Each row represents a day and each box represents
          a 15 minute block in a day. Not very nice to look at, right?
          Thats where this site comes in. Here you will find a human
          readable version of the data.
        </p>
        <p>
          For more information about the
          categories I track for and what I spend the most time on, navigate to the 'Data' page on
          the menu.
        </p>
        {/* <div className={styles.divider}></div> */}
        <ProgressBlock titleText="A Thousand Brains" status="~3/4 complete" discription="
        Each row represents a day and each box represents
        a 15 minute block in a day. Not very nice to look at, right?
        Thats where this site comes in. Here you will find a human
        readable version of the data.
        "/>
      </div>
      <Footer />
    </div>
  )
}

export default Progress