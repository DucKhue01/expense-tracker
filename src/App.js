import React, {useState} from 'react';
import './App.css';
import Balance  from "./components/Balance";
import History from "./components/History";
import AddTransaction from "./components/AddTransaction";
import Detail from "./components/Detail";


const dummyTransactions = [
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
];





function App() {
  const [transactions, setTransactions] = useState(dummyTransactions);


  function add(info) {
    setTransactions([
      ...transactions,
      info

    ])
  }
  function remove(id) {
    setTransactions(
      transactions.filter( (tran) =>{
        return  tran.id !== id
      })

    )
  }


  return (
    <div className="App">
      <h2 className='title'><span>Expense Tracker</span></h2>
      <Balance transactions={transactions} />
      <Detail transactions={transactions} />
      <History transactions={transactions} remove={remove}/>
      <AddTransaction add={add} />
    
    </div>
  );
}

export default App;
