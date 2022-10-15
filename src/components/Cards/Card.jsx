import { Popover } from "react-tiny-popover";
import { useState } from "react";

import styles from "./Cards.module.css";

const reverseCardUrl =
  "https://images.digimoncard.io/images/assets/CardBack.jpg";

const Card = ({ reverseCard }) => {
  const [showActions, setShowActions] = useState(false);

  const classNames = [
    reverseCard ? styles.opponentCard : styles.card,
    showActions ? styles.cardClicked : "",
  ].join(" ");

  return (
    <div>
      <Popover
        isOpen={showActions && !reverseCard}
        positions={["bottom", "left", "right"]}
        onClickOutside={() => showActions && setShowActions(false)}
        content={
          <div className={styles.actions}>
            <button>Play</button>
            <button>Digivolve</button>
          </div>
        }
      >
        <button onClick={() => setShowActions(true)}>
          <img
            src={
              reverseCard
                ? reverseCardUrl
                : "https://images.digimoncard.io/images/cards/BT6-016.jpg"
            }
            className={classNames}
          />
        </button>
      </Popover>
    </div>
  );
};

export default Card;
