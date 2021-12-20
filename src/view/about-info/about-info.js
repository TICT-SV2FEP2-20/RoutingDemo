import { LitElement, html, css } from 'lit-element';

export class AboutInfo extends LitElement {
  static styles = css`
    :host {
      text-align: center;
    }
  `; 

  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`
      <h1>About</h1>
      <p>Deze pagina bevat super interessante informatie omtrent deze applicatie.</p>
    `;
  }
}

customElements.define('about-info', AboutInfo);
