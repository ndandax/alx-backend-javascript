export default class Currency {
  constructor(code, name) {
    if (typeof code === 'string') {
      this._code = code;
    }
    if (typeof name === 'string') {
      this._name = name;
    }
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    }
  }

  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
