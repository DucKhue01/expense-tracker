import React,  { useEffect, useState, useContext} from 'react'
import TransactionItem from "./TransactionItem";
import { GlobalContext } from "../context/GlobalState";


function History() {

    const state = useContext(GlobalContext);
    const {transactions, remove} = state;

 
    const [listItem, setListItem] = useState()
    useEffect(() => {
        setListItem(
            transactions.map( tran =>{
                return (
                    <TransactionItem 
                        name={tran.text}
                        amount={tran.amount} 
                        key={tran.id}
                        id={tran.id}
                        remove={remove}
                     />
                )
            })
        )
       
    }, [transactions, remove])

    return (
        <div 
            className="history"
           
        >
            <h2>History</h2>
            {listItem}
        </div>
    )
}

export default History
