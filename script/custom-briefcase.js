class CustomBriefcase extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    // Create styles
    const style = document.createElement("style");
    style.textContent = `
        svg {
          display: block;
          width: 32px;
          height: 32px;
        }
      `;

    // Create SVG element
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttributeNS(null, "width", "32");
    svg.setAttributeNS(null, "height", "32");
    svg.setAttributeNS(null, "viewBox", "0 0 32 32");
    svg.setAttributeNS(null, "fill", "none");
    svg.innerHTML = `
        <g clip-path="url(#clip0_137_859)">
          <path d="M26.666 7.99984H22.666V5.33317C22.666 3.85317 21.4793 2.6665 19.9993 2.6665H11.9993C10.5193 2.6665 9.33268 3.85317 9.33268 5.33317V7.99984H5.33268C3.85268 7.99984 2.66602 9.1865 2.66602 10.6665V25.3332C2.66602 26.8132 3.85268 27.9998 5.33268 27.9998H26.666C28.146 27.9998 29.3327 26.8132 29.3327 25.3332V10.6665C29.3327 9.1865 28.146 7.99984 26.666 7.99984ZM11.9993 5.33317H19.9993V7.99984H11.9993V5.33317ZM26.666 25.3332H5.33268V22.6665H26.666V25.3332ZM26.666 18.6665H5.33268V10.6665H9.33268V13.3332H11.9993V10.6665H19.9993V13.3332H22.666V10.6665H26.666V18.6665Z" fill="#66CC65"/>
        </g>
        <defs>
          <clipPath id="clip0_137_859">
            <rect width="32" height="32" fill="white"/>
          </clipPath>
        </defs>
      `;

    // Attach the created elements to the shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(svg);
  }
}

// Define the new element
customElements.define("custom-briefcase", CustomBriefcase);
