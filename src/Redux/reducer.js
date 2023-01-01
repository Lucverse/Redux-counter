import { ADD, REDUCE } from "./actionTypes";
let initialdata = { counter: 10 }
const reducer = (state = initialdata, action) => {
    if (action.type === ADD) {
        state = { ...state, "counter": state.counter + action.payload }
    } else if (action.type === REDUCE) {
        state = { ...state, "counter": state.counter - action.payload }
    }
    return state;
};

export { reducer };