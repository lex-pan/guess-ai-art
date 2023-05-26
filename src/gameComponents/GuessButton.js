export default function GuessButton(props) {
  let animal_names = props.guess[0];
  console.log(props.guess[1]);
  function checkIfRightGuess(e, typeOfArt) {
    let correct_answer = typeOfArt[1][0];
    let updateAnimalChoices = typeOfArt[2];
    let updateScore = typeOfArt[3];
    let buttonTypeClicked = e.target.firstChild.data; 
    if (buttonTypeClicked === correct_answer) {
        updateAnimalChoices();
        updateScore();
    } else {
    }
}

  return (
        <div className='buttonSection'>
            <div className="buttonRow">
              <button onClick={(e) => checkIfRightGuess(e, props.guess)} className='guessButton'>{animal_names[0]}</button>
              <button onClick={(e) => checkIfRightGuess(e, props.guess)} className='guessButton'>{animal_names[1]}</button>
            </div>
            <div className="buttonRow">
              <button onClick={(e) => checkIfRightGuess(e, props.guess)} className='guessButton'>{animal_names[2]}</button>
              <button onClick={(e) => checkIfRightGuess(e, props.guess)} className='guessButton'>{animal_names[3]}</button>
            </div>
        </div>
  )
}