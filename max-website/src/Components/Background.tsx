
import "../index.scss";
import "./Background.scss";
import { getHomeTextItems } from "../Utilities/FinalData";
import { centerElementById } from "../Utilities/MovingDivs";


function AnimateDiv(name: string) {

    const top = 'translate(' + 0 + ', ' + (-50) + 'vh)'
    const bottom = 'translate(' + 0 + ', ' + 50 + 'vh)'
    const right = 'translate(' + 50 + 'vw, ' + 0 + ')'
    const left = 'translate(' + (-50) + 'vw, ' + 0 + ')'
    
        for (let i = 0; i < getHomeTextItems().length; i++){
            // Get Element Clicked
            const animatedDiv = document.getElementById(getHomeTextItems()[i]);
            // Moving all buttons that are not the one clicked off of the screen
            if (animatedDiv && name !== animatedDiv.id) {
                if (animatedDiv.className.includes('top')){
                    animatedDiv.style.transform = top;
                } else if (animatedDiv.className.includes('bottom')){
                    animatedDiv.style.transform = bottom;
                } else if (animatedDiv.className.includes('right')){
                    animatedDiv.style.transform = right;
                } else if (animatedDiv.className.includes('left')){
                    animatedDiv.style.transform = left;
                }
            } else {
                // Moving the button clicked to correct position
                centerElementById(getHomeTextItems()[i]);
            }
        }
}


export function AboutMeButton() {
    return (<div className="about-me left" id="about-me" onClick={() => {
        AnimateDiv('about-me');
    }}>
        About Me
    </div>)
}

export function ProjectsButton() {
    return (
        <div className="projects bottom" id="projects" onClick={() => {
            AnimateDiv('projects');
        }}>
            Projects
        </div>
    );
}

export function ResumeButton() {
    return (
        <div className="resume right" id="resume" onClick={() => {
            AnimateDiv('resume');
        }} >
            Resume
        </div>
    );
}



export function Background() {
    return (
        <div className="background">
            <div className="title top" id = "title">
                Max Bielstein
            </div>
            <AboutMeButton />
            <ProjectsButton />
            <ResumeButton />
        </div>
    );
}


