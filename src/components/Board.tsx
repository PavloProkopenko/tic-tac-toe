import React, { useState } from "react";
import Cell from "./Cell";
import Button from "./UI/Button/MyButton"
import Modal from "./UI/ModalBox/MyModal";
import { sendMoveToServer } from "../services/sendMoveToServer";
import { calculateWinner } from "../utils/calculateWinner";

const Board: React.FC = () => {
  // States
  const [board, setBoard] = useState(Array(9).fill(""));
  const [disableClick, setDisableClick] = useState(false);
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const closeModal = () => {
    setShowModal(false);
    resetBoard(); // Reset board after close
  };

  const handleClick = async (index: number) => {
    // Base condition
    if (board[index] !== "" || disableClick) return;

    // User click logic
    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setDisableClick(true); // Disable click for user until server choose

    // Calculate if someone wins
    const winner = calculateWinner(newBoard);
    if (winner) {
      setModalMessage(`${winner} wins!`);
      setShowModal(true);
      setIsGameEnded(true)
      return;
    }
  
    if (!newBoard.includes('')) {
      setModalMessage('It\'s a draw!');
      setShowModal(true);
      setIsGameEnded(true)
      return;
    }

    // Computer move
    const updatedBoard = await sendMoveToServer(newBoard);
    // This timeout used for better visible effect(instant computer move is so noisy)
    setTimeout(() => {
      setBoard(updatedBoard);
      setDisableClick(false) // Enable user click
    }, 500);

    const newWinner = calculateWinner(updatedBoard)
    if (newWinner) {
      setModalMessage(`${newWinner} wins!`);
      setShowModal(true);
      setIsGameEnded(true)
      return;
    }
  
  };

  // Reset board function
  const resetBoard = () => {
    if(isGameEnded) {
      setIsGameEnded(false)
      setDisableClick(false)
    }
    setBoard(Array(9).fill(""))
  }

  // Render function for every cell
  const renderCell = (index: number) => {
    return <Cell value={board[index]} onClick={() => handleClick(index)} />;
  };
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
      <Modal show={showModal} message={modalMessage} onClose={closeModal}/>
    </div>
  );
};

export default Board;
