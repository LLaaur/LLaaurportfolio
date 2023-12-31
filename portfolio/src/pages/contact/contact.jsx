import React, {useState} from "react";
import VisibiltySensor from "react-visibility-sensor";
import styles from "./contact.module.css";
import arrowLink from "../../assets/link.svg"


const Contact = (props) => {

    const [visible, setVisible] = useState(false);

    const onScrollHandler = (isVisible) => {
        isVisible ? setVisible(true) : setVisible(false);
    };

    return (
        <div className={styles.Contact} id="contact">

            <h2 className={styles.Title} mode={props.mode}>
                Contact
            </h2>


            <div className={styles.ContactLinks}>

                <div className={styles.Email}>
                    <h4>
                        <a className={visible ? styles.Visible : styles.Invisible}>
                            laurfleschin2020@gmail.com
                        </a>
                    </h4>
                </div>

                <VisibiltySensor onChange={onScrollHandler}>
                <div className={styles.Github} >

                        <h4>
                            <a className={visible ? styles.Visible : styles.Invisible} href="https://github.com/LLaaur" target="_blank" rel="noopener norefferer" mode={props.mode}>
                                github
                            </a>
                        </h4>

                        <img
                            src={arrowLink}
                            className={styles.GithubArrow}
                            mode={props.mode}
                            alt=''
                        />
                </div>  
                </VisibiltySensor>

                <div className={styles.Linkedin}>
                    <h4>
                        <a className={visible ? styles.Visible : styles.Invisible} href="https://www.linkedin.com/in/fleschin-laurentiu-40a6b7235/" target="_blank" rel="noopener norefferer">
                            linkedin
                        </a>
                    </h4>

                    <img
                        src={arrowLink}
                        alt=''
                        className={styles.LinkedinArrow}
                    />
                </div>

                <div className={styles.CV}>
                    <h4>
                        <a className={visible ? styles.Visible : styles.Invisible} href="https://www.jobseeker.com/d/6EBcrd1g0FV6J8EHUI5Iye/view" target="_blank" rel="noopener norefferer" mode={props.mode}>
                            resume
                        </a>
                    </h4>

                    <img
                        src={arrowLink}
                        alt=''
                        className={styles.CVArrow}
                        mode={props.mode}
                    />
                </div>

            </div>
        </div>
    )

}

export default Contact
