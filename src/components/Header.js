import React from "react";
import linkedinIcon from './../assets/img/linkedInIcon.png';
import githubIcon from './../assets/img/githubIcon.png';
import Resume from './Resume';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Projects from "./Projects";

const StyledHeader = styled.header`
  background-color: rgb(216, 191, 216);
  width: 100vw;
  max-width:100vw;
  height: var(--header-height);
  display: flex;
  align-items: center;
  padding: 0 2rem;

  font-family: Georgia, serif;

  & > h1 {
    font-size: 3rem;
    margin-right: 50px;
  }
  & > h2 {
    font-size: 2rem;
    margin: 15px;
  }
  & a {
    color:rgb(73, 97, 51)
  }
  & a:link {
    text-decoration: none;
  }
  & a:hover {
    color:rgb(124, 55, 147)
  }
`

function Header(){
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <StyledHeader>
        <h2>
          <Link onClick={() => scrollToSection('aboutSection')}>Qian Li</Link>
        </h2>
        <h2>
          <Link onClick={() => scrollToSection('aboutSection')}>About</Link>
        </h2>
        <h2>
          <Link onClick={() => scrollToSection('projectsSection')}>Projects</Link>
        </h2>
        <h2>
          <Link onClick={() => scrollToSection('contactSection')}>Contact</Link>
        </h2>

        <h2><a href={Resume} target="_blank" rel="noopener noreferrer">Review My Resume</a></h2>
        <Link to="https://github.com/nancyliqn91" target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px' }} > 
        <img src={githubIcon} alt="GitHub" style={{ width: '30px', height: '30px' }} /> 
      </Link>
      
      <Link to="https://www.linkedin.com/in/qian-li-calla " target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" style={{ width: '30px', height: '30px' }}/> 
      </Link>
      </StyledHeader>

      <About/>
      <Projects/>
      <Contact/>
    </div>
  );

}
  
export default Header;

