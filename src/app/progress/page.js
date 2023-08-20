import styles from '../outsidePages.module.css'
// import progressStyles from './page.module.css'
import Footer from '../components/Footer/Footer'
import ProgressBlock from '../components/ProgressBlock/ProgressBlock'

const Progress = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 className={styles.title}>My progress log</h1>
        <p>
          This page includes a list of all the things I have accomplished since
          I started recording this log along with items that I am currently working on. 
        </p>
        <p>
          I like to use this page as a kind of journal for the things I have
          worked on. I can look back and see what I was working on and
          what I should change. I also find it motivating to look at the items
          on this page that are still in progress. They serve as a kind of
          reminder to finish what I started.
        </p>
        <div className={styles.divider}></div>
        <p className={styles.boldCenter}>
          Each block below is a link. If the block includes a personal project or code I wrote,
          it links to the project or code. Otherwise, it links to an outside page 
          with information about the item.
        </p>
        <ProgressBlock titleText="AI Safety Fundamentals Alignment Course" 
                       status="Currently in progress" link="https://course.aisafetyfundamentals.com/alignment"
                       discription="
          I am currently taking the this course with a group of other interested
          students to self-study the potential impact of AI. I am unsure how I
          feel about a lot of the things discussed in the course but I find it
          very interesting to think about.
        "/>
        <ProgressBlock titleText="zephaniahdev.com (React project)" 
                       status="Ready for release on August 19, 2023" link="https://zephaniahdev.com/"
                       discription="
          zephaniahdev.com is a new personal website I created with React and 
          three.js. It serves as a home to all my important profiles and 
          projects. Additionally, it contains an interactive user interface, and 
          customizable settings, made possible by the powerful features built 
          into React.
        "/>
        <ProgressBlock titleText="zephaniahsdata.com (React project)" 
                       status="If you are reading this it is done." link="https://github.com/zroe1/productivity-site"
                       discription="
          A personal project to display the data I have collected about my
          productivity. You are looking at it right now!
        "/>
        <ProgressBlock titleText="The Rust Programming Language (book)" 
                       status="~1/3 Complete" link="https://doc.rust-lang.org/book/title-page.html"
                       discription="
          Rust is a systems programming language I am learning for fun. I have
          a bit experience in c which makes coding in rust interesting because
          there are a number of significant differences between the two languages.
        "/>
        <ProgressBlock titleText="A Thousand Brains (book)" 
                       status="~3/4 complete" link="https://www.numenta.com/resources/books/a-thousand-brains-by-jeff-hawkins/"
                       discription="
          Each row represents a day and each box represents
          a 15 minute block in a day. Not very nice to look at, right?
          Thats where this site comes in. Here you will find a human
          readable version of the data.
        "/>
        <ProgressBlock titleText="MIT 6.S191: Introduction to Deep Learning (class)" 
                       status="Completed August 9, 2023" link="https://github.com/zroe1/MIT-6.S191"
                       discription="
          I took this class durring the 2023 summer to self-study AI and neural networks.
          My lab work and final project have been posted on my GitHub.
        "/>
        <ProgressBlock titleText="tinyfilter (python package)" 
                       status="Version 1.0.1 (stable release August 7, 2023)" link="https://github.com/zroe1/tinyfilter"
                       discription="
          tinyfilter is the computer vision equivalent to Andrej Karpathy 
          micrograd. It converts images into ASCII art using the principles of 
          CNNs (convolutional neural networks). The project has been open sourced
          on PyPi (to install run pip install tinyfilter). The code is also 
          availible on my GitHub.
        "/>
        <ProgressBlock titleText="roestories.com (website)" 
                       status="Completed for release on July 19, 2023" link="https://roestories.com/"
                       discription="
          This is a portfolio website for my dad, featuring all his work from the over 30 years he spent in journalism. 
          The site features an intuitive user interface for searching through a large volume of work.
        "/>
        <ProgressBlock titleText="zephysballoons.com (website)" 
                       status="Completed for release on July 18, 2023" link="https://zephysballoons.com/"
                       discription="
          zephysballoons.com is a very simple personal website for my balloon 
          twisting business.
        "/>
        <ProgressBlock titleText="Letter predictor (python project)" 
                       status="Completed June 13, 2023" link="https://github.com/zroe1/letter-predictor"
                       discription="
          Using a linear regression model and publicly available data, my letter 
          predictor predicts the final letter in five-letter words.
        "/>
        <ProgressBlock titleText="Recreating 2048 (python project)" 
                       status="Completed June 12, 2023" link="https://github.com/zroe1/2048-python"
                       discription="
          Using python I created a text user interface for the popular game 2048 
          and wrote an algorithm that beats the game ~30% of the time. The code
          is availible on my GitHub.
        "/>
      </div>
      <Footer />
    </div>
  )
}

export default Progress