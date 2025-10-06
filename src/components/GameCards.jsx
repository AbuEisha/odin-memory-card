import { useState, useEffect } from "react";
import "../css/GameCards.css";
import { fetchingImgs } from "../data/usingData.js";

export default function GameCards({
  score,
  setScore,
  highScore,
  setHighScore,
}) {
  const [data, setData] = useState([]);
  const [checkedImg, setCheckedImg] = useState([]);

  useEffect(() => {
    async function pokemonNames() {
      const result = await fetchingImgs();
      setData(result);
    }
    pokemonNames();
  }, [score]);
  const handleGame = (e) => {
    let pokemonsClicked = checkedImg;
    let checked = e.currentTarget.querySelector("img").alt;
    if (!pokemonsClicked.includes(checked)) {
      pokemonsClicked.push(checked);
      setCheckedImg(pokemonsClicked);
      setScore(score + 1);
    } else {
      if (score > highScore) {
        setHighScore((highScore = score));
        setScore(0);
        setCheckedImg([]);
      } else {
        setScore(0);
        setCheckedImg([]);
      }
    }
  };

  return (
    <>
      <div className="game-cards">
        {data.map((pokemon, index) => (
          <div className="card" key={index} onClick={handleGame}>
            <img src={pokemon.url} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
