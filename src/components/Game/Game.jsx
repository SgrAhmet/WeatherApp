import React, { useState } from "react";
import "./Game.css";

const Game = () => {
  const [row, setRow] = useState({
    first: [null, null, null],
    second: [null, null, null],
    third: [null, null, null],
  });

  const [turn, setTurn] = useState("X");

  // const [column, setColumn] = useState({
  //   first: [row.first[0], row.second[0], row.third[0]],
  //   second: [row.first[1], row.second[1], row.third[1]],
  //   third: [row.first[2], row.second[2], row.third[2]],
  // });

  function checkGameStatus() {
       // Satırları ve sütunları birleştir
  const allRowsAndColumns = [row.first, row.second, row.third].concat(
    [row.first[0], row.second[0], row.third[0]],
    [row.first[1], row.second[1], row.third[1]],
    [row.first[2], row.second[2], row.third[2]],
    [row.first[0], row.second[1], row.third[2]],
    [row.first[2], row.second[1], row.third[0]]
  );
      console.log(allRowsAndColumns)
  // Tüm kutular doluysa
  if (allRowsAndColumns.every((box) => box !== null)) {
    console.log("berabere")
  }

  // Kazananı kontrol et
  for (let i = 0; i < allRowsAndColumns.length; i += 3) {
    const [a, b, c] = allRowsAndColumns.slice(i, i + 3);
    if (a && a === b && b === c) {
          console.log(`${a} kazandı`)
    }
  }

  // Oyun devam ediyor
  console.log("oyun devam ediyor")
  }
  

  function changeTurn() {
    checkGameStatus()

    if (turn === "X") {
      setTurn("O");
    } else setTurn("X");
  }

  function handleGrid(e) {
     switch (e.target.classList[1]) {
      case "first":
        switch (e.target.id) {
          case "0":
            if (!row.first[0]) {
              setRow({ ...row, first: [turn, row.first[1], row.first[2]] });
            }

            break;
          case "1":
            if (!row.first[1]) {
              setRow({ ...row, first: [row.first[0], turn, row.first[2]] });
            }

            break;

          case "2":
            if (!row.first[2]) {
              setRow({ ...row, first: [row.first[0], row.first[1], turn] });
            }

            break;
        }
        break;
      case "second":

        switch (e.target.id) {
          case "0":
            if (!row.second[0]) {
              setRow({ ...row, second: [turn, row.second[1], row.second[2]] });
            }

            break;
          case "1":
            if (!row.second[1]) {
              setRow({ ...row, second: [row.second[0], turn, row.second[2]] });
            }

            break;

          case "2":
            if (!row.second[2]) {
              setRow({ ...row, second: [row.second[0], row.second[1], turn] });
            }

            break;
        }
        break;
      case "third":

        switch (e.target.id) {
          case "0":
            if (!row.third[0]) {
              setRow({ ...row, third: [turn, row.third[1], row.third[2]] });
            }

            break;
          case "1":
            if (!row.third[1]) {
              setRow({ ...row, third: [row.third[0], turn, row.third[2]] });
            }

            break;

          case "2":
            if (!row.third[2]) {
              setRow({ ...row, third: [row.third[0], row.third[1], turn] });
            }

            break;
        }
        break;
    }

    if (!e.target.innerText) {
      changeTurn();
    }
  }

  return (
    <div className="GameMain">
      <p>Turn : {turn}</p>
      <button onClick={checkGameStatus}>CheckGame</button>
      <div className="gameArea">
        <button
          className="grid-item first"
          id="0"
          onClick={(e) => handleGrid(e)}
        >
          {row.first[0]}
        </button>
        <button
          className="grid-item first"
          id="1"
          onClick={(e) => handleGrid(e)}
        >
          {row.first[1]}
        </button>
        <button
          className="grid-item first"
          id="2"
          onClick={(e) => handleGrid(e)}
        >
          {row.first[2]}
        </button>
        <button
          className="grid-item second"
          id="0"
          onClick={(e) => handleGrid(e)}
        >
          {row.second[0]}
        </button>
        <button
          className="grid-item second"
          id="1"
          onClick={(e) => handleGrid(e)}
        >
          {row.second[1]}
        </button>
        <button
          className="grid-item second"
          id="2"
          onClick={(e) => handleGrid(e)}
        >
          {row.second[2]}
        </button>
        <button
          className="grid-item third"
          id="0"
          onClick={(e) => handleGrid(e)}
        >
          {row.third[0]}
        </button>
        <button
          className="grid-item third"
          id="1"
          onClick={(e) => handleGrid(e)}
        >
          {row.third[1]}
        </button>
        <button
          className="grid-item third"
          id="2"
          onClick={(e) => handleGrid(e)}
        >
          {row.third[2]}
        </button>
      </div>
    </div>
  );
};

export default Game;
