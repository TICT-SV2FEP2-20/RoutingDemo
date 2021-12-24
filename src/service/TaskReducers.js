import { ADD_TASK, UPDATE_TASK, DELETE_TASK } from './TaskActions';

const initialState = {
  tasks: []
}

export const TaskReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: 
      return {
        ...state,
        tasks: [...state.tasks, action.task]
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(
          (task) => {
            if (task.id === action.task.id) {
              task = action.task;
            }
            return task;
          }
        )
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(
          (task) => task.id !== action.taskId
        )
      };
    default: 
      return state;
  }
}