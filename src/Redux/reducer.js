import { ADD, REDUCE } from "./actionTypes";
//Complete the reducer function logic inside the curly braces {}
const reducer = (state = 10, action) => {

    if(action.type===ADD){
        state={...state,"counter":state.counter+action.payload}
    }else if(action.type===REDUCE){
        state={...state,"counter":state.counter-action.payload}
    }
    return state;
};
export { reducer };