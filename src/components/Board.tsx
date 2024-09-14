import React, { useState } from "react";
import Cell from "./Cell";

const Board: React.FC = () => {
  // States
  const [board, setBoard] = useState(Array(9).fill(""));

  // First logic for computer move (TODO: Change to server side ASAP)
  const handleComputerMove = () => {
    setBoard((prevBoard) => {
      const emptyCells = prevBoard
        .map((cell, index) => (cell === "" ? index : null))
        .filter((index) => index !== null);

      if (emptyCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        const newBoard = [...prevBoard];
        newBoard[emptyCells[randomIndex] as number] = "O";
        return newBoard;
      }

      return prevBoard;
    });
  };

  const handleClick = (index: number) => {
    // Base condition
    if (board[index] !== "") return;

    // User click logic
    const newBoard = [...board];
    newBoard[index] = "X";
    console.log("X render");
    setBoard(newBoard);

    // Computer move (TODO: Change ASAP)
    setTimeout(() => {
      handleComputerMove();
      console.log("O render");
    }, 100);
  };

  // Render function for every cell
  const renderCell = (index: number) => {
    return <Cell value={board[index]} onClick={() => handleClick(index)} />;
  };
  console.log("Board render");
  return (
    <div className="board">
      <div className="row">
        {renderCell(0)}
        {renderCell(1)}
        {renderCell(2)}
      </div>
      <div className="row">
        {renderCell(3)}
        {renderCell(4)}
        {renderCell(5)}
      </div>
      <div className="row">
        {renderCell(6)}
        {renderCell(7)}
        {renderCell(8)}
      </div>
    </div>
  );
};

export default Board;
