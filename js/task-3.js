class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value;
  }
  padStart(str) {
    const newString = str.concat(this.#value);
    this.#value = newString;
  }
  padEnd(str) {
    const newEndString = this.#value.concat(str);
    this.#value = newEndString;
  }
  padBoth(str) {
    const newBothString = str.concat(this.#value).concat(str);
    this.#value = newBothString;
  }
}
const builder = new StringBuilder(".");
console.log(builder.getValue());
builder.padStart("^");
console.log(builder.getValue());
builder.padEnd("^");
console.log(builder.getValue());
builder.padBoth("=");
console.log(builder.getValue());
