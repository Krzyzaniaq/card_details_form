import UserDataForm from './UserDataForm';
import UserDataAdded from './UserDataAdded';
import UserDataButton from './UserDataButton';

import classes from './UserData.module.css';

const UserData = () => {
  return (
    <div className={classes.userdata}>
      <UserDataForm />
      <UserDataButton />
    </div>
  );
};

export default UserData;
