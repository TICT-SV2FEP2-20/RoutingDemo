import { createStore, combineReducers } from 'redux';
import { TaskReducers } from './TaskReducers';

const rootReducer = combineReducers(
  {
    taskReducer: TaskReducers
  }
)
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
