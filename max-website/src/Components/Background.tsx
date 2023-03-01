
import "../index.scss";
import "./Background.scss";
import { getHomeTextItems } from "../Utilities/FinalData";
import { centerElementById } from "../Utilities/MovingDivs";


function AnimateDiv(name: string, widthTranslate: string, heightTranslate: string) {

    const top = 'translate(' + 0 + ', ' + (-50) + 'vh)'
    const bottom = 'translate(' + 0 + ', ' + 50 + 'vh)'
    const right = 'translate(' + 50 + 'vw, ' + 0 + ')'
    const left = 'translate(' + (-50) + 'vw, ' + 0 + ')'
    
    
    
    console.log(widthTranslate); 
    if (widthTranslate !== "0" && heightTranslate !== "0"){
        for (let i = 0; i < getHomeTextItems().length; i++){
            const animatedDiv = document.getElementById(getHomeTextItems()[i]);
            // Moving all buttons that are not the one clicked off of the screen
            if (animatedDiv && name !== animatedDiv.id) {
                if (animatedDiv.className.includes('top')){
                    animatedDiv.style.transform = top;
                } else if (animatedDiv.className.includes('bottom')){
                    console.log('ran');
                    animatedDiv.style.transform = bottom;
                } else if (animatedDiv.className.includes('right')){
                    animatedDiv.style.transform = right;
                } else if (animatedDiv.className.includes('left')){
                    animatedDiv.style.transform = left;
                }

                // Moving the button clicked to correct position
            } else if (animatedDiv){
                console.log('ran21231`2321')
                centerElementById(getHomeTextItems()[i]);

                // if (animatedDiv.className === 'top'){
                //     animatedDiv.style.transform = top;
                // } else if (animatedDiv.className === 'bottom'){
                //     animatedDiv.style.transform = bottom;
                // } else if (animatedDiv.className === 'right'){
                //     animatedDiv.style.transform = right;
                // } else if (animatedDiv.className === 'left'){
                //     animatedDiv.style.transform = 'translate(' + widthTranslate + '%, ' + heightTranslate + ')';
                // }
            }

            
        }
    }

    // const animatedDiv = document.getElementById(name);
    // if (animatedDiv) {
    //     const translate = 'translate(' + widthTranslate + ', ' + heightTranslate + ')';
    //     animatedDiv.style.transform = translate;
    // }
}


export function AboutMeButton() {
    return (<div className="about-me left" id="about-me" onClick={() => {
        AnimateDiv('about-me', '20vw', '-25vh');
    }}>
        About Me
    </div>)
}

export function ProjectsButton() {
    return (
        <div className="projects bottom" id="projects" onClick={() => {
            AnimateDiv('projects', '-8vw', '-48vh');
            AnimateDiv('about-me', '-200px', '310px');
        }}>
            Projects
        </div>
    );
}

export function ResumeButton() {
    return (
        <div className="resume right" id="resume" onClick={() => {
            AnimateDiv('resume', '5vw', '5vh');
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


