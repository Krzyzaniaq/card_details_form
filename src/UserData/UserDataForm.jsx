import { useState } from 'react';
import Button from '../UI/Button';

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
    setNameIsValid(enteredName.includes(' ') && enteredName.trim().length > 10);
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

  const submitHandler = (e) => {
    e.preventDefault();
    // tutaj state w górę
  };

  return (
    <>
      <form className={classes['data-form']} onSubmit={submitHandler}>
        <span>
          <label htmlFor="user-data-name" className={classes.text}>
            CARDHOLDER NAME
          </label>
          <input
            type="text"
            className={`${classes['data-input']} ${
              nameIsValid === false ? classes.invalid : ''
            }`}
            id="user-data-name"
            placeholder="e.g. Jane Appleseed"
            onChange={nameChangeHandler}
            onBlur={validateNameHandler}
          />
        </span>
        <span>
          <label htmlFor="user-data-number" className={classes.text}>
            CARD NUMBER
          </label>
          <input
            type="text"
            className={`${classes['data-input']} ${
              numberIsValid === false ? classes.invalid : ''
            }`}
            id="user-data-number"
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={numberChangeHandler}
            onBlur={validateNumberHandler}
          />
        </span>

        <div className={classes['data-date-cvc']}>
          <div className={classes['data-date-inputs']}>
            <label
              htmlFor="user-data-month user-data-year"
              className={classes.text}
            >
              EXP. DATE M/Y
            </label>
            <div>
              <input
                type="text"
                className={`${classes['data-input']} ${
                  monthIsValid === false ? classes.invalid : ''
                }`}
                id="user-data-month"
                placeholder="MM"
                maxLength="2"
                onChange={monthChangeHandler}
                onBlur={validateMonthHandler}
              />
              <input
                type="text"
                className={`${classes['data-input']} ${
                  yearIsValid === false ? classes.invalid : ''
                }`}
                id="user-data-year"
                maxLength="2"
                placeholder="YY"
                onChange={yearChangeHandler}
                onBlur={validateYearHandler}
              />
            </div>
          </div>
          <div className={classes['data-cvc-input']}>
            <label htmlFor="user-data-cvc" className={classes.text}>
              CVC
            </label>
            <input
              type="text"
              className={`${classes['data-input']} ${
                cvcIsValid === false ? classes.invalid : ''
              }`}
              id="user-data-cvc"
              maxLength="3"
              placeholder="e.g. 123"
              onChange={cvcChangeHandler}
              onBlur={validateCvcHandler}
            />
          </div>
        </div>
        <Button type="submit">Confirm</Button>
      </form>
    </>
  );
};

export default UserDataForm;
