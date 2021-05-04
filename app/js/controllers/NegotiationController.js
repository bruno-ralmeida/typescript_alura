class NegotiationController {
  constructor() {
    this._inputDate = document.querySelector('#date');
    this._inputQuantity = document.querySelector('#quantity');
    this._inputValue = document.querySelector('#value');
  }
  add(e) {
    e.preventDefault();
    const negotiation = new Negotiation(
      new Date(this._inputDate.value.replace(/-/g, ',')),
      parseInt(this._inputQuantity.value),
      parseFloat(this._inputValue.value)
    );
    console.log(negotiation);
  }
}
