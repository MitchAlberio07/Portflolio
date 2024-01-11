import React from 'react';
import { Link } from 'react-scroll'; 
import './Styles/Work.css';

const Work = () => {
  return (
    <div id='worksSection'>
      <section id='works'>
        <h2 >Projects </h2>
        <div className="Project-container">
          
          <div className="zoom-effect-container">
            <div className="image-card bg-one"></div>
              <div className="Project-content">
                <h3>An immersive, responsive and flexible online experience, embracing the nostalgic charm of a retro-themed diner.
                </h3>
                <a className="view-btn" href="https://retro-bite.vercel.app/" target="_blank">View Project 
                </a>
              </div>
          </div>

          <div className="zoom-effect-container">
            <div className="image-card bg-three"></div>
              <div className="Project-content">
              <h3>Freelance design collections in Figma
              </h3>      
              <a className="view-btn" href="https://www.figma.com/file/zscQ1AUqIVIieEysMsHAh2/Designs?type=design&node-id=0-1&mode=design&t=Gy9dp6ildfnal1TZ-0" target="_blank">View More Designs 
              </a>
              </div>
          </div>

          
          
        </div>
     
      </section>  
    </div>
  )
}

export default Work

//  <div className="zoom-effect-container">
//         <div className="image-card bg-two"></div>
//           <div className="Project-content">
//           <h3>An immersive and enjoyable online experience, embracing the nostalgic charm of a retro-themed diner website.
//           </h3>
//             <a className="btn" href="#">Read More</a>
//           </div>
//       </div>