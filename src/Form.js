export class Form {
  constructor(target, onSubmit) {
    this.target = target;

    this.render();
  }

  render() {
    const el = document.createElement("form");
    el.className = "form";
    el.innerHTML = get("#form").innerHTML;

    this.titleElement = get('[name="title"]', el);
    this.descriptionElement = get('[name="description"]', el);
    this.categoryElement = get('[name="category"]');

    el.addEventListener("submit", event => {
      this.formSubmit();
    });

    this.target.appendChild(el);
  }

  formSubmit() {
    const title = this.titleElement.value;
    const description = this.descriptionElement.value;
    const category = this.categoryElement.value;

    this.onSubmit({ title, description, category });
  }
}
