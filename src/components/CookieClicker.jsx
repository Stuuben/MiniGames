import { useEffect, useState } from "react";
import "./CookieClicker.css";

export const CookieClicker = () => {
  const [clicked, setClicked] = useState(0);

  const [time, setTime] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [hasAddedHS, setHasAddedHS] = useState(false);
  const [highScore, setHighScore] = useState(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedHighScores = localStorage.getItem("highScores");
      if (Array.isArray(JSON.parse(storedHighScores))) {
        return JSON.parse(storedHighScores);
      } else {
        return [];
      }
    } else {
      return [];
    }
  });

  const CLICK = () => {
    setClicked((prevClicked) => prevClicked + 1);
    if (!gameStarted) {
      setIsRunning(true);
    }
    if (clicked >= 49) {
      setIsRunning(false);
    }
  };

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  const updateHighScore = () => {
    if (highScore.length >= 5) {
      const highestScore = Math.max(...highScore);

      if (time < highestScore) {
        const updatedHighScores = highScore.filter(
          (score) => score !== highestScore
        );
        updatedHighScores.push(time);
        updatedHighScores.sort((a, b) => a - b);
        setHighScore(updatedHighScores);
        localStorage.setItem("highScores", JSON.stringify(updatedHighScores));
      } else {
        alert("Your time is not better!");
      }
    } else {
      const updatedHighScores = [...highScore, time];
      setHighScore(updatedHighScores);
      localStorage.setItem("highScores", JSON.stringify(updatedHighScores));
      console.log("High score added", updatedHighScores);
    }
  };

  const showHighScores = highScore
    .sort((a, b) => a - b)
    .map((score, index) => (
      <div className="score" key={index}>
        {score}
        <span> ms</span>
      </div>
    ));

  return (
    <div className="wrapper-cookie">
      <h2>Cookie Clicker</h2>
      <div>
        <div className="click">
          <div> Click the Cookie 50 times!</div>
          <div>
            {" "}
            Number of clicks!:<span className="myClicks"> {clicked}</span>
          </div>
          <img
            onClick={CLICK}
            className="cookie-img"
            src="https://www.realsimple.com/thmb/uwmEcWtairipZTGavdWVbkV_dqw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chocolatechip-cookies_300-d6a402fc30814fdf87af28be97b5fcdc.jpg"
            alt="Cookie"
            width={"150px"}
          />

          <p className="stopWatch">
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}:
            {milliseconds.toString().padStart(2, "0")}
          </p>
          <button
            onClick={() => {
              setClicked(0);
              setGameStarted(false);
              setIsRunning(false);
              setTime(0);

              setHasAddedHS(false);
            }}
          >
            restart
          </button>
          <button
            disabled={clicked <= 49 || hasAddedHS}
            onClick={() => {
              updateHighScore();
              setHasAddedHS(true);
            }}
          >
            Add Highscore
          </button>

          <div className="highScore-wrapper">
            <h4> Top 5 Fastest Times</h4>
            <div className="highScore">{showHighScores}</div>
          </div>
          <button
            className="clear-button"
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Clear All Highscores
          </button>
        </div>
      </div>
    </div>
  );
};
