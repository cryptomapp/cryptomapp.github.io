import { loadGlobalStyles } from "./global-styles.mjs";

class CustomTabs extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    loadGlobalStyles().then((sheet) => {
      this.shadowRoot.adoptedStyleSheets = [sheet];
    });

    this.shadowRoot.innerHTML = `
        <style>
          .container {
            font-family: Arial, sans-serif;
            max-width: 1200px;
            text-align: center;
            margin-top: 40px;

            @media (min-width: 1440px) {
              max-width: 927px;
            }
          }

          .header {
            font-size: 24px;
            margin-bottom: 20px;
          }

          .icons-container {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            position: relative;

          }

          .icons-container::after {
            border-bottom: 3px solid #B8B8B8;
            content: "";
            position: absolute;
            bottom: -20px;
            left: 0;
            right: 0;
          }

          .icon-container {
            align-items: center;
            background: #ccc;
            border-radius: 50%;
            color: #969696;
            cursor: pointer;
            display: flex;
            height: 64px;
            justify-content: center;
            text-align: center;
            width: 64px;

            @media (min-width: 768px) {
              height: 100px;
              width: 100px;
            }
          }

          .phone-icon, .checkmark-icon {
            height: 26px;
          }

          .blockchain-icon, .checkin-icon {
            height: 23px;
          }

          .active-icon {
            background: #4CAF50;
            color: white;
            position: relative;
          }

          .active-icon::after {
            content: "";
            position: absolute;
            bottom: -22px;
            left: 0;
            right: 0;
            border-bottom: 2px solid #666;
          }

          .description {
            margin-top: 60px;
          }

          .highlight {
            font-weight: bold;
          }

          .content {
            display: none;
          }

          .active-content {
            display: block;
            text-align: left;
            transition: none;

            @media (min-width: 768px) {
              display: grid;
              grid-template-columns: 0.5fr 1fr;
            }
          }

          .body.title {
            margin-bottom: 24px;

            @media (min-width: 768px) {
              width: 80%;
            }
          }
        </style>

        <div class="container">
          <div class="icons-container">
            <div id="icon-phone" class="icon-container active-icon">
              <custom-phone-icon class="icon phone-icon"></custom-phone-icon>
            </div>
            <div id="icon-checkmark" class="icon-container">
             <custom-checkmark-square-icon class="icon checkmark-icon"></custom-checkmark-square-icon>
            </div>
            <div id="icon-blockchain" class="icon-container">
              <custom-blockchain-icon class="icon blockchain-icon"></custom-blockchain-icon>
            </div>
            <div id="icon-checkin" class="icon-container">
            <custom-checkin-icon class="icon checkin-icon"></custom-checkin-icon>
            </div>
          </div>
          <div class="description">
            <div id="content-phone" class="content active-content">
              <div class="body bold title">
                PWA App for Seamless Mobile Interaction.
              </div>
              <div class="body description">
                CryptoMapp is a mobile-first permissionless mapping and payment aggregator.
                Built on the robust architecture of blockchain technology to bridge traditional commerce with the digital assets space.
                Blurring the line between on-chain assets and everyday life,
                CryptoMapp brings brick-and-mortar stores into the expansive crypto economy.
              </div>
            </div>

            <div id="content-checkmark" class="content">
              <div class="body bold title">
                Effortless KYC-less On-ramp
              </div>
              <div class="body description">
                Effortless KYC-less On-ramp: Simplifying Entry to CryptoOur 'Effortless KYC-less On-ramp' feature
                streamlines the process of entering the crypto world. Say goodbye to cumbersome KYC procedures.
                With this innovative on-ramp, you can swiftly transition into the digital assets space,
                enjoying a hassle-free experience. CryptoMapp empowers users to embark on their crypto journey effortlessly.
              </div>
            </div>

            <div id="content-blockchain" class="content">
              <div class="body bold title">
                Blockchain Protocol Managing Registries and Reputation
              </div>
              <div class="body description">
                CryptoMapp introduces a Reputation System for on-chain identity creation, bypassing centralized intermediaries.
                Non-transferable Experience Points (XP), ERC20 tokens, reward user participation, fostering self-regulation and providing
                incentives to report fraudulent behavior. This maintains the ecosystem's integrity while promoting legitimate
                participation and guarding against misuse.
              </div>
            </div>

            <div id="content-checkin" class="content">
              <div class="body bold title">
                MAP Holdings for Revenue Share Permission
              </div>
              <div class="body description">
                'MAP Holdings' is a core component of CryptoMapp's ecosystem, enabling users to earn and wield MAP,
                the native utility and governance token. MAP ownership bestows not only revenue-sharing privileges but
                also influence over CryptoMapp's governance. Whether you're onboarding merchants, facilitating payments, or
                contributing to liquidity, MAP puts you at the heart of our ecosystem's growth.
              </div>
            </div>
          </div>
        </div>
      `;

    // Add event listeners in the constructor
    this.shadowRoot.querySelectorAll(".icon-container").forEach((icon) => {
      icon.addEventListener("click", () => {
        this.updateActiveContent(icon);
      });
    });
  }

  updateActiveContent(clickedIcon) {
    const icons = this.shadowRoot.querySelectorAll(".icon-container");
    const contents = this.shadowRoot.querySelectorAll(".content");

    // Remove active classes
    icons.forEach((icon) => icon.classList.remove("active-icon"));
    contents.forEach((content) => content.classList.remove("active-content"));

    // Add active class to clicked icon
    clickedIcon.classList.add("active-icon");

    // Get corresponding content
    const contentId = "content-" + clickedIcon.id.split("-")[1];
    const activeContent = this.shadowRoot.getElementById(contentId);
    activeContent.classList.add("active-content");
  }
}

// Define the new element
customElements.define("custom-tabs", CustomTabs);
