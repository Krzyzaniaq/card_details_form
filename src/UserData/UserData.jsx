import UserDataForm from './UserDataForm';
import UserDataComplete from './UserDataComplete';

import classes from './UserData.module.css';

const UserData = () => {
  const dataChangeHandler = () => {};

  return (
    <div className={classes['user-data']}>
      <UserDataForm onData={dataChangeHandler} />
    </div>
  );
};

export default UserData;
