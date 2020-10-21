import React, { useEffect , useState, useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";



function Balance() {
    const state = useContext(GlobalContext);
    const {transactions} = state;

    
    const [sum, setSum] = useState(0)    
    useEffect(() => {
       
        
        setSum(transactions.reduce((acc, curr) => {
            return  acc + curr.amount;        
        }, 0))

        
       
    }, [transactions])


 

    return (
        <div className='balance'>
            <h4>YOUR BALANCE</h4>
            <h2>${sum}</h2>
        </div>
    )
}

export default Balance
