import classes from './CardFront.module.css';
import cardLogo from '../assets/card-logo.svg';

const CardFront = () => {
  return (
    <div className={classes['card-front']}>
      <img src={cardLogo} className={classes['card-logo']} alt="card logo" />
      <div className={classes['card-container']}>
        <h3 className={classes['card-number']}>9591 6489 6389 1011</h3>
        <div className={classes['card-bottom']}>
          <p className={classes['card-name']}>dssa asdasdas</p>
          <p className={classes['card-date']}>09/26</p>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
