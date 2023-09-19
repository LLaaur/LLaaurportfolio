import React from "react";
import styles from "./skills.module.css"
import lightArrow from "../../assets/light-arrow.svg";
import darkArrow from "../../assets/dark-arrow.svg";
import Skill from "../skillUI/skill";
import { frontendImages, backendImages, otherImages } from "./skillIndex";


function getSkills(images, skills) {

    images.map(({ id, source, name }) => {
        skills.push(
            <Skill dataLine={name} key={id} className={styles.Skill}>
                <img className={styles.Icon} src={source} alt='' />
            </Skill>
        );
        return skills;
    });
}

const Skills = (props) => {
    const arrow = props.mode === 'light' ? lightArrow : darkArrow;

    const frontendSkills = [];
    const backendSkills = [];
    const otherSkills = [];

    getSkills(frontendImages, frontendSkills);
    getSkills(backendImages, backendSkills);
    getSkills(otherImages, otherSkills);

    return (
            <div id='skills' className={styles.SkillsComponent}>
                <h2 mode={props.mode} className={styles.Skills + ' text'}>Skills</h2>
                <p className={styles.Field}>front-end</p>
                <div className={styles.Floating}>
                    <div className={styles.SkillsContainer}>
                        {frontendSkills}
                    </div>
                </div>
                <p className={styles.Field}>back-end</p>
                <div className={styles.Floating}>
                    <div className={styles.SkillsContainer}>
                        {backendSkills}
                    </div>
                </div>
                <p className={styles.Field}>miscellaneous</p>
                <div className={styles.Floating}>
                    <div className={styles.SkillsContainer}>
                        {otherSkills}
                    </div>
                </div>
                <img className={styles.Arrow} src={arrow} alt='' />
            </div>
    );
};

export default Skills;