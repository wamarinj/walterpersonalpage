import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const About = () => {

    const navigate = useNavigate();

    return (
        <div className='about'>
            <img className='imageAbout' src="1.jpg" />
            <div>
                <h3>Hi, I’m Walter</h3>  <h4>Nice to meet you.</h4>
                <p>I like to learn new things and although <br />
                    I am an economist by profession now I am dedicated to being
                    <br />a fullstack developer since I love new challenges</p>
                <a href='CVWalterMarin.pdf' className='linkCv' download>
                    <FontAwesomeIcon icon={faDownload} />
                    Downdload CV
                </a>

            </div>
        </div>

    );
};

export default About;