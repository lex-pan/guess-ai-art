import { useState } from "react";

export default function GuessButton(props) {
  let animal_names = props.guess[0];
  let correct_answer = props.guess[1][0];
  let correct_answer_index = props.guess[2];
  let updateAnimalChoices = props.guess[3];
  let updateScore = props.guess[4];
  const [correctIndex, setCorrectIndex] = useState(null);
  const [wrongIndex, setWrongIndex] = useState(null);
  console.log(correct_answer_index);
  console.log(correct_answer);

  function checkIfRightGuess(e) {
    let buttonClicked = e.target; 
    if (buttonClicked.firstChild.data === correct_answer) {
      answerAnimation("correct guess", buttonClicked);
      setTimeout(() => {
        updateAnimalChoices();
        updateScore("correct guess");
      }, 500);
    } else {
      answerAnimation("wrong guess", buttonClicked);
      setTimeout(() => {
        updateAnimalChoices();
        updateScore("incorrect guess");
      }, 500);
    }
  }

  function answerAnimation(answer, buttonClicked) {
    let buttonClickedIndex = parseInt(buttonClicked.getAttribute("data-index"));
    if (answer === "correct guess") {
      setCorrectIndex(buttonClickedIndex);
      setWrongIndex(null);
      setTimeout(() => {
        setCorrectIndex(null);
        setWrongIndex(null);
      }, 500);
    }  else {
      setCorrectIndex(correct_answer_index);
      setWrongIndex(buttonClickedIndex);
      setTimeout(() => {
        setCorrectIndex(null);
        setWrongIndex(null);        
      }, 500);
    }

  }

  return (
        <div className='buttonSection'>
            <div className="buttonRow">
              <button onClick={(e) => checkIfRightGuess(e, props.guess)} className={`guessButton ${correctIndex === 0 ? "correct" : ""}${wrongIndex === 0 ? "wrong" : ""}`} data-index={0}>{animal_names[0]}</button>
              <button onClick={(e) => checkIfRightGuess(e, props.guess)} className={`guessButton ${correctIndex === 1 ? "correct" : ""}${wrongIndex === 1 ? "wrong" : ""}`} data-index={1}>{animal_names[1]}</button>
            </div>
            <div className="buttonRow">
              <button onClick={(e) => checkIfRightGuess(e, props.guess)} className={`guessButton ${correctIndex === 2 ? "correct" : ""}${wrongIndex === 2 ? "wrong" : ""}`} data-index={2}>{animal_names[2]}</button>
              <button onClick={(e) => checkIfRightGuess(e, props.guess)} className={`guessButton ${correctIndex === 3 ? "correct" : ""}${wrongIndex === 3 ? "wrong" : ""}`} data-index={3}>{animal_names[3]}</button>
            </div>
        </div>
  )
}