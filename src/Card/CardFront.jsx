import classes from './CardFront.module.css';
import bgCardFront from '../assets/bg-card-front.png';

const CardFront = () => {
  return (
    <img
      src={bgCardFront}
      className={classes.cardfront}
      alt="Card Background"
    />
  );
};

export default CardFront;
