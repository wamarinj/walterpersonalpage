import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Spanish = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div className='about'>
                <img className='imageAbout' src="/1.jpg" />
                <div>
                    <h3>Hola, Soy Walter</h3> <h4>Encantado de conocerte.</h4>
                    <p>Me gusta aprender cosas nuevas y aunque
                        <br />soy economista de profesión ahora estoy dedicado a <br></br>
                        convertirme en Fullstack Developer<br /></p>
                    <a href='CVWalterMarin.pdf' className='linkCv' download>
                        <FontAwesomeIcon icon={faDownload} />
                        Descargar CV
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Spanish;