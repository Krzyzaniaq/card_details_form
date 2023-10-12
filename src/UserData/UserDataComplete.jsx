import classes from './UserDataComplete.module.css';

import iconComplete from '../assets/icon-complete.svg';

const UserDataComplete = () => {
  return (
    <>
      <img src={iconComplete} alt="Icon showing completed sign" />
      <h2>THANK YOU!</h2>
      <p>We've added your card details</p>
    </>
  );
};

export default UserDataComplete;
