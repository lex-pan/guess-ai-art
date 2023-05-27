import { useEffect, useState } from 'react';
import {getImageUrl} from "../gameFunctions/gameFunctions";
import Desciption from '../gameComponents/Description'
import GameOverScreen from '../gameComponents/GameOverScreen'
import Image from '../gameComponents/Image'
import GuessButton from '../gameComponents/GuessButton'
import {randomizeNames, correctAnimalIndex} from '../gameFunctions/gameFunctions'
import animalNames from '../gameFunctions/animalNames';

export default function GameSection(props) {
  const animal_names_list = animalNames();
  const [gameOver, setGameOver] = useState(false);
  const [animalChoices, setAnimalChoices] = useState(randomizeNames(animal_names_list.length, 4));
  const [animalIndex, setAnimalIndex] = useState(0);
  const [animal, setAnimal] = useState([]);
  const [artUrlLink, setArtUrlLink] = useState(getImageUrl(animal));

  function gameState() {
    setGameOver(currentGameState => currentGameState ? false : true);
  }

  function updateAnimalChoices() {
    setAnimalChoices(randomizeNames(animal_names_list.length, 4));
  }

  function updateAnimalIndex() {
    setAnimalIndex(correctAnimalIndex(4));
  }

  function updateCorrectAnimal() {
    setAnimal(animalChoices[animalIndex]);
  }

  function updateScore(gameCondition){
    let newScore = props.score[1];
    if (gameCondition === "correct guess") {
      newScore((score) => score+=1);
    } else {
      newScore(0);
    }
  }

  function updateImageUrl() {
    setArtUrlLink(getImageUrl(animal));
  }

  function restartGame() {
    gameState();
    updateScore("incorrect guess");
  }

  //after animal options has been decided, gets the correct animal index
  useEffect(() =>{
    updateAnimalIndex();
    console.log(animalChoices);
    updateCorrectAnimal();
    //update description
  }, [animalChoices]);

  //after getting the correct animal name, update the image and description by calling the api
  useEffect(() =>{
    updateImageUrl();
    //update description
  }, [animal]);
    
    return (
      <div className='gameSection'>
          <div className='gameImageAndButtons'>
            < Image image={artUrlLink} />
            < GuessButton guess={[animalChoices, animal, animalIndex, updateAnimalChoices, updateScore]} />
            < GameOverScreen gameState={[gameOver, restartGame]} score={props.score[0]}/>
          </div>
        < Desciption />           
      </div>
    )
  }