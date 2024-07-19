export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string' || typeof (length) !== 'number') {
      throw Error;
    }
    if (!Array.isArray(students) || !students.every((student) => typeof (student) === 'string')) {
      throw Error;
    }

    this._name = name;
    this._length = length;
    this._students = students;
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

  set name(name) {
    if (typeof (name) === 'string') throw Error;
    this._name = name;
  }

  set length(length) {
    if (typeof (length) === 'number') throw Error;
    this._length = length;
  }

  set students(students) {
    if (Array.isArray(students) || students.every((student) => typeof (student) === 'string')) throw Error;
    this._students = students;
  }
}
