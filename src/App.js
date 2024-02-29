import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const targetDate = new Date("June 1, 2024 00:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getTimeLeft(targetDate) {
    const now = new Date();
    const timeDiff = targetDate - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    if (seconds === 0 && minutes > 0) {
      minutes--;
      seconds = 59;
    }

    if (minutes === 0 && hours > 0) {
      hours--;
      minutes = 59;
    }

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className="App">
      <div className="container">
        <div className="paragraph">
          <p>Erikas alldeles egna nedräkning till vad vi hoppas ska bli den bästa flytten i hennes liv.</p>
        </div>
        <div className="countdown">
          <div className="time">{timeLeft.days} days</div>
          <div className="time">{timeLeft.hours} hours</div>
          <div className="time">{timeLeft.minutes} minutes</div>
          <div className="time">{timeLeft.seconds} seconds</div>
        </div>
      </div>
    </div>
  );
}

export default App;
