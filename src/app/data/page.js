import styles from '../outsidePages.module.css'
import Footer from '../components/Footer/Footer'

const Data = () => {
    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <h1 className={styles.title}>The data</h1>
          <p>
            This page displays all the data I have been collecting about my life
            in human readable form. In my spreadsheet I chart how I spend each
            15 minute interval of time. These are the categories I use:
          </p>
          <ol>
            <li><b>Programming: </b>coding and homework for coding classes</li>
            <li><b>Homework: </b>homework for school (not counting coding classes)</li>
            <li><b>Class: </b>time in class for school</li>
            <li><b>No-credit class: </b>focused independent study time</li>
            <li><b>Work: </b>time spent making money</li>
            <li><b>Project and networking: </b>independent project or career-building activities</li>
            <li><b>Reading/podcast: </b>also a broader casual learning category</li>
            <li><b>Social: </b>time with friends and family</li>
            <li><b>Phone/Youtube/TV: </b>this is for screentime that isn't educational</li>
            <li><b>Balloon twisting: </b>time spent making balloon animals</li>
            <li><b>Walking: </b>walking for travel or fun</li>
            <li><b>School club: </b>club events/club organizing</li>
            <li><b>Sleep: </b>time sleeping/trying to sleep</li>
            <li><b>Unstructured/Errand: </b>cleaning, laundry, doctor appointment, ect.</li>
            <li><b>Eat/shower: </b>includes things like brushing teeth, washing face, ect.</li>
          </ol>
          <p>
            It is worth noting that I started recording data durring the end of 
            my spring quarter of my freshman year at UChicago so there isn't much 
            data for time I spend in class or on homework. As a result, the data
            below is deceptively low in these categories.
          </p>
          <div className={styles.divider}></div>
          <h2 className={styles.secondTitle}>One big chart</h2>
          <p>
            This is a pie chart of the total time I have spent on each category
            since I began recording:
          </p>
          <iframe className={styles.desktopGraph} width="446" height="278" seamless frameBorder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=1147066034&amp;format=interactive"></iframe>
          <h2 className={styles.secondTitle}>Today's data</h2>
          <p>
            This is the data for what I have done so far today. Today's date should
            be in the title of the graph. If there is no data and it is early in
            morning, I am probably sleeping and have not gotten up yet and charted
            my sleeping time.
          </p>
          <iframe className={styles.desktopGraph} width="446" height="317" seamless frameBorder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=213546913&amp;format=interactive"></iframe>
          <h2 className={styles.secondTitle}>Weekly coding average</h2>
          <p>
            This chart shows my weekly coding average over time. In the summer,
            I shoot for around 30 hours a week. Durring the school year, I
            shoot for closer to 15.
          </p>
          <iframe className={styles.desktopGraph} width="446" height="278" seamless frameBorder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=2842228&amp;format=interactive"></iframe>
          <h2 className={styles.secondTitle}>Weekly social average</h2>
          <p>
            This chart shows my weekly social average over time. It includes
            both time I spend with friends and family.
          </p>
          <iframe className={styles.desktopGraph} width="446" height="278" seamless frameBorder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=506268619&amp;format=interactive"></iframe>
          <h2 className={styles.secondTitle}>Weekly sleep average</h2>
          <p>
            This chart shows my weekly sleep average over time. As you can see,
            I prioritize sleep and the average stays consistently high over time.
          </p>
          <iframe className={styles.desktopGraph} width="446" height="278" seamless frameBorder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=1860419165&amp;format=interactive"></iframe>
          <h2 className={styles.secondTitle}>Spring quarter classes</h2>
          <p>
            I don't have a lot of data for the time I spend in school becuase I
            only started recording near the end of last school year. But I still
            wanted to include this graph breaking up my homework by class because
            I think it is interesting. The Latin and biology averages go to almost
            0 near the end because I finished those classes first.
          </p>
          <iframe className={styles.desktopGraph} width="446" height="269" seamless frameBorder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=1411807317&amp;format=interactive"></iframe>
        </div>
        <Footer />
      </div>
    )
}

export default Data;