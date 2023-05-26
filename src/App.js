import './App.css';
import NavBar from './appSections/NavBar';
import GameSection from './appSections/GameSection';
import Profile from './appSections/Profile';
import Ranking from './appSections/Ranking';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';


function App() {
  const [score, setScore] = useState(0);

  return (
    <div className='body'>   
      < NavBar score={score} />
      < Routes >
        < Route path="/" element ={< GameSection score={[score, setScore]} />} />
        < Route path="/profile" element ={< Profile />} />
        < Route path="/ranking" element ={< Ranking />} />
      </Routes>
    </div>
  );
}

export default App;
