import './App.css';
import GuessButton from './GuessButton';
import Image from './Image';
import SearchBar from './SearchBar';
import Score from './Score';

function App() {
  return (
    <div className='body'>
      < SearchBar />
      < Image />
      < GuessButton />
      < Score />
    </div>
  );
}

export default App;
