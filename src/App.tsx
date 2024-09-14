import Board from "./components/Board";
import Title from "./components/Title";
import "./styles/App.css";

function App() {
  console.log("App render");
  return (
    <div className="App">
      <Title />
      <Board />
    </div>
  );
}

export default App;
