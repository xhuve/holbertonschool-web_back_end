export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string' || typeof (length) !== 'number') {
      return;
    }
    if (!Array.isArray(students) || !students.every((student) => typeof (student) === 'string')) {
      return;
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
}
