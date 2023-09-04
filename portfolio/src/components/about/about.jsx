import React from "react";
import styles from "./about.module.css"
import lightArrow from "../../assets/light-arrow.svg";
import darkArrow from "../../assets/dark-arrow.svg";


const AboutPage = (props) => {
    const arrow = props.mode === "ligt" ? darkArrow : lightArrow;

    return (

        <div id="about"  mode={props.mode} className={styles.About}>
            <div className={styles.AboutPage}>
                <h2 mode={props.mode} className={styles.Title + " text"}>
                    About me
                </h2>


            <div className="aboutText">
                <p>I am an aspiring web developer and tech enthusiast, with a special taste for Frontend technologies such as HTML, CSS, JavaScript and React.</p>
                <p>The process of building a web app or website is appealing to me in all its aspects: from brainstorming the actual logic and flow of the website to the style tinkering of the page, everything becomes an enjoyable challenge that makes me proud of what I can learn in this vast field.</p>
                <p>I have been building different kinds of websites during the last year, ranging from simple HTML and CSS pages to actual full-stack web apps, that's why I would say I am ready to contribute and collaborate with different clients or companies.</p>
                <p>I hope you will like the projects you're going to see below!</p>
            </div>

            </div>

            <img src={arrow} alt="down arrow" className={styles.Arrow}/>
        </div>

    )
}

export default AboutPage;