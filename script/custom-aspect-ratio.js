class CustomAspectRatio extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    // Apply external styles to the shadow dom
    const style = document.createElement("style");
    style.textContent = `
        :host {
          display: block;
          width: 32px;
          height: 32px;
        }
        svg {
          width: 100%;
          height: 100%;
        }
      `;

    // SVG code provided
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("width", "32");
    svg.setAttribute("height", "32");
    svg.setAttribute("viewBox", "0 0 32 32");
    svg.setAttribute("fill", "none");
    svg.innerHTML = `
        <g clip-path="url(#clip0_137_865)">
          <path d="M25.334 16H22.6673V20H18.6673V22.6667H25.334V16ZM9.33398 12H13.334V9.33333H6.66732V16H9.33398V12ZM28.0006 4H4.00065C2.53398 4 1.33398 5.2 1.33398 6.66667V25.3333C1.33398 26.8 2.53398 28 4.00065 28H28.0006C29.4673 28 30.6673 26.8 30.6673 25.3333V6.66667C30.6673 5.2 29.4673 4 28.0006 4ZM28.0006 25.3467H4.00065V6.65333H28.0006V25.3467Z" fill="#66CC65"/>
        </g>
        <defs>
          <clipPath id="clip0_137_865">
            <rect width="32" height="32" fill="white"/>
          </clipPath>
        </defs>
      `;

    shadowRoot.appendChild(style);
    shadowRoot.appendChild(svg);
  }
}

customElements.define("custom-aspect-ratio", CustomAspectRatio);
