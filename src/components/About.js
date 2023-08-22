import React from "react";
import Skills from "./Skills";

function About(props){
  const StyledComponent = {
    // backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '40px',
    paddingBottom: '20px'
  }

  return (
    <React.Fragment>
      <div style={StyledComponent} id="aboutSection">
      <h4 className="header">Hi! I'm <em>Qian Li</em> !</h4>
      <h4 className="header">
      A highly motivated <em>Junior Software Developer</em> !</h4>
      <h4 className="header">
      And a experienced <em>Project Manager</em> in the design, real estate, and water resource management industry.</h4>
      </div>

      <Skills />     
    </React.Fragment>
  );
}

export default About;