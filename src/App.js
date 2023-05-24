import './App.css';
import GuessButton from './components/GuessButton';
import Image from './components/Image';
import React, { useEffect, useState } from 'react';
import GameOverScreen from './components/GameOverScreen';
import {getImageUrl} from "./imageFunctions";
import NavBar from './components/NavBar';
import Description from './components/Description';

function App() {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  /* if result is 1 then non Ai Art should be used. If result is 0, then non-Ai/user generated content should be used */
  const [typeOfArt, setTypeofArt] = useState(randomize());
  /* */
  const [artUrlLink, setArtUrlLink] = useState(getImageUrl(typeOfArt));

  function randomize() {
    return Math.floor(Math.random() * 2);
  }

  function aiOrNot() {
    setTypeofArt(type => randomize());
  }

  function gameState() {
    setGameOver(currentGameState => currentGameState ? false : true);
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

  function restartGame() {
    gameState();
    updateScore("incorrect guess");
  }

  //updates the image when user guesses whether image is ai generated or not
  useEffect(() =>{
    updateImageUrl();
  }, [typeOfArt]);
  
  return (
    <div className='body'>   
      < NavBar />
      <div className='animalDisplaySection'>
        < Image image={artUrlLink} />
        < Description />
      </div>
      < GuessButton guess={[typeOfArt, aiOrNot, updateScore, gameState]} updateUrlLink={setArtUrlLink} />
      < GameOverScreen gameState={[gameOver, restartGame]} score={score}/>
    </div>
  );
}

export default App;
