import { MessageView, NegotiationsView } from '../views/index';
import { Negotiation, Negotiations } from '../models/index';

export class NegotiationController {
  private _inputDate: JQuery;
  private _inputQuantity: JQuery;
  private _inputValue: JQuery;
  private _negotiations = new Negotiations();
  private _negotiationsView = new NegotiationsView('#negotiations');
  private _messageView = new MessageView('#message');

  constructor() {
    this._inputDate = $('#date');
    this._inputQuantity = $('#quantity');
    this._inputValue = $('#value');
  }

  add(e: Event) {
    e.preventDefault();
    const negotiation = new Negotiation(
      new Date(this._inputDate.val().toString().replace(/-/g, ',')),
      parseInt(this._inputQuantity.val().toString()),
      parseFloat(this._inputValue.val().toString())
    );

    this._negotiations.add(negotiation);
    this._negotiationsView.update(this._negotiations);
    this._messageView.update('Negotiation added successfully!');
  }
}
