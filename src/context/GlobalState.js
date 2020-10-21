import React, { useReducer, createContext} from "react";
import  AppReducer  from "./AppReducer";

const initialState = {
    transactions : [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ],

}

export const GlobalContext = createContext();

export const GlobalProvide = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    const remove = (id) => {
        dispatch({
            type: "REMOVE",
            payload: id
        })
    }
    const add = (data) => {
        dispatch({
            type: "ADD",
            payload: data
        })
    }


    
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            remove,
            add
        }}>
            {children}
        </GlobalContext.Provider>
    )


}