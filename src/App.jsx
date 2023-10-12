import { useState } from 'react';
import Card from './Card/Card';
import UserData from './UserData/UserData';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.app}>
      <Card />
      <UserData />
    </div>
  );
}

export default App;
