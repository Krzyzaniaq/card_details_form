import classes from './CardFront.module.css';
import cardLogo from '../assets/card-logo.svg';

const CardFront = (props) => {
  return (
    <div className={classes['card-front']}>
      <img src={cardLogo} className={classes['card-logo']} alt="card logo" />
      <div className={classes['card-container']}>
        <h3 className={classes['card-number']}>{props.number}</h3>
        <div className={classes['card-bottom']}>
          <p className={classes['card-name']}>{props.name}</p>
          <p className={classes['card-date']}>
            {props.month === '' && props.year === ''
              ? ''
              : `${props.month}/${props.year}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
