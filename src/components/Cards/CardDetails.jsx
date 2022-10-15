import styles from "./Cards.module.css";

const CardDetails = () => {
  return (
    <div id="card-details" className={styles.cardDetailsContainer}>
      <img
        src="https://images.digimoncard.io/images/cards/BT6-016.jpg"
        className={styles.cardDetails}
      />
    </div>
  );
};

export default CardDetails;
