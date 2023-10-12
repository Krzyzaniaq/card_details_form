import CardFront from './CardFront';
import CardBack from './CardBack';

import classes from './Card.module.css';

const Card = () => {
  return (
    <div className={classes.card}>
      <CardFront />
      <CardBack />
    </div>
  );
};

export default Card;
