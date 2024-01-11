import React from 'react';
import './Styles/Home.css';
import myProfile from './Assets/images/mitch.png';
import { Link } from 'react-scroll'; 

const Header = () => {
  return (
    <section className="home" id='home'>
      <div className="home-text">
        <span>Front-End Developer | Web Designer</span>
        <h1>Metuselam Alberio</h1>
        <p>Passionate about bringing technical and visual aspects of digital products to life. Proficient in the latest web technologies, with a solid foundation in HTML, CSS, and JavaScript skills to contribute to the development of visually appealing and user-friendly websites.</p>

        <div className="main-btn">
          <a href="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=9599675aa6&attid=0.1&permmsgid=msg-a:r1417893889574672313&th=18cf7c7535f4e6c0&view=att&disp=inline&realattid=f_lr8zjtfz0&saddbat=ANGjdJ_s2OXoYd3_EQ6PJc_wEfw40QSuMrS2hiLl0p1fNM77m9cPPKey_7E8AUfkiotlFG28OpXaCfoAWN7io08obrH5pU0C5OcgMURhIhBzAneRJx1RIfi9WrW9Jmi6VfF5IXSUK4b91P9ckDSciAuI48OVdtS2xDJlmqG7nV7SyN1GHbEIKfQu60DCg7odEKK11FuiH97pkR7x6AiUsL2uKpISEPAewDMXFQncFtYZrtcxI4LQpDDmF3MsrjQeOL4lWVz_qMKRHMavcuGOJC8qLeeyOh-MCZzGFjNpCxRBPcGwjyPBBzRgVEGLB-AQwZPfhprSa6hjz_2zaJQ_doK014jDvUkJyCOLeiyhcSni8gXnxuzMkvqyl5DmZVdnfyu6Uqv4Px7OjICgKGcLDUtES0CCt50BOt5zqFdM5now_9trGs4w6--cIrwn9BTB0VrDUOxl4G1-YYKbpxp1doBHIg8mhIg-lB_weJlbl7lI0ABrWWFIYj7D-6CbygLVdSEHVSdx0s2z5W7aQiGW4AyyOUH6PjQJjgboAIatFIozqeJdtAEvkSaVXEXlyYMG8897Hop8qFc5Kkvz7itGW0TIm24e9HPbKKCwOgFO2TD2Z1YTv9cO5j6-DdWq-uf6vu3SDkDuOAX_LpDfnB8DIFgPTj1VeQkxMozii970q4RmN8xvyE7nSbYZBjIZM43wJoh-jJK4vyjVISg_CveK5ijXuvsyjHJaYb_nmT1CpHGoS8igMID3F_OQjVbrdT4AwE-aGlApbPUycoCMzGj2GHTH4LQlDxAxF3_OfWANaClS9vbm9xeL_FkvHkaowPMMj5RByiu7Wq8eO3GGzEvxqkHu8IgX7n6nTARf7lc3qbGD_bx8v9EIbKxs7eC-kurmL1SHibMsJo49ktc17pOxh7b4rKRA66pA_2xUGdazkMQOekjRGmDis-L9wDcLfMgV4x7Dx3-hU0fSuouknhzJ_zov9ptqLf_3xK9okQbtr385XBloRGoRda6grrHddoI" target="_blank" className="btn">Download CV</a>
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
    </section>
  )
}

export default Header;
