import { useState } from 'react';

// dodac id i label do inputow

import classes from './UserDataForm.module.css';

const UserDataForm = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [nameIsValid, setNameIsValid] = useState();
  const [enteredNumber, setEnteredNumber] = useState('');
  const [numberIsValid, setNumberIsValid] = useState();
  const [enteredMonth, setEnteredMonth] = useState('');
  const [monthIsValid, setMonthIsValid] = useState();
  const [enteredYear, setEnteredYear] = useState('');
  const [yearIsValid, setYearIsValid] = useState();
  const [enteredCvc, setEnteredCvc] = useState('');
  const [cvcIsValid, setCvcIsValid] = useState('');

  const numberRegex = /^[0-9]+$/;

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value.toUpperCase());

    //validate
  };

  const validateNameHandler = (e) => {
    setNameIsValid(
      enteredName.includes(' ') & (enteredName.trim().length > 10)
    );
  };

  const numberChangeHandler = (e) => {
    setEnteredNumber(e.target.value);

    //validate
  };

  const validateNumberHandler = (e) => {
    setNumberIsValid(
      numberRegex.test(enteredNumber.trim()) &&
        enteredNumber.trim().length === 16
    );
  };

  const monthChangeHandler = (e) => {
    setEnteredMonth(e.target.value);

    //validate
  };

  const validateMonthHandler = (e) => {
    setMonthIsValid(
      numberRegex.test(enteredMonth) &&
        parseInt(enteredMonth) > 0 &&
        parseInt(enteredMonth) < 13 &&
        enteredMonth.length === 2
    );
  };

  const yearChangeHandler = (e) => {
    setEnteredYear(e.target.value);

    //validate
  };

  const validateYearHandler = (e) => {
    setYearIsValid(
      numberRegex.test(enteredYear) &&
        parseInt(enteredYear) > 22 &&
        parseInt(enteredYear) < 31
    );
  };

  const cvcChangeHandler = (e) => {
    setEnteredCvc(e.target.value);

    //validate
  };

  const validateCvcHandler = (e) => {
    setCvcIsValid(numberRegex.test(enteredCvc) & (enteredCvc.length === 3));
  };

  return (
    <div className={classes['data-form']}>
      <span>
        <h4 className={classes.text}>CARDHOLDER NAME</h4>
        <input
          type="text"
          className={classes['data-input']}
          id="user-data-name"
          placeholder="e.g. Jane Appleseed"
          onChange={nameChangeHandler}
          onBlur={validateNameHandler}
        />
      </span>
      <span>
        <h4 className={classes.text}>CARD NUMBER</h4>
        <input
          type="text"
          className={classes['data-input']}
          id="user-data-number"
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={numberChangeHandler}
          onBlur={validateNumberHandler}
        />
      </span>

      <div className={classes['data-date-cvc']}>
        <div className={classes['data-date-inputs']}>
          <h4 className={classes.text}>EXP. DATE M/Y</h4>
          <div>
            <input
              type="text"
              className={classes['data-input']}
              id="user-data-month"
              placeholder="MM"
              maxLength="2"
              onChange={monthChangeHandler}
              onBlur={validateMonthHandler}
            />
            <input
              type="text"
              className={classes['data-input']}
              id="user-data-year"
              maxLength="2"
              placeholder="YY"
              onChange={yearChangeHandler}
              onBlur={validateYearHandler}
            />
          </div>
        </div>
        <div className={classes['data-cvc-input']}>
          <h4 className={classes.text}>CVC</h4>
          <input
            type="text"
            className={classes['data-input']}
            id="user-data-cvc"
            maxLength="3"
            placeholder="e.g. 123"
            onChange={cvcChangeHandler}
            onBlur={validateCvcHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDataForm;
