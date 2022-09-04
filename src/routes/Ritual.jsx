import React from 'react';
import Header from '../Header';
import Dice from 'react-dice-roll';
import styled from 'styled-components';



const Ritual = (value) => {

    const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover,
    &:focus {
      filter:invert(100%)
    }
    &:active {
        filter:invert(100%)
      color: red;
    }
`;


    function DisplayResult (value) {
        // const navigate = useNavigate();
        // const user = auth.currentUser;
        // const UserModelRef = doc(db, "users", (user.uid));
        // var destiny= document.getElementById("name").value;
        var result = document.getElementById("dice_result");
        var destiny =""
  
        if(value === 1) {
          destiny = "Failed"
        } if(value === 2) {
          destiny = "Failed"
        } if(value === 3) {
          destiny = "Failed"
        } if(value === 4) {
          destiny = "Failed"
        } if(value === 5) {
          destiny = "Failed"
        } if(value === 6) {
          destiny = "Success"

        }
        result.innerHTML = destiny
        // show_results()
        // const destiny = destiny ;
        console.log(destiny)

        return destiny;
  
        // function show_results(value) {
        //    var result = document.getElementById("dice_result");
        //    if(value == 1) {
        //     destiny = "Failed"
        //   } if(value == 2) {
        //     destiny = "Failed"
        //   } if(value == 3) {
        //     destiny = "Failed"
        //   } if(value == 4) {
        //     destiny = "Failed"
        //   } if(value == 5) {
        //     destiny = "Failed"
        //   } if(value == 6) {
        //     destiny = "Success"
  
        //   }

        //    result.innerHTML = destiny
        //    console.log("destinée = " + destiny)

    
        //   }
  
        // updateDoc(UserModelRef, {
        //   destiny: destiny
        // });
        // console.log(destiny)
       
        // navigate("/third_step")

    
        
        }
    return (
        <div>
            <Header/>
            <div id="ritual">
          <h1>Célebrez l'origine du monde </h1> 
<div id="buttons_flex">
    <Button>Hand ritual</Button>
    <Button>Art ritual</Button>
    <Button>Hunt ritual</Button>
          
          </div>
          <div id="dice_cont">
          <Dice sound="https://doublegeste.com/TheCave/media/mystic.wav" onRoll={(value) =>  DisplayResult (value)} />

          </div>
            <p id="dice_result">Hello there</p>
          </div>
            
        </div>


    );
};

export default Ritual;