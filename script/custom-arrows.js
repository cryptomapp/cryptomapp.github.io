class CustomArrows extends HTMLElement {
  constructor() {
    super(); // Always call super() first in the constructor.
    // Create a shadow root to encapsulate styles.
    const shadow = this.attachShadow({ mode: "open" });

    // Create styles and attach them to the shadow root
    const style = document.createElement("style");
    style.textContent = `
        svg {
          display: block;
          width: 32px;
          height: 32px;
        }
      `;

    // SVG content
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "32");
    svg.setAttribute("height", "32");
    svg.setAttribute("viewBox", "0 0 32 32");
    svg.setAttribute("fill", "none");
    svg.innerHTML = `
        <path d="M2.66699 9.33329H26.667M21.3337 2.66663L28.0003 9.33329L21.3337 16M29.3337 22.6666H5.33366M10.667 16L4.00033 22.6666L10.667 29.3333" stroke="#66CC65" stroke-width="2"/>
      `;

    // Attach the created elements to the shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(svg);
  }
}

// Define the new element
customElements.define("custom-arrows", CustomArrows);
