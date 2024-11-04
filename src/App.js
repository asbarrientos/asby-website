import React, { useState } from 'react';
import './App.css';
import Typewriter from 'typewriter-effect';
import Slider from 'react-slick';

import placeholder from './images/placeholder-image.png';

import logopink from './images/LOGO/blacklogo.png';

import profilePic from './images/home-profile.jpg';

import card1 from './images/BUSINESS CARDS/1.png';
import card2 from './images/BUSINESS CARDS/2.png';
import card3 from './images/BUSINESS CARDS/3.png';
import card4 from './images/BUSINESS CARDS/4.png';
import card5 from './images/BUSINESS CARDS/5.png';
import card6 from './images/BUSINESS CARDS/6.png';
import card7 from './images/BUSINESS CARDS/7.png';
import card8 from './images/BUSINESS CARDS/8.png';
import card9 from './images/BUSINESS CARDS/9.png';

import comic1 from './images/COMICS/1.jpg';
import comic2 from './images/COMICS/2.jpg';
import comic3 from './images/COMICS/3.jpg';

import ad1 from './images/PILLOW/Ad 1.png';
import ad2 from './images/PILLOW/Ad 2.png';
import ad3 from './images/PILLOW/Welcome Email.png';

import exampleImage1 from './images/PUBMATS/1.png';
import exampleImage2 from './images/PUBMATS/2.png';
import exampleImage3 from './images/PUBMATS/3.png';

import exampleImage4 from './images/PUBMATS/4.png';
import exampleImage5 from './images/PUBMATS/5.png';
import exampleImage6 from './images/PUBMATS/6.png';

import figma1 from './images/FIGMA/tc.png';
import figma2 from './images/FIGMA/th.png';
import figma3 from './images/FIGMA/hta.png';

