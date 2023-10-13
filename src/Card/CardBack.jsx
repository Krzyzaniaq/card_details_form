import classes from './CardBack.module.css';

const CardBack = () => {
  return (
    <div className={classes['card-back']}>
      <p className={classes['card-back-cvc']}>000</p>
    </div>
  );
};

export default CardBack;
