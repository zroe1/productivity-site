import styles from '../outsidePages.module.css'
import Footer from '../components/Footer/Footer'

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <h1 className={styles.title}>What is this site?</h1>
                <p>
                    This website publicly showcases the data I've compiled over 
                    the past four months, detailing how I've spent my time. As I 
                    introduce new data into the spreadsheet, the website updates 
                    in real-time, ensuring that the information you see is 
                    always current and precise. Here's a glimpse of the raw 
                    spreadsheet:
                </p>
                <img width="100%" src="spreadsheet.png"/>
                <p>
                    Each row stands for a day, while every box signifies a 
                    15-minute block within that day. Not very nice to look at, 
                    right? That's the purpose of this website — to 
                    present the data in a more reader-friendly format.
                </p>
                <p>
                    For more information about the categories I track for and 
                    what I spend the most time on, navigate to the 'Data' page 
                    on the menu.
                </p>
                <div className={styles.divider}></div>
                <h1 className={styles.title}>Why do I collect my data?</h1>
                <p>
                    I collect data for a few reasons. The biggest motivation,
                    however, is to keep myself accountable. When my friend Connor
                    first introduced me to the idea of time-tracking, he
                    explained, "What gets measured gets optimized." I have found 
                    this to be profoundly true.
                </p>
                <p>
                    By tracking how much time I spend coding, reading, and 
                    socializing, I have found that I do those things more.
                    Likewise, by tracking how much time I spend watching TV and
                    scrolling on scoial media, I have found I do those things
                    less.
                </p>
                <div className={styles.divider}></div>
                <h1 className={styles.title}>Why did I decide to make my data public?</h1>
                <p>
                  I made this site public for accountability — the same reason I 
                  began tracking my time. Knowing others can see how I spend my 
                  hours pushes me to be more productive. I want to be proud of
                  the life I live and part of that is being proud of how I 
                  choose to spend my time.
                </p>
            </div>
            <Footer />

        </div>
    )
}

export default About;