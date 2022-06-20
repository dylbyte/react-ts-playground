import styles from "../../styles/TicTacToe.module.css";

interface SquareProps {
  value: string;
  handleClick: () => void;
}

export default function Square({ value, handleClick }: SquareProps) {
  return (
    <div className={styles.square} onClick={handleClick}>
      {value}
    </div>
  );
}
