import React, { useState } from "react";
import Cell from "./Cell";
import Button from "./UI/Button/MyButton"
import { sendMoveToServer } from "../services/sendMoveToServer";

const Board: React.FC = () => {
  // States
  const [board, setBoard] = useState(Array(9).fill(""));
  const [disableClick, setDisableClick] = useState(false);

  const handleClick = async (index: number) => {
    // Base condition
    if (board[index] !== "" || disableClick) return;

    // User click logic
    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setDisableClick(true); // Disable click for user until server choose
    console.log("X render");

    // Computer move
    const updatedBoard = await sendMoveToServer(newBoard);
    // This timeout used for better visible effect(instant computer move is so noisy)
    setTimeout(() => {
      setBoard(updatedBoard);
      setDisableClick(false) // Enable user click
    }, 500);
    console.log("O render");
  };

  // Reset board function
  const resetBoard = () => {
    setBoard(Array(9).fill(""))
  }

  // Render function for every cell
  const renderCell = (index: number) => {
    return <Cell value={board[index]} onClick={() => handleClick(index)} />;
  };
  console.log("Board render");
  return (
    <div className="board-wrapper">
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
      <Button value="Reset" onClick={resetBoard}/>
    </div>
  );
};

export default Board;
