export default function NavBar(props) {
    return (
        <div className="navigationBar">
            <div className="scoreSection">
                <p className='scoreTrack'>Score: {props.score} </p>
            </div>
            <h1 className="gameTitle">Animal Name Game</h1>   
            <div className="infoSection">
                <p className="infoItem">Rankings</p>
                <p className="infoItem">Profile</p>
            </div>

        </div>
    )
  }