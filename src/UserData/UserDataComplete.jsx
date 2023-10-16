import classes from './UserDataComplete.module.css';
import Button from '../UI/Button';

import iconComplete from '../assets/icon-complete.svg';

const UserDataComplete = (props) => {
  return (
    <>
      <img src={iconComplete} alt="Icon showing completed sign" />
      <h2>THANK YOU!</h2>
      <p>We've added your card details</p>
      <Button type="button" onClick={props.onContinue}>
        Continue
      </Button>
    </>
  );
};

export default UserDataComplete;
