import { Form } from "./Form";
import { List } from "./List";

function loadData() {
  return [];
}

export class App {
  constructor(el) {
    this.el = el;
    this.entries = loadData();
    this.list = new CardList(el);
    this.form = new Form(el, entry => this.handleSubmit(entry));

    this.update();
  }

  update() {
    this.list.update(this.getFilteredEntries());
  }

  handleFilterSelect(filter) {
    this.selectedFilter = filter;
    this.update();
  }

  handleSubmit(entry) {
    this.entries = [...this.entries, entry];
    this.update();
  }
}
