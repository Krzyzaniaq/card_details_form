import { useState, useEffect, useReducer } from 'react';
import Button from '../UI/Button';
import classes from './UserDataForm.module.css';

const numberRegex = /^[0-9]+$/;
const letterRegex = /[0-9]/;

const nameReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val.toUpperCase(),
      isValid:
        action.val.includes(' ') &&
        action.val.length > 6 &&
        !letterRegex.test(action.val),
    };
  }
  if (action.type === 'INPUT_BLUR') {
    let message = '';
    if (state.value.length < 6) message = `Must be at least 6 characters long.`;
    if (letterRegex.test(state.value)) message = `Wrong format, etters only.`;
    if (state.value === '') message = `Can't be blank.`;
    return {
      value: state.value,
      isValid:
        state.value.includes(' ') &&
        state.value.length > 6 &&
        !letterRegex.test(state.value),
      message: message,
    };
  }
  return { value: '', isValid: false };
};

const numberReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    let inputValue = action.val.replace(/\s/g, '');
    let formattedValue = inputValue.replace(/(.{4})/g, '$1 ');
    inputValue = formattedValue.trim();
    const testValue = inputValue.replace(/\s/g, '');
    return {
      value: inputValue,
      isValid: numberRegex.test(testValue) && testValue.length === 16,
    };
  }
  if (action.type === 'INPUT_BLUR') {
    let stateValue = state.value.replace(/\s/g, '');
    let formattedStateValue = stateValue.replace(/(.{4})/g, '$1 ');
    stateValue = formattedStateValue.trim();
    const testStateValue = stateValue.replace(/\s/g, '');
    let message = '';
    if (testStateValue.length !== 16) message = `Must be 16-digit long.`;
    if (!numberRegex.test(testStateValue))
      message = `Wrong format, numbers only.`;
    if (state.value === '') message = `Can't be blank.`;

    return {
      value: state.value,
      isValid: numberRegex.test(testStateValue) && testStateValue.length === 16,
      message: message,
    };
  }
  return { value: '', isValid: false };
};

const monthReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid:
        numberRegex.test(action.val) &&
        parseInt(action.val) > 0 &&
        parseInt(action.val) < 13 &&
        action.val.length === 2,
    };
  }
  if (action.type === 'INPUT_BLUR') {
    let message = '';
    if (state.value < 0 || state.value > 13 || state.value.length !== 2)
      message = `Must be between 01-12.`;
    if (!numberRegex.test(state.value)) message = `Wrong format, numbers only.`;
    if (state.value === '') message = `Can't be blank.`;
    return {
      value: state.value,
      isValid:
        numberRegex.test(state.value) &&
        parseInt(state.value) > 0 &&
        parseInt(state.value) < 13 &&
        state.value.length === 2,
      message: message,
    };
  }
  return { value: '', isValid: false };
};

const yearReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid:
        numberRegex.test(action.val) &&
        parseInt(action.val) > 22 &&
        parseInt(action.val) < 31 &&
        action.val.length === 2,
    };
  }
  if (action.type === 'INPUT_BLUR') {
    let message = '';
    if (state.value < 23 || state.value > 30 || state.value.length !== 2)
      message = `Must be between 23-30.`;
    if (!numberRegex.test(state.value)) message = `Wrong format, numbers only`;
    if (state.value === '') message = `Can't be blank.`;
    return {
      value: state.value,
      isValid:
        numberRegex.test(state.value) &&
        parseInt(state.value) > 22 &&
        parseInt(state.value) < 31 &&
        state.value.length === 2,
      message: message,
    };
  }
  return { value: '', isValid: false };
};

const cvcReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: numberRegex.test(action.val) && action.val.length === 3,
    };
  }
  if (action.type === 'INPUT_BLUR') {
    let message = '';
    if (state.value.length < 3) message = `Must be 3-digits long.`;
    if (!numberRegex.test(state.value)) message = `Wrong format, numbers only.`;
    if (state.value === '') message = `Can't be blank.`;
    return {
      value: state.value,
      isValid: numberRegex.test(state.value) && state.value.length === 3,
      message: message,
    };
  }
  return { value: '', isValid: false };
};

const UserDataForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: '',
    isValid: null,
    message: '',
  });

  const [numberState, dispatchNumber] = useReducer(numberReducer, {
    value: '',
    isValid: null,
    message: '',
  });

  const [monthState, dispatchMonth] = useReducer(monthReducer, {
    value: '',
    isValid: null,
    message: '',
  });

  const [yearState, dispatchYear] = useReducer(yearReducer, {
    value: '',
    isValid: null,
    message: '',
  });

  const [cvcState, dispatchCvc] = useReducer(cvcReducer, {
    value: '',
    isValid: null,
    message: '',
  });

  const { isValid: nameIsValid } = nameState;
  const { isValid: numberIsValid } = numberState;
  const { isValid: monthIsValid } = monthState;
  const { isValid: yearIsValid } = yearState;
  const { isValid: cvcIsValid } = cvcState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        nameIsValid &&
          numberIsValid &&
          monthIsValid &&
          yearIsValid &&
          cvcIsValid
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [nameIsValid, numberIsValid, monthIsValid, yearIsValid, cvcIsValid]);

  useEffect(() => {
    props.onData({
      uName: nameState.value,
      uNumber: numberState.value,
      uMonth: monthState.value,
      uYear: yearState.value,
      uCvc: cvcState.value,
    });
  }, [
    nameState.value,
    numberState.value,
    monthState.value,
    yearState.value,
    cvcState.value,
  ]);

  const nameChangeHandler = (e) => {
    dispatchName({ type: 'USER_INPUT', val: e.target.value });
  };

  const validateNameHandler = (e) => {
    dispatchName({ type: 'INPUT_BLUR' });
  };

  const numberChangeHandler = (e) => {
    dispatchNumber({ type: 'USER_INPUT', val: e.target.value });
  };

  const validateNumberHandler = (e) => {
    dispatchNumber({ type: 'INPUT_BLUR' });
  };

  const monthChangeHandler = (e) => {
    dispatchMonth({ type: 'USER_INPUT', val: e.target.value });
  };

  const validateMonthHandler = (e) => {
    dispatchMonth({ type: 'INPUT_BLUR' });
  };

  const yearChangeHandler = (e) => {
    dispatchYear({ type: 'USER_INPUT', val: e.target.value });
  };

  const validateYearHandler = (e) => {
    dispatchYear({ type: 'INPUT_BLUR' });
  };

  const cvcChangeHandler = (e) => {
    dispatchCvc({ type: 'USER_INPUT', val: e.target.value });
  };

  const validateCvcHandler = (e) => {
    dispatchCvc({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onFormSubmit(formIsValid);
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
          <p className={classes.message}>{nameState.message}</p>
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
            maxLength="19"
            onChange={numberChangeHandler}
            onBlur={validateNumberHandler}
          />
          <p className={classes.message}>{numberState.message}</p>
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
                  monthState.isValid === false ? classes.invalid : ''
                }`}
                id="user-data-month"
                placeholder="MM"
                maxLength="2"
                value={monthState.value}
                onChange={monthChangeHandler}
                onBlur={validateMonthHandler}
              />
              <input
                type="text"
                className={`${classes['data-input']} ${
                  yearState.isValid === false ? classes.invalid : ''
                }`}
                id="user-data-year"
                maxLength="2"
                placeholder="YY"
                value={yearState.value}
                onChange={yearChangeHandler}
                onBlur={validateYearHandler}
              />
            </div>
            <div>
              <p className={classes.message}>{monthState.message}</p>
              <p className={classes.message}>{yearState.message}</p>
            </div>
          </div>
          <div className={classes['data-cvc-input']}>
            <label htmlFor="user-data-cvc" className={classes.text}>
              CVC
            </label>
            <input
              type="text"
              className={`${classes['data-input']} ${
                cvcState.isValid === false ? classes.invalid : ''
              }`}
              id="user-data-cvc"
              maxLength="3"
              placeholder="e.g. 123"
              value={cvcState.value}
              onChange={cvcChangeHandler}
              onBlur={validateCvcHandler}
            />
            <p className={classes.message}>{cvcState.message}</p>
          </div>
        </div>
        <Button type="submit" disabled={!formIsValid} onClick={submitHandler}>
          Confirm
        </Button>
      </form>
    </>
  );
};

export default UserDataForm;
