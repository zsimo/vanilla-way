import { define, HTMLElement } from "my-custom-elements-loader";
import { emit } from "./emit";

export class ToggleButton extends HTMLElement {
  static get is() {
    return 'toggle-button';
  }

  connectedCallback() {
    this.toggle = () => {
      this.active = !this.active;
      emit(this, `change`);
    };

    this.addEventListener('click', this.toggle);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.toggle);
  }
  
  set active(value) {
    this.classList.toggle('active', !!value);
  }

  get active() {
    return this.classList.contains('active');
  }
}

define(ToggleButton.is, ToggleButton);