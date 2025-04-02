import { html, render } from "https://cdn.jsdelivr.net/npm/uhtml@3.2.0/+esm";

class ServicesComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    render(this, html`
      <section id="services" class="services-section">
        <h2>Our Services</h2>
        <div class="services-container">
          ${this.renderServiceItems()}
        </div>
      </section>
    `);
  }

  renderServiceItems() {
    return [
      {
        title: "Design",
        description: "High quality designs to make your project stand out."
      },
      {
        title: "Development",
        description: "Robust and scalable development solutions for all platforms."
      },
      {
        title: "Support",
        description: "24/7 support to ensure smooth operation of your project."
      }
    ].map(({ title, description }) => html`
      <div class="service-item">
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
    `);
  }
}

customElements.define("services-component", ServicesComponent);

