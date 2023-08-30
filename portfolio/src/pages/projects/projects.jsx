import React, {useState} from "react";
import {Swipeable} from "react-swipeable";
import styles from "./projects.module.css";
import lightArrow from "../../assets/light-arrow.svg";
import darkArrow from "../../assets/dark-arrow.svg";
import carouselLight from "../../assets/carousel-light.svg";
import carouselDark from "../../assets/carousel-dark.svg";
import {myProjects} from "./projectsIndex";


const Projects = (props) => {

    const [earlierProject, setEarlierProject] = useState(myProjects[myProjects.length - 1]);
    const [previousProject, setPreviousProject] = useState(myProjects[0]);
    const [currentProject, setCurrentProject] = useState(myProjects[1]);
    const [nextProject, setNextProject] = useState(myProjects[2]);
    const [laterProject, setLaterProject] = useState(myProjects[3]);

    const [goBackBtn, setGoBackBtn] = useState(0);
    const[goForwardBtn, setGoForwardBtn] = useState(0);

    let projectName = currentProject.name;
    let githubLink = currentProject.link;
    let websiteLink = currentProject.link;

    const arrow = props.mode === 'light' ? lightArrow : darkArrow;
    const carouselArrow = props.mode === "light" ? carouselLight : carouselDark;

    const onPreviousHandler = () => {

        setGoBackBtn(1);
        setTimeout(() => {
            const prev = {...previousProject};
            const curr = {...currentProject};
            const next = {...nextProject};
            const latr = {...laterProject};

            setEarlierProject(prev);
            setPreviousProject(curr);
            setCurrentProject(next);
            setNextProject(latr);

            const i = myProjects.findIndex((project) => project.name === latr.name);
            let newLater;
            if (i === myProjects.length - 1){
                newLater = myProjects[0]
            }
            else{
                newLater = myProjects[i + 1];
            }
            setLaterProject(newLater);
        }, 580);

    };

    const onNextHandler = () => {

        setGoForwardBtn(1);
        setTimeout(() => {
            const next = {...nextProject};
            const curr = {...currentProject};
            const prev = {...previousProject};
            const earl = {...earlierProject};

            setLaterProject(next);
            setNextProject(curr);
            setCurrentProject(prev);
            setPreviousProject(earl);

            const i = myProjects.findIndex((project) => project.name === earl.name);
            let newEarlier;
            if (i === 0){
                newEarlier = myProjects[myProjects.length - 1];
            }
            else {
                newEarlier = myProjects[i - 1];
            }
            setEarlierProject(newEarlier);
        }, 580)
    };

}