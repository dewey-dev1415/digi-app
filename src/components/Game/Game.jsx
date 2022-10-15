import styles from "./Game.module.css";
import Player from "../Player/Player";

const Board = () => {
  return (
    <div className={styles.gameContainer}>
      <div className={styles.game}>
        <Player isOpponent />
        <Player />
      </div>
    </div>
  );
};

export default Board;
