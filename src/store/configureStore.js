import { createStore } from 'redux';
import { rootReducer, initialState } from './reducers/index.js';

export const store = createStore(rootReducer, initialState);