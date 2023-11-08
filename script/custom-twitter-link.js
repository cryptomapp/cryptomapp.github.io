class CustomTwitterLink extends HTMLElement {
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
    svg.setAttribute("width", "35");
    svg.setAttribute("height", "40");
    svg.setAttribute("viewBox", "0 0 35 40");
    svg.setAttribute("fill", "none");
    svg.innerHTML = `
       <path
        d="M5 2.5C2.24219 2.5 0 4.74219 0 7.5V32.5C0 35.2578 2.24219 37.5 5 37.5H30C32.7578 37.5 35 35.2578 35 32.5V7.5C35 4.74219 32.7578 2.5 30 2.5H5ZM28.2109 9.0625L20.1016 18.3281L29.6406 30.9375H22.1719L16.3281 23.2891L9.63281 30.9375H5.92188L14.5938 21.0234L5.44531 9.0625H13.1016L18.3906 16.0547L24.5 9.0625H28.2109ZM25.2578 28.7188L11.9844 11.1641H9.77344L23.1953 28.7188H25.25H25.2578Z"
        fill="#121212"
      />
    `;

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(wrapper);
    wrapper.appendChild(svg);
  }
}

customElements.define("custom-twitter-link", CustomTwitterLink);
