import styles from "./Hand.module.css";
import Cards from "../Cards/Cards";

const Hand = ({ isOpponent }) => {
  return (
    <div className={styles.hand}>
      <Cards hidden={isOpponent} />
    </div>
  );
};

export default Hand;
