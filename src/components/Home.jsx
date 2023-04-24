import React from 'react';
import Typed from 'typed.js';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import data from "../data.json"

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";
import  Card  from './Card';


const Home = () => {
  const el = React.useRef(null);
  // console.log(data);

  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        '<p style="color:#568EF8">FullStack Developer</p>',
        '<p style="color:#C17E31">Backend Developer</p>',
        '<p style="color:#3BAD61">Frontend Developer</p>',
        '<p style="color:#DD6A83">Ui/Ux designer</p>'
      ],
      typeSpeed: 90,
      backSpeed: 90,
      loop: 60,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <div className="app">

      <nav className='navBar' id="navBar">
        <div className='navLogo'>
          <img src="src/assets/LogoW.svg" alt="Logow"></img>
        </div>
        <div>
          <ul className='navLinks'>
            <li id="Home">
            Home
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
            <a href="#portafolio">Portafolio</a>
            </li>
            <li>
            <a href="#contactMe">Contact Me</a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/walter-m-b23a37177'>
                <img src="src/assets/brandlinkedin.svg" alt="linkedin"></img>
              </a>
            </li>
            <li>
              <a href='https://github.com/wamarinj'>
                <img src="src/assets/brand github-square.svg" alt="github"></img>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className='titleMain' id="navBar">
        <h1>Hi I'm Walter Marín </h1>
        <h3 ref={el} /> <br></br>
        </div>
        <div className='hireMe'>
        <button>HIRE ME</button>
      </div>



      <div className='services' id="services">
      <a href="#Home">
        <h2>Services</h2>
        </a>
        <div className='cards'>
          <div className='cardServices'>
            <img src="src/assets/Web.svg" alt="web"></img>
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam eu volutpat leo. Pellentesque elementum et nisi blandit interdum.
              Morbi convallis dui augue, finibus iaculis felis vulputate a. </p>
          </div>
          <div className='cardServices'>
            <img src="src/assets/coding.svg" alt="coding"></img>
            <h4>Coding</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam eu volutpat leo. Pellentesque elementum et nisi blandit interdum.
              Morbi convallis dui augue, finibus iaculis felis vulputate a. </p>
          </div>
          <div className='cardServices'>
            <img src="src/assets/uiux.svg" alt="ui"></img>
            <h4>UI / UX Desing</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam eu volutpat leo. Pellentesque elementum et nisi blandit interdum.
              Morbi convallis dui augue, finibus iaculis felis vulputate a. </p>
          </div>
        </div>
      </div>


      <div className='portafolio' id="portafolio">
      <a href="#Home">
        <h2>Portafolio</h2>
        </a>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper"  slidesPerView={2.8} spaceBetween={20}
          style={{
            "--swiper-navigation-color": "#ffff",
            "--swiper-pagination-color": "#ffff",
            
          }}
          // centeredSlides={true}
          >
          {data.map((item) => (
          <SwiperSlide key={item.id}>
              <Card title={item.title} img={item.img} desc={item.desc} redirect={item.redirect}></Card>
          </SwiperSlide>
          ))}                  
        </Swiper>
        
      </div>


      <div className='contactMe' id="contactMe">
      <a href="#Home">
        <h2>Contact Me</h2>
        </a>
        <div className='contact'>
          <div className='solveContact'>
            <h1>Got a problem <br></br>to solve?</h1>
            <a href='https://www.linkedin.com/in/walter-m-b23a37177'>
              <img className='linkedinContact' src="src/assets/brand linkedin.png" alt="linkedin"></img> 
            </a>
            <a href='https://github.com/wamarinj'>
            <img src="src/assets/brand github-square.png" alt="github"></img>
            </a>
            <p>walteramj@gmail.com</p>
          </div>
          <div className='formContact'>
            <form>
              <label for="fname">Your Name</label><br></br>
              <input type="text" id="yourname" name="yourname" /><br></br>
              <label for="email">Email</label><br></br>
              <input type="email" id="email" name="email" /><br></br>
              <textarea name="message" rows="10" cols="30">
                Subject
              </textarea><br></br>
              <input className='btnForm' type="submit" value="Submit"></input>
            </form>
          </div>
        </div>
        <p>® Walter Marín all rights reserved 2023</p>



      </div>
    </div>
  );
};

export default Home;