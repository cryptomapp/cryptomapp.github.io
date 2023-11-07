import { globalStyles } from "./global-styles.js";

class CustomTwitterIcon extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [globalStyles];

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
      <path d="M18.2434 2.25H21.5527L14.3246 10.5094L22.8277 21.75H16.1715L10.9543 14.9344L4.9918 21.75H1.67773L9.40742 12.9141L1.25586 2.25H8.08086L12.7918 8.47969L18.2434 2.25ZM17.0809 19.7719H18.9137L7.08242 4.125H5.11367L17.0809 19.7719Z" fill="#121212"/>
    `;

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(wrapper);
    wrapper.appendChild(svg);
  }
}

// Define the custom element tag name
customElements.define("custom-twitter-icon", CustomTwitterIcon);
