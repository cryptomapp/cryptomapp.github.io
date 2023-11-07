class CustomCheckmark extends HTMLElement {
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
        <g clip-path="url(#clip0_137_848)">
          <path
            d="M22.1194 10.1065L13.3327 18.8932L8.54602 14.1198L6.66602 15.9998L13.3327 22.6665L23.9993 11.9998L22.1194 10.1065ZM15.9993 2.6665C8.63935 2.6665 2.66602 8.63984 2.66602 15.9998C2.66602 23.3598 8.63935 29.3332 15.9993 29.3332C23.3594 29.3332 29.3327 23.3598 29.3327 15.9998C29.3327 8.63984 23.3594 2.6665 15.9993 2.6665ZM15.9993 26.6665C10.106 26.6665 5.33268 21.8932 5.33268 15.9998C5.33268 10.1065 10.106 5.33317 15.9993 5.33317C21.8927 5.33317 26.666 10.1065 26.666 15.9998C26.666 21.8932 21.8927 26.6665 15.9993 26.6665Z"
            fill="#66CC65"
          />
        </g>
        <defs>
          <clipPath id="clip0_137_848">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      `;

    // Attach the created elements to the shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(svg);
  }
}

// Define the new element
customElements.define("custom-checkmark", CustomCheckmark);
