export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }

    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }

    if (Array.isArray(value) && value.every((student) => typeof student === 'string')) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    }
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    }
  }

  set students(value) {
    if (Array.isArray(value) && value.every((student) => typeof student === 'string')) {
      this._students = value;
    }
  }
}
