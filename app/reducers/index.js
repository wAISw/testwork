import {combineReducers} from 'redux'
import listReducer from './list'
import filterReducer from './filter'

export const rootReducer = combineReducers({
  list: listReducer,
  filter: filterReducer
});
