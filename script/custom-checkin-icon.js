class CustomCheckInIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <style>
         
        </style>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
          <path d="M7.73438 9.40005L11.0039 1.92703C11.2537 1.35593 11.9379 1.11987 12.4868 1.41541L18.4009 4.6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.0674 14.7333V4.59998H21.6007V20.0666H13.0674V17.9333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M1.33398 21.6667C6.13398 21.6667 6.54417 18.8312 7.91009 18.6334C9.52209 18.3999 11.1642 18.2799 12.5891 17.9334C14.3991 17.4932 15.8585 16.9265 16.4605 16.6773C16.6562 16.5963 16.8189 16.4552 16.9168 16.2675C17.2172 15.6907 17.7555 14.4188 16.7585 14.2584C15.4636 14.0501 11.457 15.5778 9.40204 15.3C7.3471 15.0223 8.06961 13.6334 8.71708 13.2167C10.4754 12.0851 12.534 12.6 12.534 12.6V7.80005C12.534 7.80005 4.71185 9.80005 1.86732 13.2167" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.2676 9.40002H21.6009" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;
  }
}

// Define the new element
customElements.define("custom-checkin-icon", CustomCheckInIcon);
