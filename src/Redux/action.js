
import { ADD, REDUCE } from '../Redux/actionTypes';
const handleAddActionObj = (data) => {
    return { type: ADD, payload: data };
};
const handleReduceActionObj = (data) => {
    return { type: REDUCE, payload: data };
};

export { handleAddActionObj, handleReduceActionObj };
