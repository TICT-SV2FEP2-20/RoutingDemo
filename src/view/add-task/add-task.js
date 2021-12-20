import { LitElement, html, css } from 'lit';
import { Task } from '../../model/Task';
import { TaskService } from '../../service/TaskService';

export class AddTask extends LitElement {
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

  constructor() {
    super();
    this.taskService = new TaskService();
  }

  render() {
    return html`
      <mwc-textfield
        name="task"  
        label="Task" 
        type="text"
        value="${this.value}"
        @keyup=${(e) => this.keyUpHandler(e)}
      ></mwc-textfield>
      <mwc-button @click="${this.clickHandler}" raised>ADD</mwc-button>    
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
      const newTask = new Task(value, false);
      this.taskService.addTask(newTask);
      
      // clearing the textfield again.
      this.value='';
      this.shadowRoot.querySelector('mwc-textfield').value='';
    }
  }

}

customElements.define('add-task', AddTask);
