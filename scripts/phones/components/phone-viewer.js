import Component from "../../common/component.js";

export default class PhoneViewer extends Component {
  constructor({ element }) {
    super({ element });

    this._element.addEventListener("click", event => this.__onShowPhoto(event));

    // this._render();
  }

  showPhone(phone) {
    this._phone = phone;
    this._render();

    super.show();
    alert(this);
  }

  __onShowPhoto(event) {
    const mainImg = document.querySelector(".phone");
    let phoneImage = event.target.closest('[data-element="phone-image"]');

    console.log("phoneImage", phoneImage);

    if (!phoneImage) return;

    mainImg.src = phoneImage.src;

    // this._onPhoneSelected(phoneLink.dataset.phoneId);
  }

  _showPhoto(path) {
    let el = document.querySelector("phone");
    const mainPhoto = el.dataset("image1");
    this.el.addEventListener("click", event => this._onPhoneClick(event));
  }

  _render() {
    console.log(this);
    this._element.innerHTML = `
     <img class="phone" data-image src="img/phones/motorola-xoom-with-wi-fi.0.jpg">

    <button>Back</button>
    <button>Add to basket</button>


    <h1>${this._phone.name}</h1>

    <p>${this._phone.description}</p>

    <ul class="phone-thumbs">
      <li>
        <img data-element="phone-image" src="img/phones/motorola-xoom-with-wi-fi.0.jpg">
      </li>
      <li>
        <img data-element="phone-image" src="img/phones/motorola-xoom-with-wi-fi.1.jpg">
      </li>
      <li>
        <img data-element="phone-image" src="img/phones/motorola-xoom-with-wi-fi.2.jpg">
      </li>
      <li>
        <img data-element="phone-image" src="img/phones/motorola-xoom-with-wi-fi.3.jpg">
      </li>
      <li>
        <img data-element="phone-image" src="img/phones/motorola-xoom-with-wi-fi.4.jpg">
      </li>
      <li>
        <img data-element="phone-image" src="img/phones/motorola-xoom-with-wi-fi.5.jpg">
      </li>
    </ul>
    `;
  }
}
