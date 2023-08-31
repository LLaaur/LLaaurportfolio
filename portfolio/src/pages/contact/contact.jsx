import React, {useState} from "react";
import VisibiltySensor from "react-visibility-sensor";
import styles from "./contact.module.css";


const Contact = () => {

    const [visible, setVisible] = useState(false);

    const onScrollHandler = (isVisible) => {
        isVisible ? setVisible(true) : setVisible(false);
    };

    return (
        <div className={styles.Contact} id="Contact">

            <h2 className={styles.Title}>
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

                <div className={styles.Github}>
                    <h4>
                        <a className={visible ? styles.Visible : styles.Invisible} href="https://github.com/LLaaur" target="_blank" rel="noopener norefferer">
                            github
                        </a>
                    </h4>
                    <VisibiltySensor onChange={onScrollHandler}/>
                </div>

                <div className={styles.Linkedin}>
                    <h4>
                        <a className={visible ? styles.Visible : styles.Invisible} href="https://www.linkedin.com/in/fleschin-laurentiu-40a6b7235/" target="_blank" rel="noopener norefferer">
                            linkedin
                        </a>
                    </h4>
                </div>

                <div className={styles.CV}>
                    <h4>
                        <a className={visible ? styles.Visible : styles.Invisible} href="https://www.visualcv.com/" target="_blank" rel="noopener norefferer">
                            resume
                        </a>
                    </h4>
                </div>

            </div>
        </div>
    )

}

export default Contact