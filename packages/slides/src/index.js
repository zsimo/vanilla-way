import { HTMLElement, define } from "my-custom-elements-loader";
import { deck } from "./deck";
import { startExample2, startExample3 } from "./example";

class App extends HTMLElement {
  static get is() {
    return "my-presentation";
  }

  connectedCallback() {
    deck(this);

    //Examples
    startExample2(this);
    startExample3(this);
  }
}

define(App.is, App);
