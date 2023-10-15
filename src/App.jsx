import { useState } from 'react';
import Card from './Card/Card';
import UserData from './UserData/UserData';
import classes from './App.module.css';

function App() {
  const [formData, setFormData] = useState({
    uName: '',
    uNumber: '',
    uMonth: '',
    uYear: '',
    uCvc: '',
  });

  const formDataHandler = (data) => {
    setFormData(data);
  };
  return (
    <div className={classes.app}>
      <Card />
      <UserData onFormData={formDataHandler} />
    </div>
  );
}

export default App;
