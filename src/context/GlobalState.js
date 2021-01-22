import React, { createContext, useReducer } from 'react';
import AppReducer from './Appreducer'

// intial state
const intialState = {
    transactions: []
}


// export context
export const GlobalContext = createContext(intialState);

// provider component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, intialState);

//actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
//Add Transaction
    
function addTransaction(transaction) {
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
}
    
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction

        }}>
            {children}
        </GlobalContext.Provider>
    );
}