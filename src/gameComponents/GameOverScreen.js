export default function GameOverScreen(props) {
    let stateOfGame = props.gameState[0] ? 'visible' : '';
    let restartGame = props.gameState[1];

    return (
        <div className={`gameOverSection ${stateOfGame}`}>
            <h1 className="gameOverTitle">Game Over</h1>
            <button onClick={restartGame} className="gameOverButton">Restart</button>
            <h1 className="gameOverScore">Score: {props.score}</h1>
        </div>
    )
  }