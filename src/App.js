import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import Quiz from './Quiz';


const App = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const numberOfStars = 100;

    const generatedStars = Array.from({ length: numberOfStars }).map(() => {
      const size = Math.random() * 3 + 1;

      return {
        size,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 2 + 1,
      };
    });

    setStars(generatedStars);
  }, []);

    return (
      <div>
        {stars.map((star, index) => (
          <div
            key={index}
            className="star"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.left}vw`,
              top: `${star.top}vh`,
              animationDuration: `${star.duration}s`,
              position: "fixed",
              pointerEvents: "none",
            }}
          />
        ))}

        <header>
          <h1>emotichord</h1>
        </header>
        {/*
        <div class="scanlines"></div>
        
        <div class="intro-wrap">
        <div class="noise"></div>
        <div class="noise noise-moving"></div>
        */}
        <div>
          <Quiz/>
        </div>
        {/*</div>*/}
      </div>       
    );
};


export default App;
