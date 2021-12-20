import { LitElement, html, css } from 'lit';
import { connect } from 'pwa-helpers';
import { store } from '../../service/AppService';

export class TaskList extends connect(store)(LitElement) {

  static styles = css`
    :host {
      display: grid;
      grid-template-rows: auto 1fr;
      grid-template-columns: 1fr;
      grid-template-areas: 
        "header"
        "list";
    }
    h1 {
      justify-self: center;
      grid-area: header;
    }
    div {
      grid-area: list;
      width: 100%;
      justify-self: start;
      align-self: start;
    }
  `;

  static get properties() {
    return {
      tasks: { type: Array }
    }
  }

  constructor() {
    super();
    this.tasks = [];
  }

  stateChanged(state) {
    this.tasks = state.taskReducer.tasks;
  }

  render() {
    return html`
    <h1>Taken</h1>
    <div>
      ${
        this.tasks.map((task) => {
          return html`<task-item id="${task.id}" task="${task.task}" ?done=${task.done}></task-item>`
        })
      }
    </div>
  `;
  }
}

customElements.define('task-list', TaskList);
