class CustomYoutubeLink extends HTMLElement {
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
    svg.setAttribute("width", "40");
    svg.setAttribute("height", "40");
    svg.setAttribute("viewBox", "0 0 40 40");
    svg.setAttribute("fill", "none");
    svg.innerHTML = `
       <path
        d="M16.6663 25.0002L25.3163 20.0002L16.6663 15.0002V25.0002ZM35.933 11.9502C36.1497 12.7335 36.2997 13.7835 36.3997 15.1168C36.5163 16.4502 36.5663 17.6002 36.5663 18.6002L36.6663 20.0002C36.6663 23.6502 36.3997 26.3335 35.933 28.0502C35.5163 29.5502 34.5497 30.5168 33.0497 30.9335C32.2663 31.1502 30.833 31.3002 28.633 31.4002C26.4663 31.5168 24.483 31.5668 22.6497 31.5668L19.9997 31.6668C13.0163 31.6668 8.66634 31.4002 6.94967 30.9335C5.44967 30.5168 4.48301 29.5502 4.06634 28.0502C3.84967 27.2668 3.69967 26.2168 3.59967 24.8835C3.48301 23.5502 3.43301 22.4002 3.43301 21.4002L3.33301 20.0002C3.33301 16.3502 3.59967 13.6668 4.06634 11.9502C4.48301 10.4502 5.44967 9.4835 6.94967 9.06683C7.73301 8.85016 9.16634 8.70016 11.3663 8.60016C13.533 8.4835 15.5163 8.4335 17.3497 8.4335L19.9997 8.3335C26.983 8.3335 31.333 8.60016 33.0497 9.06683C34.5497 9.4835 35.5163 10.4502 35.933 11.9502Z"
        fill="#121212"
      />
    `;

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(wrapper);
    wrapper.appendChild(svg);
  }
}

customElements.define("custom-youtube-link", CustomYoutubeLink);
