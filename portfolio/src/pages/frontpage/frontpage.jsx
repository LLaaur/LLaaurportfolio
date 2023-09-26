import React from "react";
import lightArrow from "../../assets/light-arrow.svg";
import darkArrow from "../../assets/dark-arrow.svg";
import { useState } from "react";

import Hamburger from "../../components/mobile/Hamburger";

import styles from "./frontpage.module.css"

const FrontPage = (props) => {

    const[hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }

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

                <div className="navigation">
                <ul>
                    <li>
                        
                        <a mode={props.mode}
                            style={{ color: "white", textDecoration: "none" }}
                            href="#home"
                            to="\">
                            Home
                        </a>

                        <a mode={props.mode}
                            style={{ color: "white", textDecoration: "none" }}
                            href="#about"
                            to="\">
                            About
                        </a>

                        <a mode={props.mode}
                            style={{ color: "white", textDecoration: "none" }}
                            href="#skills"
                            to="\">
                            Skills
                        </a>

                        <a mode={props.mode}
                            style={{ color: "white", textDecoration: "none" }}
                            href="#projects"
                            to="\">
                            Projects
                        </a>

                        <a mode={props.mode}
                            style={{ color: "white", textDecoration: "none" }}
                            href="#contact"
                            to="\">
                            Contact
                        </a>
                    </li>
                </ul>
                    
                    <div className={styles.hamburger} onClick={toggleHamburger}>
                        <Hamburger isOpen={hamburgerOpen} />
                    </div>

                </div>


                <style jsx>
                        
                        {`.navigation ul li{

                            display: ${hamburgerOpen ? "flex" : "none"};
                            flex-direction: column;
                            font-size: 4rem;
                            height: 100vh;
                            width: 90vw;
                            margin-top: 70%;
                            position: absolute;
                            left: 300vw;
                            background: darkblue;
                            padding: 2rem;

                        }
                        `
                    }

                </style>

            <h1 mode={props.mode} className={styles.Title + " text"}>
                Fleschin Laurentiu
            </h1>
            <h4 className={styles.SecondaryTitle}>Frontend Developer</h4>
            <img src={arrow} alt="down arrow" mode={props.mode} className={styles.Arrow}/>
        </div>

    )
}

export default FrontPage