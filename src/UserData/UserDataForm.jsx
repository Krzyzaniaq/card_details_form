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
    return {
      value: state.value,
      isValid:
        numberRegex.test(state.value) &&
        parseInt(state.value) > 0 &&
        parseInt(state.value) < 13 &&
        state.value.length === 2,
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
    return {
      value: state.value,
      isValid:
        numberRegex.test(state.value) &&
        parseInt(state.value) > 22 &&
        parseInt(state.value) < 31 &&
        state.value.length === 2,
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
    return {
      value: state.value,
      isValid: numberRegex.test(state.value) && state.value.length === 3,
    };
  }
  return { value: '', isValid: false };
};

const UserDataForm = (props) => {
  // const [enteredName, setEnteredName] = useState('');
  // const [nameIsValid, setNameIsValid] = useState();
  // const [enteredNumber, setEnteredNumber] = useState('');
  // const [numberIsValid, setNumberIsValid] = useState();
  // const [enteredMonth, setEnteredMonth] = useState('');
  // const [monthIsValid, setMonthIsValid] = useState();
  // const [enteredYear, setEnteredYear] = useState('');
  // const [yearIsValid, setYearIsValid] = useState();
  // const [enteredCvc, setEnteredCvc] = useState('');
  // const [cvcIsValid, setCvcIsValid] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);
  const [formData, setFormData] = useState({
    uName: '',
    uNumber: '',
    uMonth: '',
    uYear: '',
    uCvc: '',
  });

  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: '',
    isValid: null,
  });

  const [numberState, dispatchNumber] = useReducer(numberReducer, {
    value: '',
    isValid: null,
  });

  const [monthState, dispatchMonth] = useReducer(monthReducer, {
    value: '',
    isValid: null,
  });

  const [yearState, dispatchYear] = useReducer(yearReducer, {
    value: '',
    isValid: null,
  });

  const [cvcState, dispatchCvc] = useReducer(cvcReducer, {
    value: '',
    isValid: null,
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
    setFormData({
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
          </div>
        </div>
        <Button type="submit" disabled={!formIsValid}>
          Confirm
        </Button>
      </form>
    </>
  );
};

export default UserDataForm;
