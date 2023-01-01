import {legacy_createStore} from 'redux'
import { reducer, Reducer } from './reducer';
const store = legacy_createStore(reducer);
export { store };
