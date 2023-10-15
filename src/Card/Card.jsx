import CardFront from './CardFront';
import CardBack from './CardBack';

import classes from './Card.module.css';

const Card = (props) => {
  const { formData } = props;
  const {
    uName: name,
    uNumber: number,
    uMonth: month,
    uYear: year,
    uCvc: cvc,
  } = formData;

  return (
    <div className={classes.card}>
      <CardFront name={name} number={number} month={month} year={year} />
      <CardBack cvc={cvc} />
    </div>
  );
};

export default Card;
