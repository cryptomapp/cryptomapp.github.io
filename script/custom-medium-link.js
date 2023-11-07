import { globalStyles } from "./global-styles.js";

class CustomMediumLink extends HTMLElement {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.2834 5.1369C17.0767 4.49473 22.9233 4.49473 28.7167 5.1369C31.8817 5.49023 34.4334 7.9819 34.805 11.1586C35.492 17.033 35.492 22.9675 34.805 28.8419C34.4334 32.0186 31.8817 34.5102 28.7184 34.8652C22.9244 35.5076 17.0773 35.5076 11.2834 34.8652C8.11836 34.5102 5.56669 32.0186 5.19503 28.8436C4.50791 22.9686 4.50791 17.0335 5.19503 11.1586C5.56669 7.9819 8.11836 5.49023 11.2834 5.1369ZM27.35 14.9669L28.75 13.6286V13.3336H23.9134L20.465 21.9336L16.545 13.3336H11.4717V13.6286L13.105 15.5952C13.1844 15.6663 13.2458 15.7552 13.2843 15.8545C13.3228 15.9539 13.3374 16.0609 13.3267 16.1669V23.9019C13.35 24.0393 13.3408 24.1803 13.2997 24.3134C13.2586 24.4466 13.1867 24.5682 13.09 24.6686L11.25 26.9019V27.1936H16.4617V26.9002L14.6234 24.6702C14.5257 24.57 14.4522 24.4489 14.4083 24.3161C14.3644 24.1833 14.3513 24.0422 14.37 23.9036V17.2136L18.945 27.1952H19.4784L23.4067 17.2136V25.1686C23.4067 25.3802 23.4067 25.4202 23.2667 25.5602L21.8534 26.9319V27.2252H28.715V26.9319L27.3517 25.5919C27.2924 25.5471 27.2465 25.4869 27.2189 25.4179C27.1913 25.3488 27.183 25.2736 27.195 25.2002V15.3586C27.183 15.2852 27.1913 15.21 27.2189 15.1409C27.2465 15.0719 27.2907 15.0117 27.35 14.9669Z"
        fill="#121212"
      />
    `;

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(wrapper);
    wrapper.appendChild(svg);
  }
}

customElements.define("custom-medium-link", CustomMediumLink);
