import { useMemo } from "react";
import { createReducer, createActions} from "reduxsauce";
export const { Types, Creators } = createActions({
    setModeSystem: [],
});

const INITIAL_STATE ={
    toggleMode: true
}

const setModeSystem= (state = INITIAL_STATE, action)=>{
   
    return{
        ...state,
        toggleMode: !state.toggleMode
    }
}

export default createReducer(INITIAL_STATE,{
    [Types.SET_MODE_SYSTEM]: setModeSystem
})