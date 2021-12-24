import { LitElement, html, css } from 'lit';

export class TaskPage extends LitElement {
  static styles = css``;
  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`
      <task-form></task-form>
      <task-list></task-list>
    `;
  }
}

customElements.define('task-page', TaskPage);
