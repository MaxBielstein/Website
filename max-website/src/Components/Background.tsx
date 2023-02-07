import React from "react";
import "../index.css";
import { animateCSS } from "../Utilities/Animations";
import "./Background.css";



export class Background extends React.Component{



    render(){

        animateCSS('.title', 'bounce');

        return (
        <div className="background">
            <div className="animate__animated animate__bounce title" >
                Max Bielstein
            </div>
        </div>
        )
    };
}