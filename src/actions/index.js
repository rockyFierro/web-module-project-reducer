export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const REM_VALUE = "REM_VALUE";
export const REM_RETURN = "REM_RETURN";
export const REM_CLEAR = "REM_CLEAR";

export const remClear =()=>{
    return({
        type: REM_CLEAR,
        memory: 0
    })
}

export const remReturn = (memory) => {
    return ({ type: REM_RETURN, payload: memory})
}

export const remValue = (total) => {
    return ({type: REM_VALUE, payload: total })
}

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return ({type: CHANGE_OPERATION, payload: operator})
}

export const clearDisplay = () => {
    return ({type: CLEAR_DISPLAY, payload: 0 })
}
