import React, {useState} from 'react'

function AddTransaction({add}) {

    const [info, setInfo] = useState({
        text:"",
        amount:0
    });


    return (
        <div className="add_transaction">
        <form 
            id="form"
            onSubmit={(e) =>{
                e.preventDefault();
                return add({
                    ...info,
                    id:Math.floor(Math.random() * 10000000000)
                })
            }}
        >
            <div className="form-control">
                <label for="text">Text</label>
                <input 
                    type="text" 
                    id="text" 
                    placeholder="Enter text..."
                    onChange={(e) =>{
                        return setInfo({
                            ...info,
                            text: e.target.value

                        })
                    }} 
                />
            </div>
            <div className="form-control">
                <label for="amount"
                    >Amount <br />
                    (negative - expense, positive - income)
                </label>
                <input 
                    type="number" 
                    id="amount" 
                    placeholder="Enter amount..." 
                    onChange={(e) =>{
                       
                        return setInfo({
                            ...info,
                            amount: parseInt(e.target.value)

                        })
                    }}
                />
            </div>
            <button 
                className="btn"
                disabled={false}
            >
                Add transaction
            </button>
        </form>

        </div>
    )
}

export default AddTransaction
