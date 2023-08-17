import styles from '../outsidePages.module.css'
import Footer from '../components/Footer/Footer'

const Data = () => {
    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <h1 className={styles.title}>The data</h1>
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
          <div className={styles.divider}></div>
          <h2 className={styles.secondTitle}>One big chart</h2>
          <p>
            Each row represents a day and each box represents
            a 15 minute block in a day. Not very nice to look at, right?
            Thats where this site comes in. Here you will find a human
            readable version of the data.
          </p>
          <iframe className={styles.desktopGraph} width="446" height="278" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=1147066034&amp;format=interactive"></iframe>
          <h2 className={styles.secondTitle}>Today's data</h2>
          <p>
            Each row represents a day and each box represents
            a 15 minute block in a day. Not very nice to look at, right?
            Thats where this site comes in. Here you will find a human
            readable version of the data.
          </p>
          <iframe className={styles.desktopGraph} width="446" height="317" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=213546913&amp;format=interactive"></iframe>
          <h2 className={styles.secondTitle}>Weekly coding average</h2>
          <p>
            Each row represents a day and each box represents
            a 15 minute block in a day. Not very nice to look at, right?
            Thats where this site comes in. Here you will find a human
            readable version of the data.
          </p>
          <iframe className={styles.desktopGraph} width="446" height="278" seamless frameBorder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=2842228&amp;format=interactive"></iframe>
          <h2 className={styles.secondTitle}>Weekly social average</h2>
          <p>
            Each row represents a day and each box represents
            a 15 minute block in a day. Not very nice to look at, right?
            Thats where this site comes in. Here you will find a human
            readable version of the data.
          </p>
          <iframe className={styles.desktopGraph} width="446" height="278" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=506268619&amp;format=interactive"></iframe>
          <h2 className={styles.secondTitle}>Weekly sleep average</h2>
          <p>
            Each row represents a day and each box represents
            a 15 minute block in a day. Not very nice to look at, right?
            Thats where this site comes in. Here you will find a human
            readable version of the data.
          </p>
          <iframe className={styles.desktopGraph} width="446" height="278" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=1860419165&amp;format=interactive"></iframe>
          <h2 className={styles.secondTitle}>Spring quarter classes</h2>
          <p>
            Each row represents a day and each box represents
            a 15 minute block in a day. Not very nice to look at, right?
            Thats where this site comes in. Here you will find a human
            readable version of the data.
          </p>
          <iframe className={styles.desktopGraph} width="446" height="269" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=1411807317&amp;format=interactive"></iframe>
        </div>
        <Footer />
      </div>
    )
}

export default Data;