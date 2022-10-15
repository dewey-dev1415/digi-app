import { Fragment } from "react";
import Card from "./Card";

const Cards = ({ hidden }) => {
  return (
    <Fragment>
      <Card reverseCard={hidden} />
      <Card reverseCard={hidden} />
    </Fragment>
  );
};

export default Cards;
