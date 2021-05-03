class Negociation {
  private _date: Date;
  private _quantity: number;
  private _value: number;

  constructor(date: Date, quantity: number, value: number) {
    this._date = date;
    this._quantity = quantity;
    this._value = value;
  }

  get date() {
    return this.date;
  }

  get quantity() {
    return this.quantity;
  }

  get value() {
    return this.value;
  }

  get volume() {
    return this._quantity * this._value;
  }
}
