class CustomBlockchainIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <style>
        
        </style>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
          <path d="M20.5335 15.1999V7.19994L13.8668 3.45007M10.1335 3.45007L3.4668 7.19994V15.1999M5.0668 17.7002L12.0001 21.5999L16.2668 19.1999L18.9335 17.6997M12.0001 8.26661L13.6001 9.19994L15.2001 10.1333V13.8666L13.6001 14.7999L12.0001 15.7333L10.4001 14.7999L8.80013 13.8666V10.1333L10.4001 9.19994L12.0001 8.26661ZM12.0001 8.26661V4.53327M15.2001 13.5999L18.9335 15.7333M8.80013 13.5999L5.0668 15.7333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.0004 4.53325C12.884 4.53325 13.6004 3.81691 13.6004 2.93325C13.6004 2.0496 12.884 1.33325 12.0004 1.33325C11.1167 1.33325 10.4004 2.0496 10.4004 2.93325C10.4004 3.81691 11.1167 4.53325 12.0004 4.53325Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.46719 18.4C4.35084 18.4 5.06719 17.6836 5.06719 16.8C5.06719 15.9163 4.35084 15.2 3.46719 15.2C2.58353 15.2 1.86719 15.9163 1.86719 16.8C1.86719 17.6836 2.58353 18.4 3.46719 18.4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M20.5336 18.4C21.4172 18.4 22.1336 17.6836 22.1336 16.8C22.1336 15.9163 21.4172 15.2 20.5336 15.2C19.6499 15.2 18.9336 15.9163 18.9336 16.8C18.9336 17.6836 19.6499 18.4 20.5336 18.4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;
  }
}

// Define the new element
customElements.define("custom-blockchain-icon", CustomBlockchainIcon);
