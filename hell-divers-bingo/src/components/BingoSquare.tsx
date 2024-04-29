import React from "react";
import { BingoValue } from "../types";

interface BingoSquareProps extends BingoValue {
  onClick: () => void;
}

const BingoSquare: React.FC<BingoSquareProps> = ({
  content,
  marked,
  onClick,
}) => {
  const className = `bingo-square${marked ? " marked" : ""}`;
  return (
    <div className={className} onClick={onClick}>
      {content}
    </div>
  );
};

export default BingoSquare;
