import './App.css';
import NavBar from './appSections/NavBar';
import GameSection from './appSections/GameSection';
import Profile from './appSections/Profile';
import Ranking from './appSections/Ranking';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='body'>   
      < NavBar />
      < Routes >
        < Route path="/" element ={< GameSection />} />
        < Route path="/profile" element ={< Profile />} />
        < Route path="/ranking" element ={< Ranking />} />
      </Routes>
    </div>
  );
}

export default App;
