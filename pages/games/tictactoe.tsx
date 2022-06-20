import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../../styles/TicTacToe.module.css";
import Layout from "../../components/layout";
import Square from "./Square";

export default function TicTacToe() {
  const [turn, setTurn] = useState("X");
  const [squares, setSquares] = useState(new Array(9).fill(""));
  const [winner, setWinner] = useState("");

  useEffect(() => {
    console.log("squares was updated...", squares);
    console.log("Turn: ", turn);
  }, [squares]);

  const clickHandler = (idx: number) => {
    if (squares[idx]) return;

    setSquares([...squares.slice(0, idx), turn, ...squares.slice(idx + 1)]);

    checkForWinner();
    setTurn(turn === "X" ? "O" : "X");
  };

  const checkForWinner = () => {
    // WINNING IDX COMBINATIONS:
    // 0, 1, 2 | 3, 4, 5 | 6, 7, 8
    // 0, 3, 6 | 1, 4, 7 | 2, 5, 8
    // 0, 4, 8 | 2, 4, 6
  };

  return (
    <Layout>
      <Head>
        <title>Tic Tac Toe</title>
      </Head>
      <div className={styles.container}>
        <h2>Tic Tac Toe</h2>
        {winner && <p>{`${winner} wins!`}</p>}
        <div className={styles.board}>
          {squares.map((square, idx) => {
            return (
              <Square
                key={idx}
                value={squares[idx]}
                handleClick={() => clickHandler(idx)}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
