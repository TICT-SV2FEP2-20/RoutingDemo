import { LitElement, html, css } from "lit";
import { TaskService } from "../../service/TaskService";
import { Router } from '@vaadin/router';

export class TaskListItem extends LitElement {
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

  render() {
    return html`
      <div>
        <mwc-formfield label="${this.task}">
          <mwc-checkbox ?checked=${this.done} @change=${this.toggle}></mwc-checkbox>
        </mwc-formfield>
        <mwc-icon @click=${this.edit}>create</mwc-icon>
        <mwc-icon @click=${this.delete}>delete</mwc-icon>
      </div>
    `;
  }

  toggle(event) {
    this.done = event.target.checked;
    this.taskService.updateTask(this.id, this.done);
  }

  edit(event) {
    Router.go(`/tasks/${this.id}`);
  }

  delete(event) {
    this.taskService.deleteTask(this.id);
  }
}

customElements.define('task-list-item', TaskListItem);
