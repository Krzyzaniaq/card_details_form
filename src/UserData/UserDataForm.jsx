import classes from './UserDataForm.module.css';

const UserDataForm = () => {
  return (
    <>
      <p>Cardholder name</p>
      <input
        type="text"
        id="user-data-name"
        placeholder="e.g. Jane Appleseed"
      />
      <p>Card number</p>
      <input
        type="text"
        id="user-data-number"
        placeholder="e.g. 1234 5678 9123 0000"
      />
      <p>exp. date (MM/YY)</p>
      <input type="number" id="user-data-month" placeholder="MM" />
      <input type="number" id="user-data-year" placeholder="YY" />
      <p>CVC</p>
      <input type="number" id="user-data-cvc" placeholder="e.g. 123" />
    </>
  );
};

export default UserDataForm;
