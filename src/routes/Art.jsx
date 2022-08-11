import React from 'react';
import { Link } from 'react-router-dom';
import CanvasArt from '../CanvasArt';
import Header from '../Header';

const Art = () => {
    return (
        <div>
            <Header/>
            <div id="art">
        <h2>
       My art gallery</h2>
       <Link to="/hunt"><button>Start the hunting</button></Link>
       <CanvasArt/>
       
      </div> 
        </div>
    );
};

export default Art;