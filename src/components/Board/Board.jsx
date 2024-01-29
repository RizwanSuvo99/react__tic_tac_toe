/* eslint-disable no-unused-vars */
import { useState } from "react";
import Square from "../Square/Square";
import { calculateWinner } from "../../utils/calculateWinner";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = "Next Player " + (xIsNext ? "X" : "O");
  }

  const handlClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = [...squares];
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares([...nextSquares]);
    setXIsNext(!xIsNext);
  };
  return (
    <>
      <div>{status}</div>
      <div className="flex">
        <Square value={squares[0]} handleSquareClick={() => handlClick(0)} />
        <Square value={squares[1]} handleSquareClick={() => handlClick(1)} />
        <Square value={squares[2]} handleSquareClick={() => handlClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} handleSquareClick={() => handlClick(3)} />
        <Square value={squares[4]} handleSquareClick={() => handlClick(4)} />
        <Square value={squares[5]} handleSquareClick={() => handlClick(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} handleSquareClick={() => handlClick(6)} />
        <Square value={squares[7]} handleSquareClick={() => handlClick(7)} />
        <Square value={squares[8]} handleSquareClick={() => handlClick(8)} />
      </div>
    </>
  );
}
