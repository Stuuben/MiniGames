import { useEffect, useState } from "react";
import "./FlipACoin.css";

interface IFlipACoinProps {
  player: string;
  gameStarted: boolean;
}

export const FlipACoin = (props: IFlipACoinProps) => {
  const [winner, setWinner] = useState(true);
  const [wins, setWins] = useState(0);
  const [heads, setHeads] = useState(false);
  const [tails, setTails] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [streek, setStreek] = useState(0);
  const [firstFlip, setFirstFlip] = useState(false);

  // set personal streeak

  console.log("props.player", props.player);
  console.log("gamestarted", props.gameStarted);

  useEffect(() => {
    if (wins > streek) {
      setStreek(streek + 1);
    }
  }, [wins, streek]);

  const calculateWinner = () => {
    return Math.floor(Math.random() * 2) === 0;
  };
  const playHeads = () => {
    setIsSpinning(true);
    setTimeout(() => {
      const headResult = calculateWinner();
      if (headResult) {
        setWins(wins + 1);
        setHeads(true);
        setTails(false);
      } else {
        setWins(0);
        setHeads(false);
        setTails(true);
      }
      console.log(calculateWinner());
      setWinner(headResult);
      setIsSpinning(false);
      setFirstFlip(true);
      console.log(" heads winner?", headResult);
    }, 1000);
  };

  const playTails = () => {
    setIsSpinning(true);
    setTimeout(() => {
      const tailsResult = calculateWinner();
      if (tailsResult) {
        setWins(wins + 1);
        setTails(true);
        setHeads(false);
      } else {
        setWins(0);
        setTails(false);
        setHeads(true);
      }
      setWinner(tailsResult);
      console.log(" tails winner?", tailsResult);
      setIsSpinning(false);
      setFirstFlip(true);
    }, 1000);
  };

  const spinnImg = "https://cdn-icons-png.flaticon.com/512/3247/3247458.png";
  const headsImg =
    "https://www.royalmint.com/globalassets/bullion/images/products/best-value/world-coins/quarter-eagle-obverse.jpg";
  const tailsImg =
    "https://www.foiledagainchocolate.com/wp-content/uploads/2016/08/mon203-coin.jpg";
  // https://www.foiledagainchocolate.com/wp-content/uploads/2016/08/mon203-coin.jpg
  // https://us.123rf.com/450wm/ahasoft2000/ahasoft20001712/ahasoft2000171201905/92317478-boy-profile-golden-coin-icon-vector-style-is-a-gold-yellow-flat-coin-symbol.jpg?ver=6
  // tails https://cdn0.rubylane.com/_podl/item/1376780/RL-0009302/Tiffany-Co-Heads-Tails-Flip-Coin-pic-1A-2048:10.10-1e309021-f.webp
  return (
    <div className="big-wrapper">
      <div className="game-wrapper">
        <h3>Choose Heads or Tails</h3>
        <div className="coin">
          {isSpinning ? (
            <div className="img-spin">
              <img
                className="spin"
                src={spinnImg}
                alt=""
                width={"150px"}
                height={"150px"}
              />
            </div>
          ) : (
            <div className="img-spin">
              {heads ? (
                <img
                  className=""
                  src={headsImg}
                  alt=""
                  width={"150px"}
                  height={"150px"}
                />
              ) : (
                <img
                  className=""
                  src={tailsImg}
                  alt=""
                  width={"150px"}
                  height={"150px"}
                />
              )}
            </div>
          )}
        </div>
        <div>
          <div className="center">
            {firstFlip ? (
              <h3>{winner ? "YOU WIN" : "YOU LOOSE"}</h3>
            ) : (
              <h3>Flip the Coin!</h3>
            )}
          </div>

          <button
            className="glow-button"
            onClick={playHeads}
            disabled={isSpinning}
          >
            Heads
          </button>
          <span className="span"> or </span>
          <button
            className="glow-button"
            onClick={playTails}
            disabled={isSpinning}
          >
            Tails
          </button>
        </div>
        <div className="stats">
          <h4>Streak: {wins}</h4>
          <h4>Highest streak: {streek}</h4>
          <h1>{props.player}</h1>
        </div>
      </div>
    </div>
  );
};
