class CustomDiscordLink extends HTMLElement {
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
        d="M32.1165 8.88325C29.8999 7.84991 27.4999 7.09991 24.9999 6.66658C24.978 6.66588 24.9561 6.66999 24.936 6.67863C24.9158 6.68727 24.8978 6.70022 24.8832 6.71658C24.5832 7.26658 24.2332 7.98325 23.9999 8.53325C21.3482 8.13325 18.6515 8.13325 15.9999 8.53325C15.7665 7.96658 15.4165 7.26658 15.0999 6.71658C15.0832 6.68325 15.0332 6.66658 14.9832 6.66658C12.4832 7.09991 10.0999 7.84991 7.86654 8.88325C7.84987 8.88325 7.8332 8.89991 7.81654 8.91658C3.2832 15.6999 2.0332 22.2999 2.64987 28.8332C2.64987 28.8666 2.66654 28.8999 2.69987 28.9166C5.69987 31.1166 8.5832 32.4499 11.4332 33.3332C11.4832 33.3499 11.5332 33.3332 11.5499 33.2999C12.2165 32.3832 12.8165 31.4166 13.3332 30.3999C13.3665 30.3332 13.3332 30.2666 13.2665 30.2499C12.3165 29.8832 11.4165 29.4499 10.5332 28.9499C10.4665 28.9166 10.4665 28.8166 10.5165 28.7666C10.6999 28.6332 10.8832 28.4832 11.0665 28.3499C11.0999 28.3166 11.1499 28.3166 11.1832 28.3332C16.9165 30.9499 23.0999 30.9499 28.7665 28.3332C28.7999 28.3166 28.8499 28.3166 28.8832 28.3499C29.0665 28.4999 29.2499 28.6332 29.4332 28.7832C29.4999 28.8332 29.4999 28.9332 29.4165 28.9666C28.5499 29.4832 27.6332 29.8999 26.6832 30.2666C26.6165 30.2832 26.5999 30.3666 26.6165 30.4166C27.1499 31.4332 27.7499 32.3999 28.3999 33.3166C28.4499 33.3332 28.4999 33.3499 28.5499 33.3332C31.4165 32.4499 34.2999 31.1166 37.2999 28.9166C37.3332 28.8999 37.3499 28.8666 37.3499 28.8332C38.0832 21.2832 36.1332 14.7332 32.1832 8.91658C32.1665 8.89991 32.1499 8.88325 32.1165 8.88325ZM14.1999 24.8499C12.4832 24.8499 11.0499 23.2666 11.0499 21.3166C11.0499 19.3666 12.4499 17.7832 14.1999 17.7832C15.9665 17.7832 17.3665 19.3832 17.3499 21.3166C17.3499 23.2666 15.9499 24.8499 14.1999 24.8499ZM25.8165 24.8499C24.0999 24.8499 22.6665 23.2666 22.6665 21.3166C22.6665 19.3666 24.0665 17.7832 25.8165 17.7832C27.5832 17.7832 28.9832 19.3832 28.9665 21.3166C28.9665 23.2666 27.5832 24.8499 25.8165 24.8499Z"
        fill="#121212"
      />
    `;

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(wrapper);
    wrapper.appendChild(svg);
  }
}

customElements.define("custom-discord-link", CustomDiscordLink);