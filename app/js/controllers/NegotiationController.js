class NegotiationController {
    constructor() {
        this._negotiations = new Negotiations();
        this._negotiationsView = new NegotiationsView('#negotiations');
        this._messageView = new MessageView('#message');
        this._inputDate = $('#date');
        this._inputQuantity = $('#quantity');
        this._inputValue = $('#value');
    }
    add(e) {
        e.preventDefault();
        const negotiation = new Negotiation(new Date(this._inputDate.val().toString().replace(/-/g, ',')), parseInt(this._inputQuantity.val().toString()), parseFloat(this._inputValue.val().toString()));
        this._negotiations.add(negotiation);
        this._negotiationsView.update(this._negotiations);
        this._messageView.update('Negotiation added successfully!');
    }
}
