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
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque esse deleniti eveniet reprehenderit facere temporibus blanditiis, dolores porro iste corporis odio laudantium possimus quia error? Facere est asperiores harum fugit!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque esse deleniti eveniet reprehenderit facere temporibus blanditiis, dolores porro iste corporis odio laudantium possimus quia error? Facere est asperiores harum fugit!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque esse deleniti eveniet reprehenderit facere temporibus blanditiis, dolores porro iste corporis odio laudantium possimus quia error? Facere est asperiores harum fugit!</p>
            </div>

            </div>

            <img src={arrow} alt="down arrow" className={styles.Arrow}/>
        </div>

    )
}

export default AboutPage;