import React from "react";

export default function Square({ winner, clicked, value, id, handleClick }) {
  return (
    <div
      onClick={() => {
        if (clicked || winner) return;
        handleClick(id);
      }}
      className="square"
    >
      {value}
    </div>
  );
}
