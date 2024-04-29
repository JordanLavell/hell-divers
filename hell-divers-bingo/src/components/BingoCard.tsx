import React from "react";
import BingoSquare from "./BingoSquare";
import { BingoValue } from "../types";

interface BingoCardProps {
  values: BingoValue[];
  onSquareClick: (index: number) => void;
}

const BingoCard: React.FC<BingoCardProps> = ({ values, onSquareClick }) => {
  return (
    <div className="bingo-card">
      {values.map((value, index) => (
        <BingoSquare
          key={index}
          content={value.content}
          marked={value.marked}
          onClick={() => onSquareClick(index)}
        />
      ))}
    </div>
  );
};

export default BingoCard;
