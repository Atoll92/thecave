import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header id="header">
            <Link to="/"><h1 to="/" class="title">Welcome to The Cave</h1> </Link> 
            <p id="motto">  Have fun! An unlucky day hunting still beats a good day working.</p>
  		<img src="https://doublegeste.com/TheCave/media/BushmanPainting8.svg"/>
          <Link to="/login"><button id="button1" >Play</button></Link><Link to="/character"><button id="button2">My character</button></Link><Link to="/tribe"><button > My tribe</button></Link><Link to="/art"> <button id="button4"> My art</button></Link>
     
    </header>
        </div>
    );
};

export default Header;