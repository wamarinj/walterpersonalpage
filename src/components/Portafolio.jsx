import React from 'react';
import { Button, Card } from 'react-bootstrap';


import { useNavigate } from 'react-router-dom';

const Portafolio = () => {

    const navigate = useNavigate();

    return (
       <div className='portafolio'>
        <Card >
      <Card.Img variant="top" src="src/assets/ecomerce.png" />
      <Card.Body>
        <Card.Title>Ecomerce</Card.Title>
        <Card.Text>
          Using <br></br>
          <img src="src/assets/reactlogo.svg" style={{width: "40px"}}/>
          <img src="src/assets/Bootstrap_logo.png" style={{width: "40px"}}/>
          <img src="src/assets/githublogo.png" style={{width: "40px"}}/>
          <img src="src/assets/icon-html.png" style={{width: "40px"}}/>
          <img src="src/assets/icon-css.png" style={{width: "40px"}}/>
          <img src="src/assets/icon-js.png" style={{width: "40px"}}/>
        </Card.Text>
        <Button link href="https://tourmaline-bonbon-8cc184.netlify.app/#/" 
            variant="primary">Go Ecomerce</Button>
      </Card.Body>
    </Card>

    <Card >
      <Card.Img variant="top" src="src/assets/pokeapi.png" />
      <Card.Body>
        <Card.Title>Poke Api</Card.Title>
        <Card.Text>
        Using <br></br>
          <img src="src/assets/githublogo.png" style={{width: "40px"}}/>
          <img src="src/assets/icon-html.png" style={{width: "40px"}}/>
          <img src="src/assets/icon-css.png" style={{width: "40px"}}/>
          <img src="src/assets/icon-js.png" style={{width: "40px"}}/>
        </Card.Text>
        <Button 
        link href="https://silly-sprite-397cb0.netlify.app/#/"
        variant="primary">Go PokeApi</Button>
      </Card.Body>
    </Card>

    <Card >
      <Card.Img variant="top" src="src/assets/rickandmorty.png" />
      <Card.Body>
        <Card.Title>Rick and Morty</Card.Title>
        <Card.Text>
        Using <br></br>  
          <img src="src/assets/githublogo.png" style={{width: "40px"}}/>
          <img src="src/assets/icon-html.png" style={{width: "40px"}}/>
          <img src="src/assets/icon-css.png" style={{width: "40px"}}/>
          <img src="src/assets/icon-js.png" style={{width: "40px"}}/>
        </Card.Text>
        <Button 
        link href="https://euphonious-snickerdoodle-c66416.netlify.app/"
        variant="primary">Go Rick And Morty App</Button>
      </Card.Body>
    </Card>

    <Card >
      <Card.Img variant="top" src="src/assets/weatherapp.png" />
      <Card.Body>
        <Card.Title>Weather App</Card.Title>
        <Card.Text>
        Using <br></br>         
          <img src="src/assets/githublogo.png" style={{width: "40px"}}/>
          <img src="src/assets/icon-html.png" style={{width: "40px"}}/>
          <img src="src/assets/icon-css.png" style={{width: "40px"}}/>
          <img src="src/assets/icon-js.png" style={{width: "40px"}}/>
        </Card.Text>
        <Button 
        link href="https://nimble-douhua-896fc7.netlify.app/"
        variant="primary">Go Weather App</Button>
      </Card.Body>
    </Card>
  
       </div>
  );
}

export default Portafolio;