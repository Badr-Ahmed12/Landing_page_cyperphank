import { html, render } from "https://cdn.jsdelivr.net/npm/uhtml@3.2.0/+esm";

class Testimonials extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    render(this, html`
      <section id="testimonials" class="testimonials-section">
        <h2>Testimonials</h2>
        <blockquote>
          <p>"This project exceeded my expectations! Amazing work and professional service."</p>
          <footer>- Happy Client</footer>
        </blockquote>
        <blockquote>
          <p>"The team delivered exactly what they promised, and more. Truly impressive!"</p>
          <footer>- Satisfied Customer</footer>
        </blockquote>
      </section>
    `);
  }
}

customElements.define("testimonials-component", Testimonials);


