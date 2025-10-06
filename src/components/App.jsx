import { useState } from "react";
import "../css/App.css";
import Header from "./Header";
import GameCards from "./GameCards";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <Header score={score} highScore={highScore} />
      <GameCards
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
    </>
  );
}

export default App;
