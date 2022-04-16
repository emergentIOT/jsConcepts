import React, { useReducer } from 'react'
import '../Hooks/style.css'

const reducer = (state, action) => {
    if(action.type === "INCR") {
        state = state + 1;
    }

    if(state > 0 && action.type === "DECR") {
        state = state - 1;
    }
    return state;
}

const UseReducer = () => {
    const initialData = 4;
    /**
     * dispatch is used to trigger your reducer function().
     * reducer will have the updated function through which we can change the value of state.
     * initial data is same as useState()
     */
    const [state, dispatch] = useReducer(reducer, initialData);
    
    return (
    <>
    <div className="center_div">
        <p>{state}</p>
        <div className='button2' onClick={() => dispatch({type:"INCR"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INC
        </div>    
        <div className='button2' onClick={() => dispatch({type:"DECR"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DEC
        </div>  
    </div>
    </>
  )
}

export default UseReducer