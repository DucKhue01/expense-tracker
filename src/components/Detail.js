import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";
function Detail() {


    const state = useContext(GlobalContext);
    const {transactions} = state;
   
    const [sumPos, setSumPos] = useState(0);
    const [sumNeg, setSumNeg] = useState(0)   
    useEffect(() => {   
        setSumPos( transactions.reduce((acc, curr) => {
            if (curr.amount >= 0) {
                acc =  acc + curr.amount;     
            }
            return acc;
             
        }, 0))
        setSumNeg( transactions.reduce((acc, curr) => {
            if (curr.amount < 0) {
                acc =  acc + curr.amount;     
            }
            return acc;
             
        }, 0))
        

    }, [transactions])
    return (
        <div className="in_exp_container">
            <div className="income">
                <h3><span>INCOME</span></h3>
                <h3><span>${sumPos.toFixed(2) }</span></h3>
            </div>
            <div className="expense">
                <h3><span>EXPENSE</span></h3>
                <h3><span>${(sumNeg* -1).toFixed(2) }</span></h3>
            </div>
        </div>
    )
}

export default Detail
