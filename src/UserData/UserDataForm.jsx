import { useState, useEffect, useReducer } from 'react';
import Button from '../UI/Button';

// dodac id i label do inputow

import classes from './UserDataForm.module.css';

const numberRegex = /^[0-9]+$/;

const nameReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: action.val.includes(' ') && action.val.trim().length > 6,
    };
  }
  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value,
      isValid: state.value.includes(' ') && state.value.trim().length > 6,
    };
  }
  return { value: '', isValid: false };
};

const numberReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid:
        numberRegex.test(action.val.trim()) && action.val.trim().length === 16,
    };
  }
  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value,
      isValid:
        numberRegex.test(state.value.trim()) &&
        state.value.trim().length === 16,
    };
  }
  return { value: '', isValid: false };
};

const UserDataForm = (props) => {
  // const [enteredName, setEnteredName] = useState('');
  // const [nameIsValid, setNameIsValid] = useState();
  // const [enteredNumber, setEnteredNumber] = useState('');
  // const [numberIsValid, setNumberIsValid] = useState();
  const [enteredMonth, setEnteredMonth] = useState('');
  const [monthIsValid, setMonthIsValid] = useState();
  const [enteredYear, setEnteredYear] = useState('');
  const [yearIsValid, setYearIsValid] = useState();
  const [enteredCvc, setEnteredCvc] = useState('');
  const [cvcIsValid, setCvcIsValid] = useState('');

  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: '',
    isValid: null,
  });

  const [numberState, dispatchNumber] = useReducer(numberReducer, {
    value: '',
    isValid: null,
  });

  const nameChangeHandler = (e) => {
    dispatchName({ type: 'USER_INPUT', val: e.target.value });

    //validate
  };

  const validateNameHandler = (e) => {
    dispatchName({ type: 'INPUT_BLUR' });
  };

  const numberChangeHandler = (e) => {
    dispatchNumber({ type: 'USER_INPUT', val: e.target.value });

    //validate
  };

  const validateNumberHandler = (e) => {
    dispatchNumber({ type: 'INPUT_BLUR' });
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
    setCvcIsValid(numberRegex.test(enteredCvc) && enteredCvc.length === 3);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // tutaj state w górę
    props.onData(nameState.value, numberState.value);
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
              nameState.isValid === false ? classes.invalid : ''
            }`}
            id="user-data-name"
            placeholder="e.g. Jane Appleseed"
            value={nameState.value}
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
              numberState.isValid === false ? classes.invalid : ''
            }`}
            id="user-data-number"
            placeholder="e.g. 1234 5678 9123 0000"
            value={numberState.value}
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
