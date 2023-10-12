import UserDataForm from './UserDataForm';
import UserDataComplete from './UserDataComplete';
import UserDataButton from './UserDataButton';

import classes from './UserData.module.css';

const UserData = () => {
  return (
    <div className={classes['user-data']}>
      <UserDataForm />
      <UserDataButton />
    </div>
  );
};

export default UserData;
