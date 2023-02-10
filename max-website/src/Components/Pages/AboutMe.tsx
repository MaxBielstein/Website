import React from "react";
import { useNavigate } from "react-router";
import "../../index.scss";
import { AboutMeButton, Background } from "../Background";
import "./AboutMe.scss";


export default function AboutMe(){

    console.log('hi')

        return(
        
        <>
        <Background />
        <AboutMeButton />
        </>);

}