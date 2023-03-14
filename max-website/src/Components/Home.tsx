
import "../index.scss";
import "./Home.scss";
import { getHomeMiddleItems, getHomeTextItems } from "../Utilities/FinalData";
import { centerElementById, getMoveDivOffPageTranslate} from "../Utilities/MovingDivs";
import { useEffect, useState } from 'react';
import { fetchData, fetchResume } from "../api/GeneralApiCalls";

interface Props {
    setActiveButton: (buttonName: string) => void;
    setLastTranslateInverted: (translate: string) => void,
    activeButton: string;
    lastTranslateInverted: string;
    setAboutMeVisible: React.Dispatch<React.SetStateAction<boolean>>;
    aboutMeVisible: boolean;
    setProjectsVisible: React.Dispatch<React.SetStateAction<boolean>>;
    projectsVisible: boolean;
    setResumeVisible: React.Dispatch<React.SetStateAction<boolean>>;
    resumeVisible: boolean;

}

function AnimateDiv(name: string, props: Props) {

    const inPage = props.activeButton !== '';


    if (props.activeButton === name) {
        const element = document.querySelector(`#${name}`) as HTMLElement;
        element.style.transform = '';
        console.log(props.lastTranslateInverted)
        props.setAboutMeVisible(false)
        props.setProjectsVisible(false)
        props.setResumeVisible(false)
    }

    let top = getMoveDivOffPageTranslate(document.querySelector(`#${name}`) as HTMLElement, 'top')
    let bottom = getMoveDivOffPageTranslate(document.querySelector(`#${name}`) as HTMLElement, 'bottom')
    let right = getMoveDivOffPageTranslate(document.querySelector(`#${name}`) as HTMLElement, 'right')
    let left = getMoveDivOffPageTranslate(document.querySelector(`#${name}`) as HTMLElement, 'left')
    if (inPage) {
        top = '';
        bottom = '';
        right = '';
        left = '';

    }
    let buttonClicked = '';

    //TODO REFACTOR THIS STUFF
    for (let i = 0; i < getHomeTextItems().length; i++) {
        // Get Element Clicked
        const animatedDiv = document.getElementById(getHomeTextItems()[i]);
        // Moving all buttons that are not the one clicked off of the screen
        if (animatedDiv && name !== animatedDiv.id) {
            if (animatedDiv.className.includes('top')) {
                animatedDiv.style.transform = top;
            } else if (animatedDiv.className.includes('bottom')) {
                console.log('bottom ran');
                console.log(animatedDiv.style.transform)
                animatedDiv.style.transform = bottom;
                console.log(bottom);
                console.log(animatedDiv.style.transform)
            } else if (animatedDiv.className.includes('right')) {
                animatedDiv.style.transform = right;
            } else if (animatedDiv.className.includes('left')) {
                animatedDiv.style.transform = left;
                console.log(';22')
            } 
        } else if (!inPage) {
            // Moving the button clicked to correct position
            props.setLastTranslateInverted(centerElementById(getHomeTextItems()[i],));
            buttonClicked = getHomeTextItems()[i];
            console.log('something32')
        }
    }


    if (!inPage){
        if (name.includes('about-me-button') ){
            props.setAboutMeVisible(true);
        } else if (name.includes('projects-button')){
            props.setProjectsVisible(true);
        } else if (name.includes('resume-button')){
            props.setResumeVisible(true);
        }   
    }


    if (!inPage) {
        props.setActiveButton(buttonClicked);
    } else {
        props.setActiveButton('');
    }
}

export function AboutMeButton(props: Props) {
    return (
        <div className={`about-me-button left ${props.activeButton === 'about-me-button' ? 'active' : ''}`} id="about-me-button" onClick={() => {
            AnimateDiv('about-me-button', props);
            //fetchData();
        }}>
            About Me
        </div>
    );
}

export function ProjectsButton(props: Props) {
    return (
        <div className={`projects-button bottom ${props.activeButton === 'projects-button' ? 'active' : ''}`} id="projects-button" onClick={() => {
            AnimateDiv('projects-button', props);
        }}>
            Projects
        </div>
    );
}

export function ResumeButton(props: Props) {
    return (
        <div className={`resume-button right ${props.activeButton === 'resume-button' ? 'active' : ''}`} id="resume-button" onClick={() => {
            AnimateDiv('resume-button', props);
        }}>
            Resume
        </div>
    );
}

export function Background() {
    const [activeButton, setActiveButton] = useState('');
    const [aboutMeVisible, setAboutMeVisible] = useState(false);
    const [projectsVisible, setProjectsVisible] = useState(false);
    const [resumeVisible, setResumeVisible] = useState(false);
    const [lastTranslateInverted, setLastTranslateInverted] = useState('');
    let props: Props = {
        setLastTranslateInverted: setLastTranslateInverted,
        setActiveButton: setActiveButton,
        activeButton: activeButton,
        lastTranslateInverted: lastTranslateInverted,
        aboutMeVisible: aboutMeVisible,
        setAboutMeVisible: setAboutMeVisible,
        projectsVisible: projectsVisible,
        setProjectsVisible: setProjectsVisible,
        resumeVisible: resumeVisible,
        setResumeVisible: setResumeVisible,
    };
    return (
        <div className="background">
            <div className={`title top ${activeButton === 'title' ? 'active' : ''}`} id="title">
                Max Bielstein
            </div>
            <AboutMeButton {...props} />
            <AboutMe {...props} />
            <ProjectsButton {...props} />
            <ResumeButton {...props} />
            <Projects {...props} />
            <Resume {...props} />

        </div>
    );
}

function AboutMe(props: Props) {

    console.log(props.aboutMeVisible)

    const transform = props.aboutMeVisible ? centerElementById("about-me", true) : "translate(-150%, 50%)";

    return (
        <div
            className={`about-me mid ${props.aboutMeVisible ? "visible" : "hidden"}`}
            id="about-me"
            style={{ transform: transform }}
        >
            <p>This is a paragraph of stuff that is positioned off-screen on the left.</p>
        </div>
    );
}

function Projects(props: Props) {

    const transform = props.projectsVisible ? centerElementById("projects", true) : "translate(0%, 1500%) translateX(225%)";


    return (
        <div
            className={`projects mid ${props.aboutMeVisible ? "visible" : "hidden"}`}
            id="projects"
            style={{ transform: transform }}
        >
            <p>This is where the projects will be</p>
        </div>
    );
}

function Resume(props: Props) {

    const transform = props.resumeVisible ? centerElementById("resume", true) : "translate(500%, 70%)";

    const [pdfUrl, setPdfUrl] = useState<string | null>(null);

    useEffect(() => {
    const fetchPdfUrl = async () => {
        const url = await fetchResume();
        setPdfUrl(url);
    };
    fetchPdfUrl();
    }, []);


    return (
        <div
            className={`resume mid ${props.aboutMeVisible ? "visible" : "hidden"}`}
            id="resume"
            style={{ transform: transform }}
        >
            <iframe src={pdfUrl ?? undefined} style={{ width: '100%', height: '100%' }} title="Resume"/>
        </div>
    );


}