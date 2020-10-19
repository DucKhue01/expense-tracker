import React from 'react'

function TransactionItem({name, amount, remove, id}) {
    return (
        <div className="transaction_item">
            <div
                className='removeNode'
                onClick={ () =>{
                    remove(id)
                }}
            ><span>X</span></div>
            <div class="itemName">
               <span>{name}</span>
            </div>
            
            <div>
                <span>{amount}</span>
            </div>
        </div>
    )
}

export default TransactionItem
