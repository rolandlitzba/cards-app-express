import { Card } from "./Card";

export class CardList {
  constructor(target) {
    this.target = target;
    this.render();
  }

  renderSingleEntry(data) {
    new Card(this.el, data);
  }

  render() {
    const el = document.createElement("form");
    el.className = "form";
    this.el = el;

    this.target.appendChild(el);
  }

  update(data) {
    this.el.innerHTML = "";
    data.forEach(entry => this.renderSingleEntry(entry));
  }
}
