import styles from "../outsidePages.module.css";
import Footer from "../components/Footer/Footer";

const Data = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 className={styles.title}>The data</h1>
        <p>
          This page displays all the data I have been collecting about my life in human readable
          form. In my spreadsheet I chart how I spend each 15 minute interval of time. These are the
          categories I use:
        </p>
        <ol>
          <li>
            <b>Programming: </b>coding and homework for coding classes
          </li>
          <li>
            <b>Homework: </b>homework for school (not counting coding classes)
          </li>
          <li>
            <b>Class: </b>time in class for school
          </li>
          <li>
            <b>No-credit class: </b>focused independent study time
          </li>
          <li>
            <b>Work: </b>time spent making money
          </li>
          <li>
            <b>Project and networking: </b>independent project or career-building activities
          </li>
          <li>
            <b>Reading/podcast: </b>also a broader casual learning category
          </li>
          <li>
            <b>Social: </b>time with friends and family
          </li>
          <li>
            <b>Phone/Youtube/TV: </b>this is for screen time that isn't educational
          </li>
          <li>
            <b>Balloon twisting: </b>time spent making balloon animals
          </li>
          <li>
            <b>Walking: </b>walking for travel or fun
          </li>
          <li>
            <b>School club: </b>club events/club organizing
          </li>
          <li>
            <b>Sleep: </b>time sleeping/trying to sleep
          </li>
          <li>
            <b>Unstructured/errand: </b>cleaning, laundry, doctor appointment, ect.
          </li>
          <li>
            <b>Eat/shower: </b>includes things like cooking, brushing teeth, washing face, ect.
          </li>
        </ol>
        <p>
          It is worth noting that I started recording data during the end of my spring quarter of my
          first year at UChicago so the data below is deceptively low in the homework and class
          categories.
        </p>
        <div className={styles.divider}></div>
        <h2 className={styles.secondTitle}>One big chart</h2>
        <p>
          This is a pie chart of the total time I have spent on each category since I began
          recording:
        </p>
        <iframe
          className={styles.desktopGraph}
          width="446"
          height="278"
          seamless
          frameBorder="0"
          scrolling="no"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=1147066034&amp;format=interactive"></iframe>
        <iframe
          className={styles.mobileGraph}
          width="362"
          height="226"
          seamless
          frameborder="0"
          scrolling="no"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=1691080723&amp;format=interactive"></iframe>
        <h2 className={styles.secondTitle}>Today's data</h2>
        <p>
          This is the data for what I have done so far today. Today's date should be in the title of
          the graph. I manually switch over the dates each morning to force myself to reflect on the
          data from the past day, so if you are seeing a previous day, it is probably because I'm
          still sleeping (or in a place where I don't have WIFI).
        </p>
        <iframe
          className={styles.desktopGraph}
          width="446"
          height="317"
          seamless
          frameBorder="0"
          scrolling="no"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=213546913&amp;format=interactive"></iframe>
        <iframe
          className={styles.mobileGraph}
          width="362"
          height="260"
          seamless
          frameborder="0"
          scrolling="no"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=1937919038&amp;format=interactive"></iframe>
        <h2 className={styles.secondTitle}>Weekly coding average</h2>
        <p>
          This chart shows my weekly coding average over time. In the summer, I shoot for around 30
          hours a week. During the school year, I shoot for closer to 15.
        </p>
        <p>
          <b>Note: </b>this chart and others like it on the site start at 5/5/23 and continue into
          the present.
        </p>
        <iframe
          className={styles.desktopGraph}
          width="446"
          height="278"
          seamless
          frameBorder="0"
          scrolling="no"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=2842228&amp;format=interactive"></iframe>
        <iframe
          className={styles.mobileGraph}
          width="362"
          height="226"
          seamless
          frameborder="0"
          scrolling="no"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=2044341286&amp;format=interactive"></iframe>
        <h2 className={styles.secondTitle}>Weekly social average</h2>
        <p>
          This chart shows my weekly social average over time. It includes both time I spend with
          friends and family.
        </p>
        <iframe
          className={styles.desktopGraph}
          width="446"
          height="278"
          seamless
          frameBorder="0"
          scrolling="no"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=506268619&amp;format=interactive"></iframe>
        <iframe
          className={styles.mobileGraph}
          width="362"
          height="226"
          seamless
          frameborder="0"
          scrolling="no"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=1044246277&amp;format=interactive"></iframe>
        <h2 className={styles.secondTitle}>Weekly sleep average</h2>
        <p>
          This chart shows my weekly sleep average over time. As you can see, I prioritize sleep and
          the average stays consistently high over time.
        </p>
        <iframe
          className={styles.desktopGraph}
          width="446"
          height="278"
          seamless
          frameBorder="0"
          scrolling="no"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=1860419165&amp;format=interactive"></iframe>
        <iframe
          className={styles.mobileGraph}
          width="362"
          height="226"
          seamless
          frameborder="0"
          scrolling="no"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=576926545&amp;format=interactive"></iframe>

        <h2 className={styles.secondTitle}>Sping quarter classes (2024)</h2>
        <p>
          This is data for my current classes for the spring quarter of the 2024 school year. The
          y-axis represents the weekly average time spent per class.
        </p>
        <p>
          <b>Note: </b>the computer science category includes time I spend working on personal
          coding projects.
        </p>
        <iframe
          className={styles.desktopGraph}
          width="446"
          height="269"
          seamless
          frameborder="0"
          scrolling="no"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=1586248796&amp;format=interactive"></iframe>
        <iframe
          className={styles.mobileGraph}
          width="362"
          height="220"
          seamless
          frameborder="0"
          scrolling="no"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=1586248796&amp;format=interactive"></iframe>

        <h2 className={styles.secondTitle}>Winter quarter classes (2024)</h2>
        <p>
          This is data for my current classes for the winter quarter of the 2024 school year. The
          y-axis represents the weekly average time spent per class.
        </p>
        <p>
          <b>Note: </b>the computer science category includes time I spend working on personal
          coding projects.
        </p>
        <iframe
          className={styles.desktopGraph}
          width="446"
          height="269"
          seamless
          frameborder="0"
          scrolling="no"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=1706511168&amp;format=interactive"></iframe>
        <iframe
          className={styles.mobileGraph}
          width="362"
          height="220"
          seamless
          frameborder="0"
          scrolling="no"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=1706511168&amp;format=interactive"></iframe>

        <h2 className={styles.secondTitle}>Fall quarter classes (2023)</h2>
        <p>
          This is data for my current classes for the fall quarter of the 2023 school year. The
          y-axis represents the weekly average time spent per class.
        </p>
        <p>
          <b>Note: </b>the computer science category includes time I spend working on personal
          coding projects.
        </p>
        <iframe
          className={styles.desktopGraph}
          width="446"
          height="269"
          seamless
          frameborder="0"
          scrolling="no"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=1476576617&amp;format=interactive"></iframe>
        <iframe
          className={styles.mobileGraph}
          width="362"
          height="220"
          seamless
          frameborder="0"
          scrolling="no"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=1647836483&amp;format=interactive"></iframe>
        <h2 className={styles.secondTitle}>Spring quarter classes (2023)</h2>
        <p>
          I don't have a lot of data for this quarter because I only started recording near the end
          of last school year. But I still wanted to include this graph because I had separate
          categories for homework in each class and I think the breakdown is interesting. The Latin
          and biology averages go to almost 0 near the end because I finished those classes first.
        </p>
        <p>
          <b>Note: </b>this chart begins on 5/5/23 and ends on 5/25/23.
        </p>
        <iframe
          className={styles.desktopGraph}
          width="446"
          height="269"
          seamless
          frameBorder="0"
          scrolling="no"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=1411807317&amp;format=interactive"></iframe>
        <iframe
          className={styles.mobileGraph}
          width="362"
          height="220"
          seamless
          frameborder="0"
          scrolling="no"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQM2aZd61dMcmqW3tL_ISD3HO46ElesE-DKvzRQAu0NpaiNCNQ6E19O78mnyasZVwuwD7q0pzSqnkua/pubchart?oid=917596236&amp;format=interactive"></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Data;
