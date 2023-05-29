import { useEffect, useRef, useState } from 'react';
import {getImageUrl} from "../gameFunctions/gameFunctions";
import Desciption from '../gameComponents/Description'
import GameOverScreen from '../gameComponents/GameOverScreen'
import Image from '../gameComponents/Image'
import GuessButton from '../gameComponents/GuessButton'
import {randomizeNames, correctAnimalIndex, getAnimalDescription} from '../gameFunctions/gameFunctions'
import animalNames from '../gameFunctions/animalNames';
import { render } from '@testing-library/react';

/* This section is to display the game UI */
/*How it renders,
first render: uses initial usestate values, calling all three useeffects
second render: updates animal index
third render: updates animal name
fourth render: calls image and description api based on animal name
fifth/sixth render: when api call for image url and description come 
*/

export default function GameSection(props) {
  const animal_names_list = animalNames();
  const [gameOver, setGameOver] = useState(false);
  const [animalChoices, setAnimalChoices] = useState(randomizeNames(animal_names_list.length, 4));
  const [animalIndex, setAnimalIndex] = useState(0);
  const [animal, setAnimal] = useState([]);
  const [animalInfo, setAnimalInfo] = useState([]); 
  const [artUrlLink, setArtUrlLink] = useState("");
  const [indexTracker, setindexTracker] = useState(0);
  const [animalTracker, setAnimalTracker]= useState(0);

  function updateIndexTracker() {
    setindexTracker(indexTracker => indexTracker+1);
  }

  function updateAnimalTracker() {
    setAnimalTracker(animalTracker => animalTracker+1);
  }

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

  async function updateAnimalInfo() {
    // change parameter to animal later
    let info = await getAnimalDescription("Angelfish");
    setAnimalInfo(info);
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
    updateIndexTracker();
  }, [animalChoices]);

  // changes after toggling because if index were to reroll on the same value
  // then, there would be no update
  useEffect(() =>{
    if (indexTracker > 0) {
      updateCorrectAnimal();
      updateAnimalTracker();
    }
  }, [indexTracker]);

  //after getting the correct animal name, update the image and description by calling the api
  useEffect(() =>{
    if (animalTracker > 0) {
      updateImageUrl();
      updateAnimalInfo();
    }
  }, [animal]);
    
    return (
      <div className='gameSection'>
          <div className='gameImageAndButtons'>
            < Image image={artUrlLink} />
            < GuessButton guess={[animalChoices, animal, animalIndex, updateAnimalChoices, updateScore]} />
            < GameOverScreen gameState={[gameOver, restartGame]} score={props.score[0]}/>
          </div>
        < Desciption animalDescription={animalInfo} />           
      </div>
    )
  }