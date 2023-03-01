
import "../index.scss";
import "./Background.scss";
import { getHomeTextItems } from "../Utilities/FinalData";
import { centerElementById } from "../Utilities/MovingDivs";
import { useState } from 'react';

interface Props {
  setActiveButton: (buttonName: string) => void;
  activeButton: string;
}

function AnimateDiv(name: string, setActiveButton: (buttonName: string) => void) {
  const top = 'translate(' + 0 + ', ' + (-50) + 'vh)';
  const bottom = 'translate(' + 0 + ', ' + 50 + 'vh)';
  const right = 'translate(' + 50 + 'vw, ' + 0 + ')';
  const left = 'translate(' + (-50) + 'vw, ' + 0 + ')';

  for (let i = 0; i < getHomeTextItems().length; i++) {
    // Get Element Clicked
    const animatedDiv = document.getElementById(getHomeTextItems()[i]);
    // Moving all buttons that are not the one clicked off of the screen
    if (animatedDiv && name !== animatedDiv.id) {
      if (animatedDiv.className.includes('top')) {
        animatedDiv.style.transform = top;
      } else if (animatedDiv.className.includes('bottom')) {
        animatedDiv.style.transform = bottom;
      } else if (animatedDiv.className.includes('right')) {
        animatedDiv.style.transform = right;
      } else if (animatedDiv.className.includes('left')) {
        animatedDiv.style.transform = left;
      }
    } else {
      // Moving the button clicked to correct position
      centerElementById(getHomeTextItems()[i]);
      setActiveButton(getHomeTextItems()[i]);
    }
  }
}

export function AboutMeButton(props: Props) {
  return (
    <div className={`about-me left ${props.activeButton === 'about-me' ? 'active' : ''}`} id="about-me" onClick={() => {
      AnimateDiv('about-me', props.setActiveButton);
    }}>
      About Me
    </div>
  );
}

export function ProjectsButton(props: Props) {
  return (
    <div className={`projects bottom ${props.activeButton === 'projects' ? 'active' : ''}`} id="projects" onClick={() => {
      AnimateDiv('projects', props.setActiveButton);
    }}>
      Projects
    </div>
  );
}

export function ResumeButton(props: Props) {
  return (
    <div className={`resume right ${props.activeButton === 'resume' ? 'active' : ''}`} id="resume" onClick={() => {
      AnimateDiv('resume', props.setActiveButton);
    }}>
      Resume
    </div>
  );
}

export function Background() {
  const [activeButton, setActiveButton] = useState('');
  const props: Props = {
    setActiveButton: setActiveButton,
    activeButton: activeButton,
  };
  return (
    <div className="background">
      <div className={`title top ${activeButton === 'title' ? 'active' : ''}`} id="title">
        Max Bielstein
      </div>
      <AboutMeButton {...props} />
      <ProjectsButton {...props} />
      <ResumeButton {...props} />
    </div>
  );
}