export class Card {
  constructor(target, data) {
    this.target = target;
    this.data = data;

    this.render();
  }

  render() {
    const el = document.createElement("section");
    const { title, description, category } = this.data;

    el.className = "card";
    el.innerHTML = `
        <div>${title}</div>
        <div>${description}</div>
        <div>${category}</div>
      `;

    this.target.appendChild(el);
  }
}
