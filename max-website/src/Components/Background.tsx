
import "../index.css";
import "./Background.scss";
import { useNavigate } from "react-router-dom"



function Background (){
    
    const history = useNavigate();

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
        
                history('/about-me');
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

}

export default Background;