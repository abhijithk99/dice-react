
import './App.css';
import Btn from './Components/Btn'
import Dice from './Components/Dice'
import Score from './Components/Score'

function App() {
  return (
    <div className="game-area">
     <Btn />
     <Dice />
    <Score />
    </div>
  );
}

export default App;
