export default  (state, action) => {

    


    switch (action.type) {
        case "REMOVE":
            return {
                ...state,
                transactions: state.transactions.filter( (tran) =>{
                    return tran.id !== action.payload
                })
            }
           
        case "ADD":
            return {
                ...state,
                transactions: [
                    ...state.transactions,
                    action.payload
                ]
                   

                
            }
        default:
            return state;
          
    }
}

