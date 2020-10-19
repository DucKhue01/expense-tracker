import React,  { useEffect, useState} from 'react'
import TransactionItem from "./TransactionItem";
function History({transactions, remove}) {
 
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
       
    }, [transactions])

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
