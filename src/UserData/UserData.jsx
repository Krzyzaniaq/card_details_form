import UserDataForm from './UserDataForm';
import UserDataComplete from './UserDataComplete';

import classes from './UserData.module.css';

const UserData = () => {
  return (
    <div className={classes['user-data']}>
      <UserDataForm />
    </div>
  );
};

export default UserData;
