export default function GuessButton(props) {

  function checkIfRightGuess(e, typeOfArt) {
    let updateGame = typeOfArt[1];
    let updateScore = typeOfArt[2];
    let buttonTypeClicked = e.target.firstChild.data; 
    console.log(((typeOfArt[0] === 1) && (buttonTypeClicked === "Ai Generated")) || ((typeOfArt[0] === 0) && (buttonTypeClicked === "Not Ai Generated")))
    if (((typeOfArt[0] === 1) && (buttonTypeClicked === "Ai Generated")) || ((typeOfArt[0] === 0) && (buttonTypeClicked === "Not Ai Generated"))) {
        updateGame();
        updateScore("correct guess");
    } else {
      updateScore("incorrect guess");
    }
}

  return (
        <div className='buttonSection'>
            <button onClick={(e) => checkIfRightGuess(e, props.guess)} className='guessButton'>Not Ai Generated</button>
            <button onClick={(e) => checkIfRightGuess(e, props.guess)} className='guessButton'>Ai Generated</button>
        </div>
  )
}