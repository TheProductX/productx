const template = document.createElement("template");
template.innerHTML = `

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    .card {
      position: relative;
      height: 35rem;
      border-top-left-radius: 50px;
      border-bottom-right-radius: 50px;
      overflow: hidden;
      background-size: cover;
      display: flex;
      align-items: end;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }

    .card .content {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 1.5rem 1rem;
      backdrop-filter: blur(16px) saturate(158%);
      -webkit-backdrop-filter: blur(25px) saturate(158%);
      background-color: rgba(66, 64, 70, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.125);
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      flex-direction: column;
      gap: 1.2rem;
    }

    .content .profile-name {
      font-size: 1.9rem;
      font-weight: 600;
      color: #fff;
      text-transform: uppercase;
    }

    .content .institute-name {
      font-size: 1.4rem;
      font-weight: 400;
      color: rgb(235, 235, 235);
    }

    .content .profile-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .profile-description {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }

    .company {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
    }

    .profile-role {
      font-size: 1.6rem;
      color: #fff;
    }

    ion-icon {
      color: white;
      --ionicon-stroke-width: 16px;
    }

  </style>

  <div class="card">
    <div class="content">
      <div class="profile-header">
        <div class="profile-description">
          <h2 class="profile-name"><slot name="profile-name"></h2>
          <p class="institute-name"><slot name="institute-name"></p>
        </div>
        <a target="_blank" class="linkedin">
          <ion-icon size="large" name="logo-linkedin" class="logo-linkedin"></ion-icon>
        </a>
      </div>
      <div class="company">
        <p class="profile-role"><slot name="profile-role"></p>
      </div>
    </div>
  </div>
`;

class CarouselCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const profileImage = this.getAttribute("profile-image");

    if (profileImage) {
      this.shadowRoot.querySelector(
        ".card"
      ).style.backgroundImage = `url(${this.getAttribute("profile-image")})`;
    }

    this.shadowRoot.querySelector(".linkedin").href =
      this.getAttribute("linkedin-url") ?? "https://www.linkedin.com";
  }
}

window.customElements.define("carousel-card", CarouselCard);
