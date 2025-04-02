import { html, render } from "https://cdn.jsdelivr.net/npm/uhtml@3.2.0/+esm";

class MyCard extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        render(this, html`
         
        `);
    }
}

customElements.define("my-card", MyCard);

