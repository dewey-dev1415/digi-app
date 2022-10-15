import styles from "./Deck.module.css";
import Card from "../Cards/Card";

const Deck = () => {
  return (
    <div className={styles.deck}>
      <Card reverseCard />
    </div>
  );
};

export default Deck;
