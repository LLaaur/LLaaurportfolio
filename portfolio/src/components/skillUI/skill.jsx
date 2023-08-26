import React from "react";
import styles from "./skill.module.css";

const skill = (props) => {
    const beforeContent = props.dataLine;
    
    return(
        
        <div data-line={beforeContent} className={styles.SkillContainer}>
            {props.children}
        </div>

    )
};

export default skill;