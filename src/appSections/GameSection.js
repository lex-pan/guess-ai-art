import { useEffect, useState } from 'react';
import {getImageUrl} from "../gameFunctions/gameFunctions";
import Desciption from '../gameComponents/Description'
import GameOverScreen from '../gameComponents/GameOverScreen'
import Image from '../gameComponents/Image'
import GuessButton from '../gameComponents/GuessButton'
import {randomizeNames, correctAnimal} from '../gameFunctions/gameFunctions'
import animalNames from '../gameFunctions/animalNames';

export default function GameSection(props) {
  const animal_names_list = animalNames();
  const [gameOver, setGameOver] = useState(false);
  const [animalChoices, setAnimalChoices] = useState(randomizeNames(animal_names_list.length, 4));
  const [animal, setAnimal] = useState(correctAnimal(animalChoices));
  const [artUrlLink, setArtUrlLink] = useState(getImageUrl(animal));

  function gameState() {
    setGameOver(currentGameState => currentGameState ? false : true);
  }

  function updateAnimalChoices() {
    setAnimalChoices(randomizeNames(animal_names_list.length, 4));
  }

  function updateCorrectAnimal() {
    setAnimal(correctAnimal(animalChoices));
  }

  function updateScore(gameCondition){
    if (gameCondition === "correct guess") {
      props.score[1]((score) => score+=1);
    } else {
      props.score[1](0);
    }
  }

  function updateImageUrl() {
    setArtUrlLink(getImageUrl(animal));
  }

  function restartGame() {
    gameState();
    updateScore("incorrect guess");
  }

  //updates the image, buttons, description, and score when user selects an animal
  useEffect(() =>{
    updateImageUrl();
    updateCorrectAnimal();
    //update description
  }, [animalChoices]);
    
    return (
      <div className='gameSection'>
          <div className='gameImageAndButtons'>
            < Image image={artUrlLink} />
            < GuessButton guess={[animalChoices, animal, updateAnimalChoices, updateScore]} />
            < GameOverScreen gameState={[gameOver, restartGame]} score={props.score[0]}/>
          </div>
        < Desciption />           
      </div>
    )
  }