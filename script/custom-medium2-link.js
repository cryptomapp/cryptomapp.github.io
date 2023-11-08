class CustomMedium2Link extends HTMLElement {
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
        d="M22.5625 20C22.5625 26.2125 17.5125 31.25 11.28 31.25C9.80066 31.252 8.33541 30.9626 6.96793 30.3983C5.60044 29.834 4.35749 29.0058 3.31005 27.9612C2.2626 26.9165 1.43117 25.6758 0.863235 24.3098C0.295296 22.9438 0.00196852 21.4794 0 20C0 13.785 5.05 8.75001 11.28 8.75001C12.7596 8.74771 14.2251 9.0369 15.5928 9.60105C16.9606 10.1652 18.2039 10.9933 19.2516 12.038C20.2993 13.0827 21.1309 14.3235 21.699 15.6896C22.2671 17.0558 22.5605 18.5205 22.5625 20ZM34.9375 20C34.9375 25.85 32.4125 30.59 29.2975 30.59C26.1825 30.59 23.6575 25.8475 23.6575 20C23.6575 14.15 26.1825 9.41001 29.2975 9.41001C32.4125 9.41001 34.9375 14.1525 34.9375 20ZM40 20C40 25.24 39.1125 29.4875 38.015 29.4875C36.92 29.4875 36.0325 25.2375 36.0325 20C36.0325 14.76 36.92 10.5125 38.0175 10.5125C39.1125 10.5125 40 14.76 40 20Z"
        fill="#121212"
      />
    `;

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(wrapper);
    wrapper.appendChild(svg);
  }
}

customElements.define("custom-medium2-link", CustomMedium2Link);
