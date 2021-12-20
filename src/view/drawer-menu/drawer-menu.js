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
          <p><a href="./about.html">About</a></p>
          <p><a href="./index.html">Todo list</a></p>
        </div>
        <div slot="appContent">
          <mwc-top-app-bar>
            <mwc-icon-button slot="navigationIcon" icon="menu"></mwc-icon-button>
            <div slot="title">My Todo App</div>
          </mwc-top-app-bar>
          <slot></slot>
        </div>
      </mwc-drawer>
    `;
  }

  openMenu(event) {
    this.menuOpen=true;
  }

  closeMenu(event) {
    this.menuOpen=false;
  }
}

customElements.define('drawer-menu', DrawerMenu);
