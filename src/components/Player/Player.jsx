import styles from "./Player.module.css";
import Hand from "../Hand/Hand";
import SecurityStack from "../SecurityStack/SecurityStack";
import PlayArea from "../PlayArea/PlayArea";
import Deck from "../Deck/Deck";
import Trash from "../Trash/Trash";

const Player = ({ isOpponent = false }) => {
  return (
    <div className={isOpponent ? styles.opponent : styles.player}>
      <div
        className={
          isOpponent ? styles.opponentPlayableArea : styles.playableArea
        }
      >
        <SecurityStack />
        <PlayArea />
        <div
          className={
            isOpponent ? styles.opponentDeckContainer : styles.deckContainer
          }
        >
          <Deck />
          <Trash />
        </div>
      </div>
      <Hand isOpponent={isOpponent} />
    </div>
  );
};

export default Player;
