import { html, render } from "https://cdn.jsdelivr.net/npm/uhtml@3.2.0/+esm";

class BlogComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        const blogPosts = [
            {
                title: "Project Launch Success",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel dolor et lectus cursus faucibus.",
                link: "#",
                date: "March 30, 2025",
                author: "John Doe",
                image: "/public/download (2).jpg"
            },
            {
                title: "Innovative Trends in Tech",
                content: "Fusce ac ligula nec leo tincidunt dignissim. Mauris malesuada, urna at cursus interdum.",
                link: "#",
                date: "March 28, 2025",
                author: "Jane Smith",
                image: "/public/download (2).jpg"
            },
            {
                title: "AI in Everyday Life",
                content: "Artificial Intelligence is transforming how we live and work. Here’s how it impacts daily tasks and industries.",
                link: "#",
                date: "March 25, 2025",
                author: "Michael Lee",
                image: "/public/download (2).jpg"
            },
            {
                title: "The Future of Web Development",
                content: "Web development is evolving with new frameworks and tools. Here’s what to expect in the coming years.",
                link: "#",
                date: "March 20, 2025",
                author: "Emily Johnson",
                image: "/public/download (2).jpg"
            }
        ];

        render(this, html`
            <section id="blog" class="blog-section">
                <h2>Latest Blog Posts</h2>
                <div class="blog-container">
                    ${blogPosts.map(post => html`
                        <article class="blog-post">
                            <img src="${post.image}" alt="${post.title}" class="blog-image" style="width: 100%; height: 200px; "/>
                            <div class="blog-content">
                                <h3>${post.title}</h3>
                                <p class="blog-meta">By ${post.author} | ${post.date}</p>
                                <p>${post.content}</p>
                                <a href="${post.link}" class="read-more">Read More</a>
                            </div>
                        </article>
                    `)}
                </div>
            </section>
        `);
    }
}

customElements.define("blog-component", BlogComponent);
