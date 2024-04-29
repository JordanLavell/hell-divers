import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import BingoCard from "./components/BingoCard";
import { generateBingoValues } from "./utils/bingoGenerator";
import "./assets/styles/theme.css";

const App: React.FC = () => {
  const [bingoValues, setBingoValues] = useState(generateBingoValues());

  useEffect(() => {
    setBingoValues(generateBingoValues());
  }, []);

  const toggleMark = (index: number) => {
    setBingoValues(
      bingoValues.map((value, i) => {
        if (i === index) {
          return { ...value, marked: !value.marked };
        }
        return value;
      })
    );
  };

  const resetBingo = () => {
    setBingoValues(generateBingoValues());
  };

  return (
    <div>
      <Header />
      <BingoCard values={bingoValues} onSquareClick={toggleMark} />
      <button className="reset-button" onClick={resetBingo}>
        Reset
      </button>
    </div>
  );
};

export default App;
