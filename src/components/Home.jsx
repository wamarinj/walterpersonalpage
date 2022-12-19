import React from 'react';
import Typed from 'typed.js';


const Home = () => {
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        'FullStack Developer',
        '<p style="color:#cc0047">Backend developer</p>',
        '<p style="color:#0099CC">Frontend developer</p>'
      ],
      typeSpeed: 55,
      backSpeed: 50,
      loop: 20,
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
            <div className='titleMain'>
            <h3 style={{ whiteSpace: 'pre' }} ref={el} /> 
                <h1>Hi I'm Walter Marín <span>&#160;</span></h1>
                
            </div>
        </div>
    );
};

export default Home;