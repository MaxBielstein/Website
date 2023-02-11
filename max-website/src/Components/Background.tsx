
import "../index.scss";
import "./Background.scss";
import $ from 'jquery';
import { getHomeTextItems } from "../Utilities/FinalData";


function resetToNormalTransition(animatedDiv: HTMLElement){
    animatedDiv.style.transition = 'all var(--animated-delay) ease-in-out;'
}

function AnimateDiv(name: string, widthTranslate: string, heightTranslate: string) {

    console.log(widthTranslate); 
    if (widthTranslate !== "0" && heightTranslate !== "0"){
        for (let i = 0; i < getHomeTextItems().length; i++){
            console.log('ran')
            const animatedDiv = document.getElementById(getHomeTextItems()[i]);
            if (animatedDiv && name !== animatedDiv.id) {
                animatedDiv.style.transition = 'all 0 ease-in-out;';  
                console.log(animatedDiv.style.transition );
                console.log('ran2')
                let opacity = 1;
                let intervalId: any;
                console.log(animatedDiv);
                intervalId = setInterval(() => {
                    opacity -= 0.005;
                    animatedDiv.style.opacity = String(opacity);
                    if (opacity <= 0) {
                      clearInterval(intervalId);
                      resetToNormalTransition(animatedDiv);
                    }
                  }, 10);
            }
        }
    }

    const animatedDiv = document.getElementById(name);
    if (animatedDiv) {
        const translate = 'translate(' + widthTranslate + ', ' + heightTranslate + ')';
        animatedDiv.style.transform = translate;
    }
}


export function AboutMeButton() {
    return (<div className="about-me" id="about-me" onClick={() => {
        AnimateDiv('about-me', '20vw', '-25vh');
    }}>
        About Me
    </div>)
}

export function ProjectsButton() {
    return (
        <div className="projects" id="projects" onClick={() => {
            AnimateDiv('projects', '-8vw', '-48vh');
            AnimateDiv('about-me', '-200px', '310px');
        }}>
            Projects
        </div>
    );
}

export function ResumeButton() {
    return (
        <div className="resume" id="resume" onClick={() => {
            AnimateDiv('resume', '5vw', '5vh');
        }} >
            Resume
        </div>
    );
}



export function Background() {
    return (
        <div className="background">
            <div className="title" id = "title">
                Max Bielstein
            </div>
            <AboutMeButton />
            <ProjectsButton />
            <ResumeButton />
        </div>
    );
}


