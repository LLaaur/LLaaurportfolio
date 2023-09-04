import React, {useState} from "react";
import styles from "./projects.module.css";
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
    const [goForwardBtn, setGoForwardBtn] = useState(0);

    let projectName = laterProject.name;
    let githubLink = laterProject.github;
    let websiteLink = laterProject.link;

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
        }, 480);

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
        }, 480)
    };

    return (
        <div id='projects' className={styles.ProjectsComponent}>

            <h2 mode={props.mode} className={styles.Projects + ' text'}>
                Projects
            </h2>

            <div className={styles.CarouselContainer}>
                <div className={styles.ProjGifs}>
                    <img
                        goforward={goForwardBtn}
                        goback={goBackBtn}
                        onAnimationEnd={() => {
                            setGoBackBtn(0);
                            setGoForwardBtn(0);
                        }}
                        src={earlierProject.gif}
                        className={styles.EarlierProj}
                        alt=''
                    />
                    <img
                        goforward={goForwardBtn}
                        goback={goBackBtn}
                        onAnimationEnd={() => {
                            setGoBackBtn(0);
                            setGoForwardBtn(0);
                        }}
                        src={previousProject.gif}
                        className={styles.PrevProj}
                        alt=''
                    />
                    <img
                        goforward={goForwardBtn}
                        goback={goBackBtn}
                        onAnimationEnd={() => {
                            setGoBackBtn(0);
                            setGoForwardBtn(0);
                        }}
                        src={nextProject.gif}
                        className={styles.NextProj}
                        alt=''
                    />
                    <img
                        goforward={goForwardBtn}
                        goback={goBackBtn}
                        onAnimationEnd={() => {
                            setGoBackBtn(0);
                            setGoForwardBtn(0);
                        }}
                        src={laterProject.gif}
                        className={styles.LaterProj}
                        alt=''
                    />
                </div>
                <div className={styles.NameContainer}>
                    <img
                        onClick={onPreviousHandler}
                        className={styles.PrevArrow}
                        src={carouselArrow}
                        onAnimationEnd={() => setGoBackBtn(0)}
                        alt=''
                    />
                    <p className={styles.ProjectName}>{projectName}</p>
                    <img
                        onClick={onNextHandler}
                        className={styles.NextArrow}
                        src={carouselArrow}
                        alt=''
                        onAnimationEnd={() => setGoForwardBtn(0)}
                    />
                </div>
                <div className={styles.LinksContainer}>
                    <a
                        mode={props.mode}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={styles.Link + ' linkText linkBackground'}
                        href={githubLink}
                    >
                        See Github
                    </a>
                    <a
                        mode={props.mode}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={styles.Link + ' linkText linkBackground'}
                        href={websiteLink}
                    >
                        See Project
                    </a>
                </div>
            </div>


        </div>
    );

}

export default Projects;