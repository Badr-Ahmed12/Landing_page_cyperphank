import { html, render } from "https://cdn.jsdelivr.net/npm/uhtml@3.2.0/+esm";

class Hero extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        render(this, html`
            <section id="hero" class="hero-section">
                <h1 class="title" tabindex="0" aria-label="Welcome to My Project" title="My Project" role="heading" aria-level="1">
                    <span>Welcome</span> to My Project
                </h1>
                <p>Your journey to excellence starts here.</p>
                <button class="cta-button" onclick="alert('Thank you for clicking!')">Click Me</button>
            </section>
        `);
    }
}

customElements.define("hero-component", Hero);
