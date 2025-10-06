import "../css/Header.css";

export default function Header({ score, highScore }) {
  return (
    <>
      <header>
        <h1>Memory Card</h1>
        <p>
          Get points by clicking on an image but don't click on any more than
          once!
        </p>
        <div className="scores">
          <div className="score">
            Your Score: <span>{score}</span>
          </div>
          <div className="high-score">
            High Score: <span>{highScore}</span>
          </div>
        </div>
      </header>
    </>
  );
}
