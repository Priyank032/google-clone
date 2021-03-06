import React,{createContext , useContext, useReducer} from 'react';
//preparing the data layer
export const StateContext = createContext();
//console.log(StateContext);

export const StateProvider =({reducer , initialState ,children
}) => {
    return(
    <StateContext.Provider value={useReducer(reducer,
    initialState)}>
    {children}
    </StateContext.Provider>
    );
};

//hook which allows us to pull information from the data layer

export const useStateValue = () =>useContext(StateContext);
//console.log(useStateValue);
