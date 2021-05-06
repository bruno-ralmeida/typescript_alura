class NegotiationController {
    constructor() {
        this._negotiations = new Negotiations();
        this._negotiationsView = new NegotiationsView('#negotiations');
        this._messageView = new MessageView('#message');
        this._inputDate = document.querySelector('#date');
        this._inputQuantity = document.querySelector('#quantity');
        this._inputValue = document.querySelector('#value');
    }
    add(e) {
        e.preventDefault();
        const negotiation = new Negotiation(new Date(this._inputDate.value.replace(/-/g, ',')), parseInt(this._inputQuantity.value), parseFloat(this._inputValue.value));
        this._negotiations.add(negotiation);
        this._negotiationsView.update(this._negotiations);
        this._messageView.update('Negotiation added successfully!');
    }
}
