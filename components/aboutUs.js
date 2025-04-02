import { html, render } from "https://cdn.jsdelivr.net/npm/uhtml@3.2.0/+esm";

class AboutUsComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        render(this, html`
            <section id="about" class="about-section">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, expedita repellendus? Adipisci, voluptas.</p>
                <img src="/public/download (2).jpg" alt="About Image" class="about-image" style="width: 100%; max-width: 800px;">
            </section>
        `);
    }
}

customElements.define("about-us-component", AboutUsComponent);

