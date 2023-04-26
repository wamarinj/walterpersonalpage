import React, { useRef } from 'react';
import Typed from 'typed.js';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import data from "../data.json"
import emailjs from '@emailjs/browser';
import { useState } from 'react';




// import required modules
import { Navigation } from "swiper";
import  Card  from './Card';


const Home = () => {
  const el = React.useRef(null);
  // console.log(data);
  const typed = React.useRef(null);

  //
  const [message, setMessage] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [emailStatus, setEmailStatus] = useState("")

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fvms40o', 'template_vu9kct5',
        form.current, '8sjbvqhR333NXay-3')
        .then((result) => {
            // console.log(result.text);
            setMessage("")
            setEmail("")
            setName("")
            setEmailStatus("Mensaje Enviado")
        }).catch((error) => {
            // console.log(error.text);
            setEmailStatus("Mensaje No Enviado")
        });
};

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
          <img src="/LogoW.svg" alt="Logow"></img>
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
              <a href='https://www.linkedin.com/in/walter-m-b23a37177' target="_blank">
                <img src="/brandlinkedin.svg" alt="linkedin"></img>
              </a>
            </li>
            <li>
              <a href='https://github.com/wamarinj' target="_blank">
                <img src="/brand github-square.svg" alt="github"></img>
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
          <a href='https://www.linkedin.com/in/walter-m-b23a37177' target="_blank">
        <button>HIRE ME</button>
        </a>
      </div>



      <div className='services' id="services">
      <a href="#Home">
        <h2>Services</h2>
        </a>
        <div className='cards'>
          <div className='cardServices'>
            <img src="/Web.svg" alt="web"></img>
            <h4>Web Design</h4>
            <p>I love developing digital interfaces, and designing web sites and applications, 
              respecting the design and providing agile solutions. </p>
          </div>
          <div className='cardServices'>
            <img src="/coding.svg" alt="coding"></img>
            <h4>Coding</h4>
            <p>Using JavaScript as one of the most agile and versatile languages ​​
              with Html and Css to apply styles and Node Js for the backend I offer Full Stack solutions </p>
          </div>
          <div className='cardServices'>
            <img src="/uiux.svg" alt="ui"></img>
            <h4>UI / UX Desing</h4>
            <p>I love the idea of ​​providing an excellent user experience with 
              interfaces designed to improve navigation and use with excellent designs. </p>
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
            <a href='https://www.linkedin.com/in/walter-m-b23a37177'target="_blank">
              <img className='linkedinContact' src="/brand linkedin.png" alt="linkedin"></img> 
            </a>
            <a href='https://github.com/wamarinj' target="_blank">
            <img src="/brand github-square.png" alt="github"></img>
            </a>
            <p>walteramj@gmail.com</p>
          </div>
          <div className='formContact'>
            
            <form ref={form} onSubmit={sendEmail}>
              
              <label for="fname">Your Name</label><br></br>
              <input id="youname" className='youname'
                 type="text"
                 placeholder="Enter name"
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 name='user_name'
                /><br></br>
              
              <label for="email">Email</label><br></br>
              <input id="contactemail" className='youname'
                type="email"
                value={email}
                placeholder="Enter your Email"
                name='user_email'
                onChange={(e) => setEmail(e.target.value)} /><br></br>
              
              <textarea 
                type="textarea"
                value={message}
                aria-label="With textarea"
                name='user_message'
                rows="7"
                cols="50"
                onChange={(e) => setMessage(e.target.value)} /> <br></br>
              
              <button className='btnForm' 
                type='submit'
                onClick={sendEmail} 
                value="Send">
                  Send
              </button>
              <p style={{color:"white"}}>{emailStatus}</p>

            </form>
          </div>
        </div>
        <p>® Walter Marín all rights reserved 2023</p>



      </div>
    </div>
  );
};

export default Home;