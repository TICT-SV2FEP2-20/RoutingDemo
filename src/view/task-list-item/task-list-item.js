import { LitElement, html, css } from "lit";
import { TaskService } from "../../service/TaskService";
import { connect } from 'pwa-helpers';
import { store } from '../../service/AppService';
import { Router } from "@vaadin/router";

export class TaskListItem extends connect(store)(LitElement) {
  static styles = css`
    mwc-icon {
      vertical-align: 30%;
    }
    div:hover{
      background-color: yellow;
    }
  `;
 
  static properties = {
    id: {
      type: String
    },
    task: {
      type: String,
      reflect: true
    },
    done: {
      type: Boolean,
      reflect: true
    }
  };

  constructor() {
    super();
    this.taskService = new TaskService();
  }

  stateChanged(state) {
    this.task = state.taskReducer.tasks.find((task) => task.id === this.id);
  }

  render() {
    return html`
      <div>
        <mwc-formfield label="${this.task.description}">
          <mwc-checkbox ?checked=${this.task.done} @change=${this.toggle}></mwc-checkbox>
        </mwc-formfield>
        <mwc-icon @click=${this.edit}>edit</mwc-icon>
        <mwc-icon @click=${this.delete}>delete</mwc-icon>
      </div>
    `;
  }

  toggle(event) {
    this.task.done = event.target.checked;
    this.taskService.updateTask(this.id, this.task);
  }

  edit(event) {
    Router.go(`tasks/${this.id}`);
  }

  delete(event) {
    this.taskService.deleteTask(this.id);
  }
}

customElements.define('task-list-item', TaskListItem);
