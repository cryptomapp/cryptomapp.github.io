class CustomLinkedinIcon extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.render();
  }

  render() {
    const href = this.getAttribute("href") || "#";
    const style = document.createElement("style");

    style.textContent = `
        .wrapper {
          border: 1px solid black;
          border-radius: 50%;
          cursor: pointer;
          display: block;
          padding: 12px;
        }
        svg {
          display: block;
          height: 32px;
          width: 32px;
        }
      `;

    const wrapper = document.createElement("a");
    wrapper.setAttribute("class", "wrapper");
    wrapper.setAttribute("href", href);

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.innerHTML = `
      <path d="M7.20062 20.9995H2.84688V6.97922H7.20062V20.9995ZM5.02141 5.06672C3.62922 5.06672 2.5 3.91359 2.5 2.52141C2.5 1.85269 2.76565 1.21136 3.2385 0.738503C3.71136 0.265647 4.35269 0 5.02141 0C5.69012 0 6.33145 0.265647 6.80431 0.738503C7.27716 1.21136 7.54281 1.85269 7.54281 2.52141C7.54281 3.91359 6.41313 5.06672 5.02141 5.06672ZM23.4953 20.9995H19.1509V14.1745C19.1509 12.548 19.1181 10.462 16.8873 10.462C14.6237 10.462 14.2769 12.2292 14.2769 14.0573V20.9995H9.92781V6.97922H14.1034V8.89172H14.1644C14.7456 7.79016 16.1655 6.62766 18.2838 6.62766C22.69 6.62766 23.5 9.52922 23.5 13.298V20.9995H23.4953Z" fill="#121212"/>
    `;

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(wrapper);
    wrapper.appendChild(svg);
  }
}

// Define the new custom element
customElements.define("custom-linkedin-icon", CustomLinkedinIcon);
