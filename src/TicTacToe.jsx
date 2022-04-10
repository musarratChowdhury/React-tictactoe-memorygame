import React, { useEffect, useState } from "react";
import Square from "./components/Square";
import Modal from "./components2/Modal";
import "./TicTacToe.css";

export default function TicTacToe() {
  const beginningState = [
    { value: "", clicked: false, id: 0 },
    { value: "", clicked: false, id: 1 },
    { value: "", clicked: false, id: 2 },
    { value: "", clicked: false, id: 3 },
    { value: "", clicked: false, id: 4 },
    { value: "", clicked: false, id: 5 },
    { value: "", clicked: false, id: 6 },
    { value: "", clicked: false, id: 7 },
    { value: "", clicked: false, id: 8 },
  ];

  const [winner, setWinner] = useState(null);
  const [turn, setTurn] = useState("X");
  const [board, setBoard] = useState(beginningState);

  //check if all square has values
  const checkEndCondition = () => {
    let endGame = true;
    board.forEach((square) => {
      if (!square.clicked) endGame = false;
    });
    return endGame;
  };
  //check if we have a winner;
  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        board[a].value &&
        board[a].value === board[b].value &&
        board[a].value === board[c].value
      ) {
        return board[a].value;
      }
    }
    return null;
  };
  //triggers every time a square is clicked
  const handleClick = (id) => {
    setBoard((prevBoard) =>
      prevBoard.map((square) => {
        if (square.id === id) {
          return { ...square, value: turn, clicked: true };
        } else return square;
      })
    );
    turn === "X" ? setTurn("O") : setTurn("X");
  };
  //   console.log(board);
  //check for winner
  useEffect(() => {
    if (calculateWinner(board) != null) {
      setWinner(calculateWinner(board));
    } else if (checkEndCondition()) {
      setWinner("None");
    }
  }, [board]);
  //reset the Board
  const handleReset = () => {
    setBoard(beginningState);
    setWinner(null);
    setTurn("X");
  };

  return (
    <div className="App">
      <div className="">
        <h2>Tic Tac Toe</h2>
      </div>
      <div className="board">
        {board.map((square) => (
          <Square
            key={square.id}
            id={square.id}
            value={square.value}
            handleClick={handleClick}
            clicked={square.clicked}
            winner={winner}
          />
        ))}
      </div>
      {winner && (
        <div className="winner-show">
          <p>Winner : {winner}</p>
        </div>
      )}
      {winner && (
        <Modal>
          <button
            onClick={() => {
              handleReset();
            }}
          >
            Play Again!
          </button>
        </Modal>
      )}
    </div>
  );
}
