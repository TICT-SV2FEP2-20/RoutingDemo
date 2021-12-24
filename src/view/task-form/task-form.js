import { LitElement, html, css } from 'lit';
import { connect } from 'pwa-helpers';
import { Router } from '@vaadin/router';
import { store } from '../../service/AppService';
import { Task } from '../../model/Task';
import { TaskService } from '../../service/TaskService';

export class TaskForm extends connect(store)(LitElement) {
  static styles = css`
    :host {
      display: grid;
      grid-template-columns: 50px 2fr auto 50px;
      grid-template-rows: 10px 1fr 10px;
      grid-template-areas:
        ". .     .      ."
        ". field button ."
        ". .     .      .";
      grid-gap: 10px;
    }
    mwc-textfield {
      grid-area: field;
    }
    mwc-button {
      grid-area: button;
      align-self: center;
    }
  `;

  static get properties() {
    return {
      value: {
        type: String,
        reflect: true
      },
      id: { type: String },
      tasks: { type: Array },
      task: { type: Object }
    }
  }

  constructor() {
    super();
    this.taskService = new TaskService();
    this.id = '';
    this.tasks = [];
  }

  stateChanged(state) {
    this.tasks = state.taskReducer.tasks;
  }

  connectedCallback() {
    super.connectedCallback();
    this.task = this.tasks.find((task) => task.id === this.id);
  }

  async onBeforeEnter(locatie) {
    this.id = locatie.params.id;
  };

  render() {
    this.value = this.task ? this.task.task : '';
    return html`
      <mwc-textfield
        name="task"  
        label="Task" 
        type="text"
        value="${this.value}"
        @keyup=${(e) => this.keyUpHandler(e)}
      ></mwc-textfield>
      ${this.task 
          ? html`<mwc-button @click="${this.clickHandler}" raised>UPDATE</mwc-button>`
          : html`<mwc-button @click="${this.clickHandler}" raised>ADD</mwc-button>`
      }    
    `;
  }

  // In case the user hits enter instead of clicking the add button.
  keyUpHandler(e) {
    if (e.key === 'Enter') {
      this.addTask(e.target.value);
    }
  }

  clickHandler(e) {
    this.addTask(this.shadowRoot.querySelector('mwc-textfield').value);
  }


  addTask(value) {
    if (value && value!=='') {
      // the user has entered a value within the textfield
      if (!this.task) {
        const newTask = new Task(value, false);
        this.taskService.addTask(newTask);
      } else {
        this.task.description = value;
        this.taskService.updateTask(taskId, this.task); 
      }
      
      // clearing the textfield again.
      this.value='';
      this.shadowRoot.querySelector('mwc-textfield').value='';

      if (this.task) {
        Router.go('/');
      }
    }
  }

}

customElements.define('task-form', TaskForm);
