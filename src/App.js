import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Login from './Login';

function App() {
  return (
    <div className="App">
      	{/* <header id="header">
  		<img src="https://doublegeste.com/TheCave/media/BushmanPainting8.svg"/>
      <button id="button1" onclick="startanim()">Play</button><button id="button2">My character</button><button id="button3">My tribe</button><button id="button4">My art</button>
      
    </header> */}
    <Header/>
      
  
         
  <div className='main-container'>
          <p class="desc"><strong>The Cave</strong> is an experimental role-playing game aimed at paleolithic culture enthousiasts.
            <br></br>
            Players are invited to embrace a culture where there is no conceptual divide between human beings and animals, between arts and religion, between the daily life and the extraordinary. <br></br>
            An era when humanity as we perceive it was still blooming on a land of possibles without any consideration for sexual, racial or social status <br></br>
          Tribes of Neanderthal humans and other pack animals are assembling and cooperating in order to survive the Ice Age.<br></br>
          Don't be fooled by the paradise-like setting of abundance of land and food, an harsh world awaits the player.<br></br>
          Prepare for a mystical quest for primal answers, find your tribe and enjoy the hunt !</p>
        
          </div>
    
      
  
          
      {/* <div id="second_step">
        <h2>
        Choose the entity you want to play :</h2>
        <div onClick="stepthree()" class="buttons-entity">
        <button ><img src="https://doublegeste.com/TheCave/media/BushmanPainting8.svg"/></button><button><img src="https://doublegeste.com/TheCave/media/kisscc0-cave-painting-rock-art-rock-art-saharan-antelope-5b3e85716eee09.4176039315308240494544.svg"/></button><button><img src="https://doublegeste.com/TheCave/media/cRbQhp01.svg"/></button>
        <button ><img src="https://doublegeste.com/TheCave/media/AWF1Cg01.svg"/></button>
        
        <button ><img src="https://doublegeste.com/TheCave/media/aUZYCn01.svg"/></button>
        </div>
        
      </div>
      <div id="third_step">
        <h2>
        How do you want to start ?</h2>
        <div onclick="stepthree()" class="buttons-entity">
        <button >I'm a wanderer living on my own in the wild</button><button>I'm part of a tribe of higly skilled crafters & huntmen</button><button>I teamed up with an animal companion</button>
        
        </div> */}
        
      
    </div>
  );
}

export default App;
