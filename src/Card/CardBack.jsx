import classes from './CardBack.module.css';

const CardBack = (props) => {
  return (
    <div className={classes['card-back']}>
      <p className={classes['card-back-cvc']}>{props.cvc}</p>
    </div>
  );
};

export default CardBack;
