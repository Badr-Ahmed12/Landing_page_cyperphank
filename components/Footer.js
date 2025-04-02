import { html, render } from "https://cdn.jsdelivr.net/npm/uhtml@3.2.0/+esm";

class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  getCurrentYear() {
    return new Date().getFullYear();
  }

  render() {
    render(this, html`
      <footer class="footer-section">
        <div class="footer-container">
          <div class="footer-logo">
            <h2>My Project</h2>
          </div>
          <div class="footer-links">
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div class="footer-social">
            <a href="#" class="social-icon"><i class="bi bi-facebook"></i></a>
            <a href="#" class="social-icon"><i class="bi bi-twitter"></i></a>
            <a href="#" class="social-icon"><i class="bi bi-instagram"></i></a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${this.getCurrentYear()} My Project. All rights reserved.</p>
        </div>
      </footer>
    `);
  }
}
customElements.define("footer-component", FooterComponent);

