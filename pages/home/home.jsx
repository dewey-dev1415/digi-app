import styles from "./home.module.css";

import Board from "../../src/components/Game/Game";
import CardDetails from "../../src/components/Cards/CardDetails";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Board />
      <CardDetails />
    </div>
  );
};

export default Home;
