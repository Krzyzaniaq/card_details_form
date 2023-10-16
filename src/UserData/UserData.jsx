import UserDataForm from './UserDataForm';
import UserDataComplete from './UserDataComplete';

import classes from './UserData.module.css';
import { useState } from 'react';

const UserData = (props) => {
  const [formValid, setFormValid] = useState(false);

  const dataChangeHandler = (data) => {
    props.onFormData(data);
  };

  const submitHandler = (formState) => {
    setFormValid(formState);
  };

  return (
    <div className={classes['user-data']}>
      {formValid === false && (
        <UserDataForm onData={dataChangeHandler} onFormSubmit={submitHandler} />
      )}
      {formValid === true && <UserDataComplete />}
    </div>
  );
};

export default UserData;
