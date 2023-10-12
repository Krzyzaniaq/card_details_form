import classes from './UserDataForm.module.css';

const UserDataForm = () => {
  return (
    <div className={classes['data-form']}>
      <p className={classes.text}>Cardholder name</p>
      <input
        type="text"
        className={classes['data-input']}
        id="user-data-name"
        placeholder="e.g. Jane Appleseed"
      />
      <p className={classes.text}>Card number</p>
      <input
        type="text"
        className={classes['data-input']}
        id="user-data-number"
        placeholder="e.g. 1234 5678 9123 0000"
      />
      <p className={classes.text}>exp. date (MM/YY)</p>
      <input
        type="number"
        className={classes['data-input']}
        id="user-data-month"
        placeholder="MM"
      />
      <input
        type="number"
        className={classes['data-input']}
        id="user-data-year"
        min="2023"
        max="2030"
        placeholder="YY"
      />
      <p className={classes.text}>CVC</p>
      <input
        type="number"
        className={classes['data-input']}
        id="user-data-cvc"
        min="1"
        max="12"
        placeholder="e.g. 123"
      />
    </div>
  );
};

export default UserDataForm;
