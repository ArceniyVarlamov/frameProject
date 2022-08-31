import { combineReducers, createStore } from 'redux';
import { framesReducer } from './framesReduser';

const rootReducer = combineReducers({
  frames: framesReducer
})

export const store = createStore(rootReducer)