//use this variable to create the redux store.
//the initial data of the redux store should be {counter: 10}
import {legacy_createStore} from 'redux'
import { reducer, Reducer } from './reducer';
const store = legacy_createStore(reducer);
export { store };
