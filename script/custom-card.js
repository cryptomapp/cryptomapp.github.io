import { globalStyles } from "./global-styles.js";
class CustomCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [globalStyles];

    this.render();
  }

  static get observedAttributes() {
    return ["title", "subtitle", "href"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    this.render();
  }

  render() {
    const title = this.getAttribute("title") || "Default Title";
    const subtitle = this.getAttribute("subtitle") || "Default Subtitle";
    const imgSrc = this.getAttribute("imgSrc") || "krzysztof.png";
    const twitterUrl = this.getAttribute("twitterUrl") || "#";
    const linkedinUrl = this.getAttribute("linkedinUrl") || "#";

    const style = `
      <style>
        .card {
          align-items: center;
          background: var(--white, #ffffff);
          border: 1px solid var(--foundation-grey-grey-700, #333);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          margin-bottom: 32px;
          padding: 32px 64px;

          @media (min-width: 768px) {
            margin-bottom: 0;
          }

          @media (min-width: 1440px) {
            padding: 32px 46px;
          }
        }
        .card .card-img {
          border-radius: 50%;
          height: 204px;
          width: 204px;
        }
        .card .card-title {
          margin: 24px 0 0 0;
        }
        .card .card-subtitle {
          color: var(--foundation-cold-green-cold-green-500, #006633);
          margin: 0;
        }
        .card .card-footer {
          display: flex;
          gap: 12px;
          margin-top: 32px;
        }
      </style>
    `;

    // Update the internal HTML
    this.shadowRoot.innerHTML = `
      ${style}
      <div class="card">
        <img
          class="img card-img"
          src="assets/${imgSrc}"
          alt="missing.png"
        />
        <h4 class="h4 card-title">${title}</h4>
        <p class="body card-subtitle">${subtitle}</p>
        <div class="card-footer">
          ${
            ["Krzysztof", "Kofi"].includes(title)
              ? `<custom-twitter-icon href='${twitterUrl}'></custom-twitter-icon>`
              : ""
          }
          ${
            !["Kofi"].includes(title)
              ? `<custom-linkedin-icon href='${linkedinUrl}'></custom-linkedin-icon>`
              : ""
          }
        </div>
      </div>
    `;
  }
}

// Define the custom element
customElements.define("custom-card", CustomCard);
