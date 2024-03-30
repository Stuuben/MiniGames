import { ChangeEvent, FormEvent, useState } from "react";
import { FlipACoin } from "./FlipACoin";
import "./FlipACoin.css";

export const FlipACoinPage = () => {
  const [player, setPlayer] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const playerName = e.target.value;
    setPlayer(playerName);
  };
  const handleClick = () => {
    setGameStarted(true);
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  console.log(player);
  const heroImg =
    "https://cdn.dribbble.com/users/1493264/screenshots/5573460/coin-flip-dribbble.gif";
  // "https://media1.tenor.com/m/ELWc6po28wQAAAAd/coin-flip.gif"
  // https://play-lh.googleusercontent.com/OPlZ1l5oIjJJ9J_i5t8DcvyKcyib54MngCErNh6snS0gvog5oiKI9mpMru_Q7fzhyVI";

  // https://www.realsimple.com/thmb/uwmEcWtairipZTGavdWVbkV_dqw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chocolatechip-cookies_300-d6a402fc30814fdf87af28be97b5fcdc.jpg
  return (
    <div className="big-wrapper bg-color">
      <h2>Flip a Coin!</h2>
      <div className="wrapper-wrapper">
        {!gameStarted ? (
          <div className="center">
            <div>
              <img className="gif" src={heroImg} alt="" width={"500px"} />
            </div>
            <form className="form" onSubmit={onSubmit}>
              <label htmlFor="">Enter your Name:</label>
              <input onChange={handleChange} type="text" placeholder="Name" />
              <button
                className="start-game-btn"
                onClick={handleClick}
                type="submit"
                disabled={player === ""}
              >
                Start game
              </button>
            </form>
          </div>
        ) : (
          <>
            <FlipACoin player={player} gameStarted={gameStarted}></FlipACoin>
          </>
        )}
        {gameStarted && (
          <button
            className="game-restart"
            onClick={() => setGameStarted(false)}
          >
            Restart game
          </button>
        )}
      </div>
    </div>
  );
};
