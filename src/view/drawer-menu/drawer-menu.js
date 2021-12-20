import { LitElement, html, css } from 'lit';

export class DrawerMenu extends LitElement {
  static styles = css`
    :host {
      background-color: cadetblue;    
    }
  `;

  static properties = {
    menuOpen: {
      type: Boolean,
    }
  };
  
  constructor() {
    super();
    this.menuOpen = false;
  }

  render() {
    return html`
      <mwc-drawer hasHeader type="modal" ?open=${this.menuOpen} @MDCTopAppBar:nav=${(e)=>this.openMenu(e)} @MDCDrawer:closed=${(e) =>this.closeMenu(e)}>
        <span slot="title">Menu</span>
        <div>
          <p @click=${this.showAbout}>About</p>
          <p @click=${this.showTodo}>Todo list</p>
        </div>
        <div slot="appContent">
          <mwc-top-app-bar>
            <mwc-icon-button slot="navigationIcon" icon="menu"></mwc-icon-button>
            <div slot="title">My Todo App</div>
          </mwc-top-app-bar>
            <div id="todo">
              <add-task></add-task>
              <task-list></task-list>
            </div>
            <div id="about" style="display: none">
              <about-info></about-info>
            </div>
        </div>
      </mwc-drawer>
    `;
  }

  showAbout() {
    this.shadowRoot.querySelector('#todo').style.display = "none";
    this.shadowRoot.querySelector('#about').style.display = "block";
  }

  showTodo() {
    this.shadowRoot.querySelector('#todo').style.display = "block";
    this.shadowRoot.querySelector('#about').style.display = "none";
  }
  openMenu(event) {
    this.menuOpen=true;
  }

  closeMenu(event) {
    this.menuOpen=false;
  }
}

customElements.define('drawer-menu', DrawerMenu);
