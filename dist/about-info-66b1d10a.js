import { s, r, p } from './index-ed0e5973.js';

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");

class AboutInfo extends s {
  static styles = r`
    :host {
      text-align: center;
    }
  `; 

  static properties = {};

  constructor() {
    super();
  }

  render() {
    return p`
      <h1>About</h1>
      <p>Deze pagina bevat super interessante informatie omtrent deze applicatie.</p>
    `;
  }
}

customElements.define('about-info', AboutInfo);

export { AboutInfo };
