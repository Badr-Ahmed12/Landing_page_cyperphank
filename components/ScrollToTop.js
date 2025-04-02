import { html, render } from "https://cdn.jsdelivr.net/npm/uhtml@3.2.0/+esm";

class ScrollToTop extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  handleClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  render() {
    render(this, html`
      <button onclick=${this.handleClick} class="scroll-to-top">
        <i class="bi bi-arrow-up-circle-fill"></i>
        <span class="text">Scroll to top</span>
      </button>

      <style>
        .scroll-to-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          padding: 12px 24px;
          font-size: 18px;
          background:  #00ffc6;
          color: white;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease-in-out;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .scroll-to-top:hover {
          box-shadow: 0 0 15px #ff2e63;
          transform: translateY(-3px);
        }
        .scroll-to-top i {
          font-size: 24px;
          margin-right: 8px;
        }
        .scroll-to-top .text {
          font-size: 16px;
          margin-left: 8px;
        }
      </style>
    `);
  }
}

customElements.define("scroll-to-top", ScrollToTop);

