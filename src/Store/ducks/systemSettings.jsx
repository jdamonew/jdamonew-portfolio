import { useMemo } from "react";
import { createReducer, createActions} from "reduxsauce";

export const { Types, Creators } = createActions({
    setModeSystem: [],
    setLanguageSystem:["language"]
});

const INITIAL_STATE ={
    toggleMode: true,
    language:"enUS"
}

const setModeSystem= (state = INITIAL_STATE, action)=>{
   
    return{
        ...state,
        toggleMode: !state.toggleMode
    }
}

const setLanguageSystem= (state = INITIAL_STATE, action)=>{
   
    // localStorage.setItem("language",state.language)
    console.log(action, state)
    return{
        ...state,
        language: action.language
    }
}

export default createReducer(INITIAL_STATE,{
    [Types.SET_MODE_SYSTEM]: setModeSystem,
    [Types.SET_LANGUAGE_SYSTEM]: setLanguageSystem
})