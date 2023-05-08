import './App.css';
import GuessButton from './components/GuessButton';
import Image from './components/Image';
import SearchBar from './SearchBar';
import Score from './components/Score';
import React, { useEffect, useState } from 'react';
import {getImageUrl, randomize} from "./imageFunctions";


function App() {

  const [score, setScore] = useState(0);

  /*let correctGuess = true;  

  /* if result is 1 then non Ai Art should be used. If result is 0, then non-Ai/user generated content should be used */
  const [typeOfArt, setTypeofArt] = useState(() => {
    console.log("hello");
    return randomize();
  })

  //console.log(typeOfArt);
  //console.log("helloTwo");

  const [artUrlLink, setArtUrlLink] = useState(getImageUrl(typeOfArt));

  function aiOrNot() {
    setTypeofArt(type => Math.floor(Math.random() * 2));
  }

  function updateScore(gameCondition){
    if (gameCondition === "correct guess") {
      setScore((score) => score+=1);
    } else {
      setScore(0);
    }
    
  }

  function updateImageUrl() {
    setArtUrlLink(getImageUrl(typeOfArt));
  }

  //updates the game when user clicks a button
  useEffect(() =>{
    updateImageUrl();
  }, [typeOfArt]);

  return (
    <div className='body'>      
      < SearchBar />
      < Image image={artUrlLink} />
      < GuessButton guess={[typeOfArt, aiOrNot, updateScore]} updateUrlLink={setArtUrlLink} />
      < Score score={score} />
    </div>
  );
}

export default App;
