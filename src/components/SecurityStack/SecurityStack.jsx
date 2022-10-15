import styles from "./SecurityStack.module.css";
import Card from "../Cards/Card";

const SecurityStack = () => {
  return (
    <div className={styles.card}>
      <Card reverseCard />
    </div>
  );
};

export default SecurityStack;
