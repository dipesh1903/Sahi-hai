import React,{useReducer} from 'react';

let initialState = {clicked:'false'}

const reducer = (state, action) => {
    switch(action.type){
        case 'CLICKED':
        return {
            clicked:action.clicked
        }
        default:
        return state;
    }
}

let clickCont = React.createContext();

const ClickContext = (props) => {
    let [ state1, dispatch1] = useReducer(reducer, initialState)
    let value = {state1, dispatch1}

    return (
        <clickCont.Provider  value={value}>
        {props.children}
        </clickCont.Provider>
    )
}

let clickConsumer = clickCont.Consumer;

export  {clickCont, ClickContext, clickConsumer};