import React from 'react';

function Skills(props) {
  const mySkillsComponentStyles = {
    // backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '10px',
    paddingBottom: '15px',
  }

  const skillsSectionStyles = {
    display:  'flex',
    gridTemplateColumns: 'space-between', // 3 columns
    // maxWidth: '800px',
    gap: '20px',
    margin: '0 auto', // Center the content horizontally
    flexWrap: 'wrap', // Wrap cards if needed
    
  };

  const skillsCardStyles = {
    border: '1px solid #ccc',
    padding: '10px',
    width: '100%', 
    flex: '1 1 calc(33.33% - 20px)', // Divide equally with 20px gap
    marginBottom: '20px', // Add some bottom margin
    boxSizing: 'border-box', // Include padding and border in box sizing
    backgroundColor: '#ecf0f1',
  };

  return (
    <div style={mySkillsComponentStyles}> 
    <h3 className="project-category">Skills</h3> 
      <div style={skillsSectionStyles}>
        <div style={skillsCardStyles}>
          <h4>Languages and Markup:</h4>
          <ul>
            <li>Web Development: JavaScript (ES6), JSX, HTML, CSS</li>
            <li>Backend Development: C#, JSON, C, Java, Python</li>
          </ul>
        </div>

        <div style={skillsCardStyles}>
          <h4>Frameworks, Libraries and Others:</h4>
          <ul>
            <li>Front-End Frameworks and Libraries: React, Redux, React Native, Chart.js</li>
            <li>Back-End and Database: Node.js, .NET 6, Entity Framework Core, RestSharp, MySQL</li>
            <li>Python: pandas, NumPy, Matplotlib</li>
          </ul>
        </div>

        <div style={skillsCardStyles}>
          <h4>Development Tools:</h4>
          <ul>
            <li>Visual Studio Code, Zsh shell, Git, GitHub, npm, webpack, Jest, Firebase, Azure, Firestore Database</li>
            <li>AutoCAD, Revit</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;