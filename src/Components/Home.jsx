import React from 'react';
import './Styles/Home.css';
import myProfile from './Assets/images/mitch.png';
import { Link } from 'react-scroll'; 

const Home = () => {
  return (
    <section id='home'>
    <div className="home" >
      <div className="home-text">
        <span>Front-End Developer | Web Designer</span>
        <h1>Metuselam Alberio</h1>
        <p>Passionate about bringing technical and visual aspects of digital products to life. Proficient in the latest web technologies, with a solid foundation in HTML, CSS, and JavaScript skills to contribute to the development of visually appealing and user-friendly websites.</p>

        <div className="main-btn">
          <a href="https://docs.google.com/document/d/1E8-D87eWOpxwLox8hY9VNZjPBeqdXdwR/edit?usp=sharing&ouid=113172873795384160487&rtpof=true&sd=true" target="_blank" className="btn">Download CV</a>
          <Link
          activeClass='active'
          to='contact'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className='btn two'
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="home-img">
        <img src={myProfile} alt="Profile" />
      </div>
      </div>
    </section>
  )
}

export default Home;

