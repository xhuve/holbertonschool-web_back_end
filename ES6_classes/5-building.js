export default class Building {
  constructor(sqrt) {
    this._sqrt = sqrt;
  }

  get sqrt() {
    return this._sqrt;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
