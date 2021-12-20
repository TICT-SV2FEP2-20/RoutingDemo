import {v4 as uuidv4} from 'uuid';

export class Task {
  id;

  constructor(task, done) {
    this.id = uuidv4(); // used to generate a unieke identifier
    this.task = task;
    this.done = done;
  }
}