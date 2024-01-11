import React from 'react';

const Projects = () => {
  return (
    <section className="project"  id='Projects'>
      <div id="recent">
        <h2>Recent Projects</h2>
      </div>

      <div id="slider">
        <input type="radio" name="slider" id="slide1" defaultChecked />
        <input type="radio" name="slider" id="slide2" />
        <input type="radio" name="slider" id="slide3" />
        <input type="radio" name="slider" id="slide4" />
        <div id="slides">
          <div id="overflow">
            <div className="inner">
              <div className="slide slide-1">
                <div className="slide-content">
                  <div>
                    <h3>FULL-STACK WEBSITE</h3>
                    <h2>PINEAPPLE</h2>
                    <div className="box">
                      <div className="tools">ReactJs</div>
                      <div className="tools">CSS</div>
                      <div className="tools">SASS</div>
                      <div className="tools">VERCEL</div>
                    </div>
                    <div className="project-btn">
                      <a href="#" target="_blank" rel="noopener noreferrer" className="view-btn">
                        View Project
                      </a>
                      <a href="#" className="view-btn">
                        Github
                      </a>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, magnam cum! Odit quos perspiciatis neque
                      repellendus! Dolore sint laudantium corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Suscipit, deserunt!
                    </p>
                  </div>

                  <div className="project-img">
                    <img src="images/mitchPortfolio.jpg" alt="" />
                  </div>
                </div>
              </div>

              <div className="slide slide-2">
                <div className="slide-content">
                  <h2>Slide 2</h2>
                  <p>Content for slide 2</p>
                </div>
              </div>

              <div className="slide slide-3">
                <div className="slide-content">
                  <h2>Slide 3</h2>
                  <p>Content for slide 3</p>
                </div>
              </div>

              <div className="slide slide-4">
                <div className="slide-content">
                  <h2>Slide 4</h2>
                  <p>Content for slide 4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="controls">
          <label htmlFor="slide1"></label>
          <label htmlFor="slide2"></label>
          <label htmlFor="slide3"></label>
          <label htmlFor="slide4"></label>
        </div>
        <div id="bullets">
          <label htmlFor="slide1"></label>
          <label htmlFor="slide2"></label>
          <label htmlFor="slide3"></label>
          <label htmlFor="slide4"></label>
        </div>
      </div>
    </section>
  );
};

export default Projects;
