import Board from './components/Board';
import './styles/App.css';

function App() {
  console.log("App render")
  return (
    <div className="App">
      <h1 className='title'>Tic Tac Toe</h1>
      <Board />
    </div>
  );
}

export default App;
