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
        <ProgressBlock titleText="zephaniahdev.com (React project)" status="Mostly in working condition" discription="
          zephaniahdev.com is a new personal website I created with React and 
          three.js. It serves as a home to all my important profiles and 
          projects. Additionally, it contains an interactive user interface, and 
          customizable settings, made possible by the powerful features built 
          into React.
        "/>
        <ProgressBlock titleText="zephaniahsdata.com (React project)" status="If you are reading this it is done." discription="
          A personal project to display the data I have collected about my
          productivity. You are looking at it right now!
        "/>
        <ProgressBlock titleText="The Rust Programming Language (book)" status="~1/3 Complete" discription="
          Rust is a systems programming language I am learning for fun. I have
          a bit experience in c which makes coding in rust interesting because
          there are a number of significant differences between the two languages.
        "/>
        <ProgressBlock titleText="A Thousand Brains (book)" status="~3/4 complete" discription="
          Each row represents a day and each box represents
          a 15 minute block in a day. Not very nice to look at, right?
          Thats where this site comes in. Here you will find a human
          readable version of the data.
        "/>
        <ProgressBlock titleText="MIT 6.S191: Introduction to Deep Learning (class)" status="Completed August 9, 2023" discription="
          I took this class durring the 2023 summer to self-study AI and neural networks.
          My lab work and final project have been posted on my GitHub.
        "/>
        <ProgressBlock titleText="tinyfilter (python package)" status="Version 1.0.1 (stable release August 7, 2023)" discription="
          tinyfilter is the computer vision equivalent to Andrej Karpathy 
          micrograd. It convert images into ASCII art using the principles of 
          CNNs (convolutional neural networks). The project has been open sourced
          on PyPi (to install run pip install tinyfilter). The code is also 
          availible on my GitHub.
        "/>
        <ProgressBlock titleText="roestories.com (website)" status="Completed for release on July 19, 2023" discription="
          This is a portfolio website for my dad, featuring all his work from the over 30 years he spent in journalism. 
          The site features an intuitive user interface for searching through a large volume of work.
        "/>
        <ProgressBlock titleText="zephysballoons.com (website)" status="Completed for release on July 18, 2023" discription="
          zephysballoons.com is a very simple personal website for my balloon 
          twisting business.
        "/>
        <ProgressBlock titleText="Recreating 2048 (python project)" status="Complete and up to date" discription="
          Using python I created a text user interface for the popular game 2048 
          and wrote an algorithm that beats the game ~30% of the time. The code
          is availible on my GitHub.
        "/>
        <ProgressBlock titleText="Letter Predictor (python project)" status="Completed June 13, 2023" discription="
          Using a linear regression model and publicly available data, my letter 
          predictor predicts the final letter in five-letter words.
        "/>
      </div>
      <Footer />
    </div>
  )
}

export default Progress