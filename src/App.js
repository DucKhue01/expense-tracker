import React from 'react';
import './App.css';
import Balance  from "./components/Balance";
import History from "./components/History";
import AddTransaction from "./components/AddTransaction";
import Detail from "./components/Detail";
import { GlobalProvide } from './context/GlobalState';

function App() {
  
  return (
    <GlobalProvide className="App">
      <h2 className='title'><span>Expense Tracker</span></h2>
      <Balance />
      <Detail />
      <History/>
      <AddTransaction />
    
    </GlobalProvide>
  );
}

export default App;
