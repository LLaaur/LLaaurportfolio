import React from "react";
import lightArrow from "../../assets/light-arrow.svg";
import darkArrow from "../../assets/dark-arrow.svg";

// import { isMobile } from 'react-device-detect';
// import { Swipeable } from 'react-swipeable';

import styles from "./frontpage.module.css"

const FrontPage = (props) => {

    const arrow = props.mode === "ligt" ? darkArrow : lightArrow;

    return (

        <div mode={props.mode} className={styles.Container + " background"}>
            <div className={styles.Menu}>
                <ul>
                    <li>
                        <a mode={props.mode}
                            className={styles.Link + " text"}
                            href="#home"
                            to="\">

                            Home

                        </a>

                        <a mode={props.mode}
                            className={styles.Link + " text"}
                            href="#about"
                            to="\">

                            About

                        </a>

                        <a mode={props.mode}
                            className={styles.Link + " text"}
                            href="#skills"
                            to="\">

                            Skills

                        </a>

                        <a mode={props.mode}
                            className={styles.Link + " text"}
                            href="#projects"
                            to="\">

                            Projects

                        </a>

                        <a mode={props.mode}
                            className={styles.Link + " text"}
                            href="#contact"
                            to="\">

                            Contact

                        </a>

                        <div
                            mode={props.mode}
                            className={styles.Link + ' ' + styles.Mode + ' text'}
                        >
                            Mode
                        </div>

                        <div onClick={props.toggleMode} className={styles.ToggleContainer}>
                            <div
                                mode={props.mode}
                                className={styles.Toggle + ' secondaryBackground'}
                            ></div>
                            <div
                                mode={props.mode}
                                className={styles.ToggleCircle + ' background'}
                            ></div>
                        </div>


                    </li>

                </ul>
            </div>

            <h1 mode={props.mode} className={styles.Title + " text"}>
                Fleschin Laurentiu
            </h1>
            <h4 className={styles.SecondaryTitle}>Frontend Developer</h4>
            <img src={arrow} alt="down arrow" mode={props.mode} className={styles.Arrow}/>
        </div>

    )
}

export default FrontPage