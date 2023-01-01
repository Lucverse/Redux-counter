//Complete the reducer function logic inside the curly braces {}
const reducer = (state = 1, action) => {
    switch (action.type){
        case "ADD":
            return state + 1;
        case "REDUCE":
            return state -1;
        default:
             return state;
    }
};
export { reducer };