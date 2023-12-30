class Storage {
  #items;
  constructor(arg) {
    this.#items = arg;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    const indexElementDelete = this.#items.indexOf(itemToRemove);
    this.#items.splice(indexElementDelete, 1);
  }
}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems());
storage.addItem("Droid");
console.log(storage.getItems());
storage.removeItem("Prolonger");
console.log(storage.getItems());
