import {v4 as uuidv4} from 'uuid';

export class Task {
  id;

  constructor(description, done) {
    this.id = uuidv4(); // used to generate a unieke identifier
    this.description = description;
    this.done = done;
  }
}