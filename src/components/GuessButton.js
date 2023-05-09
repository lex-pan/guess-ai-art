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
            <button onClick={(e) => checkIfRightGuess(e, props.guess)} className='guessButton'>Not Ai Generated</button>
            <button onClick={(e) => checkIfRightGuess(e, props.guess)} className='guessButton'>Ai Generated</button>
        </div>
  )
}