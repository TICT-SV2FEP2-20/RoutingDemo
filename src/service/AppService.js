import { createStore, combineReducers } from 'redux';
import { TaskReducers } from './TaskReducers';

const rootReducer = combineReducers(
  {
    taskReducer: TaskReducers
  }
);

const storageKey = 'todoApp';

const saveState = (state) => localStorage.setItem(storageKey, JSON.stringify(state));
const loadState = () => {
  const json = localStorage.getItem(storageKey);
  return json ? JSON.parse(json) : undefined;
};

export const store = createStore(
  rootReducer,
  loadState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});
