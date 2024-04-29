import React from 'react';
import './Styles/About.css';
import HTML from './Assets/images/html.png';
import CSS from './Assets/images/css-3.png';
import JavaScript from './Assets/images/java-script.png';
import ReactJs from './Assets/images/science.png';
import NodeJS from './Assets/images/nodejs.png';
import Git from './Assets/images/git.png';
import Github from './Assets/images/github.png';
import VScode from './Assets/images/visual-studio.png';
import Figma from './Assets/images/figma (1).png';
import Wordpress from './Assets/images/wordpress.png';

const About = () => {
  return (
    <section className="about" id='About'>
      <div id="skills">
        <p>Know more</p>

        <div className="about-details">
          <h1>About Me</h1>
          <h3>SKILLS & TOOLS</h3>
          <h2>My Toolbox & Things I Can Do</h2>
        </div>

        <div className="tool">
          <div className="container">
            {/* HTML5 */}
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <h2>HTML5</h2>
                </div>
              </div>
              <div className="face face2">
                <img src={HTML} alt="HTML5" />
              </div>
            </div>

            {/* CSS3 */}
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <h2>CSS3</h2>
                </div>
              </div>
              <div className="face face2">
                <img src={CSS} alt="CSS3" />
              </div>
            </div>

            {/* JavaScript */}
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <h2>JavaScript</h2>
                </div>
              </div>
              <div className="face face2">
                <img src={JavaScript} alt="JavaScript" />
              </div>
            </div>

            {/* ReactJs */}
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <h2>ReactJs</h2>
                </div>
              </div>
              <div className="face face2">
                <img src={ReactJs} alt="ReactJs" />
              </div>
            </div>

            {/* nodejs */}
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <h2>Node.js</h2>
                </div>
              </div>
              <div className="face face2">
                <img src={NodeJS} alt="Node.js" />
              </div>
            </div>

            

            {/* Github */}
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <h2>Github</h2>
                </div>
              </div>
              <div className="face face2">
                <img src={Github} alt="Github" />
              </div>
            </div>

            {/* Visual Studio Code */}
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <h2>VS Code</h2>
                </div>
              </div>
              <div className="face face2">
                <img src={VScode} alt="Visual Studio Code" />
              </div>
            </div>
          
            {/* GIT */}
              <div className="card">
                <div className="face face1">
                  <div className="content">
                    <h2>Canva</h2>
                  </div>
                </div>
                <div className="face face2">
                  <img src={Git} alt="GIT" />
                </div>
              </div>
              
            {/* Figma */}
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <h2>Figma</h2>
                </div>
              </div>
              <div className="face face2">
                <img src={Figma} alt="Figma" />
              </div>
            </div>

            {/* Wordpress */}
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <h2>Wordpress</h2>
                </div>
              </div>
              <div className="face face2">
                <img src={Wordpress} alt="Wordpress" />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
