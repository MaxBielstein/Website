import React from "react";
import "../index.css";
import "./Background.scss";
export interface Props {
    currentPage: string,
}


export class Background extends React.Component<{}>{

    constructor(props: {}){
        super(props);
        this.state = {
            currentPage: "Home",
        }
    }   


    render(){

        return (
        <div className="background">
            <div className="title" >
                Max Bielstein
            </div>
            <div className="about-me" id="about-me" onClick={() => {

                const animatedDiv = document.getElementById('about-me');
                if (animatedDiv) {
                    const translate =  'translate(22vw, -25vh)';
                    animatedDiv.style.transform = translate;
                }

            }}>
                About Me
            </div>
            <div className="projects" >
                Projects
            </div>
            <div className="resume" >
                Resume
            </div>
        </div>
        )
    };





}