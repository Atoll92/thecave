import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

const Character = () => {
    return (
        <div>
            <Header/>
            <div id="character">
        <h2>
        My character's page</h2>
        <Link to="/huntprep">Prepare for the hunt</Link>
        
      </div> 
        </div>
    );
};

export default Character;