const App = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [firstModalOpen, setFirstModalOpen] = useState(false);
  const [secondModalOpen, setSecondModalOpen] = useState(false);
  const [thirdModalOpen, setThirdModalOpen] = useState(false);

  const handleMouseEnter = (index) => setHoveredItem(index);
  const handleMouseLeave = () => setHoveredItem(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="App">
    {/* navbar */}
    <header className='navbar'>
      <a href="#home" className='navbar__title navbar__item'>asby</a>
      <a href="#home" className='nav navbar__item'>Home</a>
      <a href="#about" className='nav navbar__item'>About</a>
      <a href="#portfolio" className='nav navbar__item'>Portfolio</a>
    </header>

    {/* home page */}
    <section id="home">
        <div className="home-container">
          <img src={logopink} alt="LogoP" className='pinkLogo' />
            <p className="home-owner-name">Abigail Barrientos</p>
            <p className="home-tagline">
              <Typewriter
                options={{
                  strings: ['Code with Passion.', 'Design with Purpose.', 'Your Vision, Our Code.', 'Crafting Websites That Inspire.'],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </p>
            <a href="#portfolio" className="home-button">Learn More</a>
        </div>
      </section>

    {/* about page */}
    <section id="about">
        <div className="section-container">
          <h2 className="section-title">Who I am?</h2>
          <div className="about-content">
            <div className="about-text">
              <h1 className="about-name">My name is Abigail Barrientos.</h1>
              <p className="about-intro">
                My family used to call me Abby, and my friends called me Asby. My hobbies include taking care of plants in our small garden at home, watching movies online, and sometimes making random drawings. I am a recent graduate of Holy Angel University with a Bachelor of Science in Information Technology, majoring in Web Development. In my fourth year, I focused on designing and developing websites and web applications. We learned about front-end and back-end technologies, as well as user interface (UI) and user experience (UX) design. I completed a capstone project that showcased my ability to solve real-world problems with innovative web solutions. With hands-on experience, I am excited to start my career in web development.
              </p>
            </div>
            <div>
              <img className="about-profile-pic" alt="Abigail Barrientos" src={profilePic} />
            </div>
          </div>
          <h2 className="section-title">Education & Work Experience</h2>
          <div className="section-grid">
            <div className="section-card">
              <h4>2020 - 2024 | Holy Angel University</h4>
              <p>Bachelor of Science in Information Technology with Area of Specialization in Web Development</p>
              <h4>2014 - 2020 | Holy Angel University</h4>
              <p>Secondary Education | General Academic Strand (Senior)</p>
              <h4>2007 - 2014 | Telabastagan Integrated School</h4>
              <p>Primary Education</p>
            </div>
            <div className="section-card">
              <h4>Hooli Software | June - October 2023</h4>
              <p>
                Making social media posts and coupon templates. Work closely with UX/UI designers to ensure the seamless integration of technical functionalities with visual design. Collaborate with developers, designers, and project managers to meet project milestones and deadlines.
              </p>
            </div>
          </div>
        </div>
      </section>

    {/* skills page */}
    <section id="skills">
        <div className="section-container">
        <h2 className="section-title">Core Skills & Expertise</h2>
          <div className="section-grid">
            <div className="section-card">
              <h4>UI/UX Design Skills</h4>
              <ul className="skills-items">
                {['User Research', 'Wireframing & Prototyping', 'Visual Design', 'User Interface (UI) Design', 'User Experience (UX) Design', 'Interaction Design'].map((skill, index) => (
                  <li
                    key={index}
                    className={`skills-item ${hoveredItem === index ? 'hovered' : ''}`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="section-card">
              <h4>Front-End Development Skills</h4>
              <ul className="skills-items">
                {['HTML/CSS', 'Version Control', 'Responsive Design', 'Frameworks & Libraries', 'Collaboration & Communication'].map((skill, index) => (
                  <li
                    key={index + 6}
                    className={`skills-item ${hoveredItem === index + 6 ? 'hovered' : ''}`}
                    onMouseEnter={() => handleMouseEnter(index + 6)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    {/* portfolio page */}
      <section id="portfolio">
        <div className="section-container">
          <h2 className="section-title">Portfolio</h2>
            <div className="text-content">
              <h3>Short Comics</h3>
                <p>This is my art project for one of my subjects in college.
                  Comics as art combine visual storytelling with sequential art to create a unique narrative form. 
                  The art of comics ranges from simple, minimalist drawings to intricate, detailed illustrations, 
                  making it a versatile medium for expression.</p>
            </div>
            <div className="section-grid">
              <div className="section-card">
                <div className="portfolio-item">
                  <img src={comic1} alt="Slide 1" />
                </div>
              </div>

              <div className="section-card">
                <div className="portfolio-item">
                  <img src={comic2} alt="Slide 2" />
                </div>
              </div>

              <div className="section-card">
                <div className="portfolio-item">
                  <img src={comic3} alt="Slide 3" />
                </div>
              </div>
            </div>

            <div className="text-content">
              <h3>Advertisement and Welcome Email</h3>
                <p>A promotional message to persuade an audience to take action and the first message to greet and engage new subscribers.</p>
            </div>
            <div className="section-grid">
              <div className="section-card">
                <div className="portfolio-item">
                  <img src={ad1} alt="Slide 1" />
                </div>
              </div>

              <div className="section-card">
                <div className="portfolio-item">
                  <img src={ad2} alt="Slide 2" />
                </div>
              </div>

              <div className="section-card">
                <div className="portfolio-item">
                  <img src={ad3} alt="Slide 3" />
                </div>
              </div>
            </div>
          
            <div className="text-content">
              <h3>Pubmats</h3>
              <p>These are graphic materials or digital posters used to promote or announce events, 
                campaigns, or initiatives, often on social media or other online platforms</p>
            </div>

              <div className="section-grid">
                <div className="section-card">
                  <Slider {...settings}>
                    <div className="portfolio-item">
                      <img src={exampleImage1} alt="Slide 1" />
                    </div>
                    <div className="portfolio-item">
                      <img src={exampleImage2} alt="Slide 2" />
                    </div>
                    <div className="portfolio-item">
                      <img src={exampleImage3} alt="Slide 3" />
                    </div>
                  </Slider>
                </div>

                <div className="section-card">
                  <Slider {...settings}>
                    <div className="portfolio-item">
                      <img src={exampleImage4} alt="Slide 4" />
                    </div>
                    <div className="portfolio-item">
                      <img src={exampleImage5} alt="Slide 5" />
                    </div>
                    <div className="portfolio-item">
                      <img src={exampleImage6} alt="Slide 6" />
                    </div>
                  </Slider>
                </div>
              </div>


            <div className="text-content">
              <h3>Figma</h3>
              <p>Figma projects are often used for designing websites, mobile apps, and other digital products, offering features like version control, design systems, and plugin integrations.</p>
            </div>

            <div className="section-grid">
              <div className="section-card">
                <Slider {...settings}>
                  <div className="portfolio-item">
                    <img src={figma1} alt="Slide 1" />
                  </div>
                  <div className="portfolio-item">
                    <img src={figma2} alt="Slide 2" />
                  </div>
                  <div className="portfolio-item">
                    <img src={figma3} alt="Slide 3" />
                  </div>
                </Slider>
              </div>
            </div>

            <div className="text-content">
              <h3>Cards and Calendar</h3>
              <p>This is a project I did in college. We need to create a logo and print it.</p>
            </div>

            <div className="section-grid">
              <div className="section-card">
                <div className="portfolio-item">
                  <img src={card1} alt="Slide 1" />
                </div>
              </div>

              <div className="section-card">
                <div className="portfolio-item">
                  <img src={card2} alt="Slide 2" />
                </div>
              </div>

              <div className="section-card">
                <div className="portfolio-item">
                  <img src={card3} alt="Slide 3" />
                </div>
              </div>
              <div className="section-card">
                <div className="portfolio-item">
                  <img src={card4} alt="Slide 1" />
                </div>
              </div>

              <div className="section-card">
                <div className="portfolio-item">
                  <img src={card5} alt="Slide 2" />
                </div>
              </div>

              <div className="section-card">
                <div className="portfolio-item">
                  <img src={card6} alt="Slide 3" />
                </div>
              </div>

              <div className="section-card">
                <div className="portfolio-item">
                  <img src={card7} alt="Slide 1" />
                </div>
              </div>

              <div className="section-card">
                <div className="portfolio-item">
                  <img src={card8} alt="Slide 2" />
                </div>
              </div>

              <div className="section-card">
                <div className="portfolio-item">
                  <img src={card9} alt="Slide 3" />
                </div>
              </div>
            </div>
        </div>
      </section>

      <section id="portfolio">
        <div className="section-container">
          <h2 className="section-title">! WORK IN PROCESSING !</h2>
            <div className="card-containers-wrapper">
            {/* First Card */}
            <div className="card-container-wrapper">
              <div className="card-container">
                <div className="card" onClick={() => setFirstModalOpen(true)} style={{ cursor: 'pointer' }}>
                  <img src={placeholder} className="card-img-top" alt="cards" />
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                {firstModalOpen && (
                  <div className="modal">
                    <div className="modal-overlay" onClick={() => setFirstModalOpen(false)}></div>
                    <div className="modal-content">
                      <span className="close" onClick={() => setFirstModalOpen(false)}>&times;</span>
                      <Slider {...settings}>
                        <div className="cards-images"><img src={card1} alt="Modal Content 1" /></div>
                        <div className="cards-images"><img src={card2} alt="Modal Content 2" /></div>
                        <div className="cards-images"><img src={card3} alt="Modal Content 3" /></div>
                      </Slider>
                      <p>Here is the picture inside the modal!</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Second Card */}
            <div className="card-container-wrapper">
              <div className="card-container">
                <div className="card" onClick={() => setSecondModalOpen(true)} style={{ cursor: 'pointer' }}>
                  <img src={placeholder} className="card-img-top" alt="cards" />
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                {secondModalOpen && (
                  <div className="modal">
                    <div className="modal-overlay" onClick={() => setSecondModalOpen(false)}></div>
                    <div className="modal-content">
                      <span className="close" onClick={() => setSecondModalOpen(false)}>&times;</span>
                      <Slider {...settings}>
                        <div className="cards-images"><img src={ad1} alt="Modal Content 1" /></div>
                        <div className="cards-images"><img src={ad2} alt="Modal Content 2" /></div>
                        <div className="cards-images"><img src={ad3} alt="Modal Content 3" /></div>
                      </Slider>
                      <p>Here is the picture inside the modal!</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Third Card */}
            <div className="card-container-wrapper">
              <div className="card-container">
                <div className="card" onClick={() => setThirdModalOpen(true)} style={{ cursor: 'pointer' }}>
                  <img src={placeholder} className="card-img-top" alt="cards" />
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                {thirdModalOpen && (
                  <div className="modal">
                    <div className="modal-overlay" onClick={() => setThirdModalOpen(false)}></div>
                    <div className="modal-content">
                      <span className="close" onClick={() => setThirdModalOpen(false)}>&times;</span>
                      <Slider {...settings}>
                        <div className="cards-images"><img src={figma1} alt="Modal Content 1" /></div>
                        <div className="cards-images"><img src={figma2} alt="Modal Content 2" /></div>
                        <div className="cards-images"><img src={figma3} alt="Modal Content 3" /></div>
                      </Slider>
                      <p>Here is the picture inside the modal!</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="card-containers-wrapper">
            {/* First Card */}
            <div className="card-container-wrapper">
              <div className="card-container">
                <div className="card" onClick={() => setFirstModalOpen(true)} style={{ cursor: 'pointer' }}>
                  <img src={placeholder} className="card-img-top" alt="cards" />
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                {firstModalOpen && (
                  <div className="modal">
                    <div className="modal-overlay" onClick={() => setFirstModalOpen(false)}></div>
                    <div className="modal-content">
                      <span className="close" onClick={() => setFirstModalOpen(false)}>&times;</span>
                      <Slider {...settings}>
                        <div className="cards-images"><img src={card1} alt="Modal Content 1" /></div>
                        <div className="cards-images"><img src={card2} alt="Modal Content 2" /></div>
                        <div className="cards-images"><img src={card3} alt="Modal Content 3" /></div>
                      </Slider>
                      <p>Here is the picture inside the modal!</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Second Card */}
            <div className="card-container-wrapper">
              <div className="card-container">
                <div className="card" onClick={() => setSecondModalOpen(true)} style={{ cursor: 'pointer' }}>
                  <img src={placeholder} className="card-img-top" alt="cards" />
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                {secondModalOpen && (
                  <div className="modal">
                    <div className="modal-overlay" onClick={() => setSecondModalOpen(false)}></div>
                    <div className="modal-content">
                      <span className="close" onClick={() => setSecondModalOpen(false)}>&times;</span>
                      <Slider {...settings}>
                        <div className="cards-images"><img src={ad1} alt="Modal Content 1" /></div>
                        <div className="cards-images"><img src={ad2} alt="Modal Content 2" /></div>
                        <div className="cards-images"><img src={ad3} alt="Modal Content 3" /></div>
                      </Slider>
                      <p>Here is the picture inside the modal!</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Third Card */}
            <div className="card-container-wrapper">
              <div className="card-container">
                <div className="card" onClick={() => setThirdModalOpen(true)} style={{ cursor: 'pointer' }}>
                  <img src={placeholder} className="card-img-top" alt="cards" />
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                {thirdModalOpen && (
                  <div className="modal">
                    <div className="modal-overlay" onClick={() => setThirdModalOpen(false)}></div>
                    <div className="modal-content">
                      <span className="close" onClick={() => setThirdModalOpen(false)}>&times;</span>
                      <Slider {...settings}>
                        <div className="cards-images"><img src={figma1} alt="Modal Content 1" /></div>
                        <div className="cards-images"><img src={figma2} alt="Modal Content 2" /></div>
                        <div className="cards-images"><img src={figma3} alt="Modal Content 3" /></div>
                      </Slider>
                      <p>Here is the picture inside the modal!</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* contact page */}

    {/* footer page */}  
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logopink} alt="LogoP" className="footer-logo" />
          <p>© 2024 Abigail Barrientos. All rights reserved.</p>
        </div>
        <div className="footer-center">
          <p>"Designing the future, one line of code at a time."</p>
        </div>
        <div className="footer-right">
          <p>Connect with me:</p>
          <div className="social-links">
            <a href="https://www.facebook.com/asbyyyyy" target="_blank" rel="noopener noreferrer">Facebook</a> | 
            <a href="https://www.linkedin.com/in/asby-barrientos/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default App;
