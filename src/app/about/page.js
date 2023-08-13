import styles from './page.module.css'
import Footer from '../components/Footer/Footer'

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <h1 className={styles.title}>What is this site?</h1>
                <p>
                    Put simply, this site is a public display of all the personal
                    data I have been collecting in a spreadsheet for the last
                    few months. This site automatically updates as I input new 
                    data into the spreadsheet so the wesite is always up-to-date and 
                    accurate. The raw spreadsheet looks like this:
                </p>
                <img width="100%" src="spreadsheet.png"/>
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
                <h1 className={styles.title}>Why do I collect my data?</h1>
                <p>
                    I collect data for a few reasons. The biggest motivation,
                    however, is to keep myself accountable. When my friend Connor
                    first introduced me to the idea of tracking my time, he
                    explained, "What gets measured gets optimized." I have found 
                    this to be undeniably true.
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
                    I made this site public for the same reason I decided to
                    track my time in the first place: to keep myself accountable.
                    The idea that people can see how I am spending my time makes
                    me much more motivated to spend my time in productive ways.
                    In other words, I would be embarrassed if people went to this
                    site and saw that I had not done anything productive in the
                    last month. Hopefully, through this website, I will be forced
                    to make sure that that never happens.
                </p>
            </div>
            <Footer />

        </div>
    )
}

export default About;