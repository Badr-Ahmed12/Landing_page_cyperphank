import { html, render } from "https://cdn.jsdelivr.net/npm/uhtml@3.2.0/+esm";

class Header extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        render(this, html`
            <nav>
                <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                </ul>
            </nav>
        `);
    }
}

customElements.define("header-component", Header);
