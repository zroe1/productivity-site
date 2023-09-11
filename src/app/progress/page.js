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
          This page provides a list of all the projects I've completed since I 
          began maintaining this log, as well as those I am currently working 
          on.
        </p>
        <p>
          I like to think of this page as a journal. I can look back and reflect 
          on my past projects and consider areas for improvement. I can also 
          keep track of what I am currently working on and remind myself to 
          finish what I started.
        </p>
        <div className={styles.divider}></div>
        <p className={styles.boldCenter}>
          Each block below is a link. If the block includes a personal project or code I wrote,
          it links to the project or code. Otherwise, it links to an outside page 
          with information about the item.
        </p>
        <ProgressBlock titleText="Neural Network using only stdio.h and stdlib.h in C" 
                       status="79% accuracy (finished for now)" link="https://github.com/zroe1/neural-network-from-scratch"
                       discription="
          This project contains code for a fully functional neural network using 
          only stdio.h and stdlib.h in C. Matrix multiplication, derivative 
          calculations, and gradient updates were all done without using any 
          outside libraries.
        "/>
        <ProgressBlock titleText="AI Safety Fundamentals Alignment Course" 
                       status="Working on final project" link="https://course.aisafetyfundamentals.com/alignment"
                       discription="
          I am currently taking this course with a group of other interested
          students to self-study the potential impact of AI. We read technical
          papers which we discuss as a group to gain understanding. We are 
          currently working on replicating a paper as our final project.
        "/>
        <ProgressBlock titleText="zephaniahdev.com (React project)" 
                       status="Ready for release on August 19, 2023" link="https://zephaniahdev.com/"
                       discription="
          zephaniahdev.com is my personal website developed using React and 
          Three.js. It is not only a hub for my profiles and projects - it's 
          also interactive and fun to use.  It contains fun animations, an 
          interactive user interface, and customizable settings.
        "/>
        <ProgressBlock titleText="zephaniahsdata.com (React project)" 
                       status="Testing release" link="https://github.com/zroe1/productivity-site"
                       discription="
          A personal project to display the data I have collected about my
          productivity. You are looking at it right now!
        "/>
        <ProgressBlock titleText="The Rust Programming Language (book)" 
                       status="~1/3 Complete" link="https://doc.rust-lang.org/book/title-page.html"
                       discription="
          Rust is a systems programming language I am learning for fun. I have
          experience in C which makes coding in Rust interesting because
          there are a number of significant differences between the two languages.
        "/>
        <ProgressBlock titleText="A Thousand Brains (book)" 
                       status="~3/4 complete" link="https://www.numenta.com/resources/books/a-thousand-brains-by-jeff-hawkins/"
                       discription="
          This is a book discussing a new theory for how the neocortex works,
          and how it relates to the potential impacts of AI. I think the book is 
          interesting, but I find the lack of intellectual humility on the side 
          of the author a bit off-putting and untrustworthy.
        "/>
        <ProgressBlock titleText="Comparing Sorting Algorithms in Rust and C" 
                       status="Implemented eight algorithms so far" link="https://github.com/zroe1/sorting-rust-c"
                       discription="
          Implementation of various sorting algorithms and graphs of their 
          performance in C and Rust.
        "/>
        <ProgressBlock titleText="MIT 6.S191: Introduction to Deep Learning (class)" 
                       status="Completed August 9, 2023" link="https://github.com/zroe1/MIT-6.S191"
                       discription="
          I took this class during the 2023 summer to self-study AI and neural networks.
          My lab work and final project have been posted on my GitHub.
        "/>
        <ProgressBlock titleText="tinyfilter (python package)" 
                       status="Version 1.0.1 (stable release August 7, 2023)" link="https://github.com/zroe1/tinyfilter"
                       discription="
          tinyfilter is the computer vision equivalent to Andrej Karpathy's 
          micrograd. It converts images into ASCII art using the principles of 
          CNNs (convolutional neural networks). The project has been open sourced
          on PyPi (to install run pip install tinyfilter). The code is also 
          available on my GitHub.
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
          is available on my GitHub.
        "/>
      </div>
      <Footer />
    </div>
  )
}

export default Progress