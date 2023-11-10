class CustomCheckmarkSquareIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <style>
        
        </style>
        <!-- Your SVG code -->
       <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M20.4671 3.3999H5.53372C4.96793 3.3999 4.42531 3.62466 4.02523 4.02474C3.62515 4.42482 3.40039 4.96744 3.40039 5.53324V20.4666C3.40039 21.0324 3.62515 21.575 4.02523 21.9751C4.42531 22.3751 4.96793 22.5999 5.53372 22.5999H20.4671C21.0329 22.5999 21.5755 22.3751 21.9755 21.9751C22.3756 21.575 22.6004 21.0324 22.6004 20.4666V5.53324C22.6004 4.96744 22.3756 4.42482 21.9755 4.02474C21.5755 3.62466 21.0329 3.3999 20.4671 3.3999ZM20.4671 5.53324V20.4666H5.53372V5.53324H20.4671ZM10.8671 18.3332L6.60039 14.0666L8.10439 12.5519L10.8671 15.3146L17.8964 8.28523L19.4004 9.7999" fill="currentColor"/>
      </svg>
      `;
  }
}

// Define the new element
customElements.define(
  "custom-checkmark-square-icon",
  CustomCheckmarkSquareIcon
);
