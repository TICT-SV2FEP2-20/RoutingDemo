import { store } from './AppService';
import { addTask as addTodo, 
         deleteTask as deleteTodo, 
         updateTask as updateTodo } from './TaskActions';

export class TaskService {
  constructor() {}

  addTask(task) {
    store.dispatch(addTodo(task));
  }

  updateTask(taskId, done) {
    store.dispatch(updateTodo(taskId, done));
  }

  deleteTask(taskId) {
    store.dispatch(deleteTodo(taskId));
  }

}