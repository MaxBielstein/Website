
import "../index.scss";
import "./Home.scss";
import { getHomeTextItems } from "../Utilities/FinalData";
import { centerElementById, getMoveDivOffPageTranslate, invertTranslateString } from "../Utilities/MovingDivs";
import { useState } from 'react';
import { fetchData } from "../api/GeneralApiCalls";

interface Props {
    setActiveButton: (buttonName: string) => void;
    setLastTranslateInverted: (translate: string) => void,
    activeButton: string;
    lastTranslateInverted: string;
    setMidVisible: React.Dispatch<React.SetStateAction<boolean>>;
    midVisible: boolean;
}

function AnimateDiv(name: string, props: Props) {

    const inPage = props.activeButton !== '';


    if (props.activeButton === name) {
        const element = document.querySelector(`#${name}`) as HTMLElement;
        element.style.transform = '';
        console.log(props.lastTranslateInverted)
        props.setMidVisible(false)
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
                console.log(';asdokawpdokasd')
                animatedDiv.style.transform = right;
            } else if (animatedDiv.className.includes('left')) {
                animatedDiv.style.transform = left;
                console.log(';22')
            } else if (animatedDiv.className.includes('mid') && !props.midVisible){
                console.log('rkaposdkaposkdaw');
                animatedDiv.style.transform = centerElementById(getHomeTextItems()[i], true);
                props.setMidVisible(true)

            }
        } else if (!inPage) {
            // Moving the button clicked to correct position
            props.setLastTranslateInverted(centerElementById(getHomeTextItems()[i],));
            buttonClicked = getHomeTextItems()[i];
            console.log('something32')
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
        <div className={`about-me left ${props.activeButton === 'about-me' ? 'active' : ''}`} id="about-me" onClick={() => {
            AnimateDiv('about-me', props);
            //fetchData();
        }}>
            About Me
        </div>
    );
}

export function ProjectsButton(props: Props) {
    return (
        <div className={`projects bottom ${props.activeButton === 'projects' ? 'active' : ''}`} id="projects" onClick={() => {
            AnimateDiv('projects', props);
        }}>
            Projects
        </div>
    );
}

export function ResumeButton(props: Props) {
    return (
        <div className={`resume right ${props.activeButton === 'resume' ? 'active' : ''}`} id="resume" onClick={() => {
            AnimateDiv('resume', props);
        }}>
            Resume
        </div>
    );
}

export function Background() {
    const [activeButton, setActiveButton] = useState('');
    const [midVisible, setMidVisible] = useState(false);
    const [lastTranslateInverted, setLastTranslateInverted] = useState('');
    let props: Props = {
        setLastTranslateInverted: setLastTranslateInverted,
        setActiveButton: setActiveButton,
        activeButton: activeButton,
        lastTranslateInverted: lastTranslateInverted,
        midVisible: midVisible,
        setMidVisible: setMidVisible
    };
    return (
        <div className="background">
            <div className={`title top ${activeButton === 'title' ? 'active' : ''}`} id="title">
                Max Bielstein
            </div>
            <AboutMeButton {...props} />
            <AboutMeContent {...props}  />
            <ProjectsButton {...props} />
            <ResumeButton {...props} />
        </div>
    );
}

function AboutMeContent(props: Props) {

    console.log(props.midVisible)
    
    const transform = props.midVisible ? centerElementById("about-me-content", true) : "translateX(-150%)";

    return (
      <div
        className={`about-me-content mid ${props.midVisible ? "visible" : "hidden"}`}
        id="about-me-content"
        style={{ transform: transform }}
      >
        <p>This is a paragraph of stuff that is positioned off-screen on the left.</p>
      </div>
    );
  }