import classes from './CardBack.module.css';
import bgCardBack from '../assets/bg-card-back.png';

const CardBack = () => {
  return (
    <img src={bgCardBack} className={classes.cardback} alt="Card Background" />
  );
};

export default CardBack;
