import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {

    const navigate = useNavigate();

    return (
        <div className='about'>
            <img className='imageAbout' src="src/assets/1.jpg" />
            <div>
                <h3>Hi, I’m Walter</h3>  <h4>Nice to meet you.</h4>
                <p>I like to learn new things and although <br/>
                I am an economist by profession now I am dedicated to being 
                <br/>a fullstack developer since I love new challenges</p>
                <h6>Downdload CV</h6><button type="button" 
                class="btn btn-outline-warning">CV</button>
            </div>
        </div>

    );
};

export default About;