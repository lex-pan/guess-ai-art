export default function GuessButton(props) {

  function checkIfRightGuess(e, typeOfArt) {
    let updateTypeOfArt = typeOfArt[1];
    let updateScore = typeOfArt[2];
    let gameOver = typeOfArt[3];
    let buttonTypeClicked = e.target.firstChild.data; 
    if (((typeOfArt[0] === 1) && (buttonTypeClicked === "Ai Generated")) || ((typeOfArt[0] === 0) && (buttonTypeClicked === "Not Ai Generated"))) {
        updateTypeOfArt();
        updateScore("correct guess");
    } else {
      gameOver();
    }
}

  return (
        <div className='buttonSection'>
            <div className="buttonRow">
              <button onClick={(e) => checkIfRightGuess(e, props.guess)} className='guessButton'>Animal Name 1</button>
              <button onClick={(e) => checkIfRightGuess(e, props.guess)} className='guessButton'>Animal Name 2</button>
            </div>
            <div className="buttonRow">
              <button onClick={(e) => checkIfRightGuess(e, props.guess)} className='guessButton'>Animal Name 3</button>
              <button onClick={(e) => checkIfRightGuess(e, props.guess)} className='guessButton'>Animal Name 4</button>
            </div>
        </div>
  )
}