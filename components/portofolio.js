import { html, render } from "https://cdn.jsdelivr.net/npm/uhtml@3.2.0/+esm";

class Portfolio extends HTMLElement {
  connectedCallback() {
    this.render();
    this.initSwiper(); // تهيئة Swiper بعد تحميل الـ DOM
  }

  render() {
    render(this, html`
      <section id="portfolio" class="portfolio-section">
        <h2>Our Portfolio</h2>
        <div class="swiper portfolio-gallery">
          <div class="swiper-wrapper">
            ${this.getSlides()}
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-pagination"></div>
        </div>
      </section>
    `);
  }

  getSlides() {
    return [
      { image: "/public/download (2).jpg", alt: "Project 1" },
      { image: "/public/download (2).jpg", alt: "Project 2" },
      { image: "/public/download (2).jpg", alt: "Project 3" },
      { image: "/public/download (2).jpg", alt: "Project 4" },
    ].map(({ image, alt }) => html`
      <div class="swiper-slide">
        <img src="${image}" alt="${alt}" />
      </div>
    `);
  }

  initSwiper() {
    // التأكد من أن الـ Swiper يعمل بعد إضافة الـ DOM
    const swiper = new Swiper(".portfolio-gallery", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
  }
}

customElements.define("portfolio-component", Portfolio);
