import { globalStyles } from "./global-styles.js";

class CustomTiktokLink extends HTMLElement {
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
    svg.setAttribute("width", "40");
    svg.setAttribute("height", "40");
    svg.setAttribute("viewBox", "0 0 40 40");
    svg.setAttribute("fill", "none");
    svg.innerHTML = `
       <path
        d="M27.6669 9.7C26.5276 8.39937 25.8998 6.72905 25.9003 5H20.7503V25.6667C20.7105 26.785 20.2384 27.8444 19.4332 28.6216C18.628 29.3988 17.5527 29.8332 16.4336 29.8333C14.0669 29.8333 12.1003 27.9 12.1003 25.5C12.1003 22.6333 14.8669 20.4833 17.7169 21.3667V16.1C11.9669 15.3333 6.93359 19.8 6.93359 25.5C6.93359 31.05 11.5336 35 16.4169 35C21.6503 35 25.9003 30.75 25.9003 25.5V15.0167C27.9886 16.5164 30.4959 17.3211 33.0669 17.3167V12.1667C33.0669 12.1667 29.9336 12.3167 27.6669 9.7Z"
        fill="#121212"
      />
    `;

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(wrapper);
    wrapper.appendChild(svg);
  }
}

customElements.define("custom-tiktok-link", CustomTiktokLink);
