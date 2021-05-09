import { MessageView, NegotiationsView } from '../views/index';
import { Negotiation, Negotiations } from '../models/index';

enum Weekday {
  SUNDAY = 0,
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
}

export class NegotiationController {
  private _inputDate: JQuery;
  private _inputQuantity: JQuery;
  private _inputValue: JQuery;
  private _negotiations = new Negotiations();
  private _negotiationsView = new NegotiationsView('#negotiations', true);
  private _messageView = new MessageView('#message', true);

  constructor() {
    this._inputDate = $('#date');
    this._inputQuantity = $('#quantity');
    this._inputValue = $('#value');
  }

  add(e: Event) {
    e.preventDefault();
    let date = new Date(this._inputDate.val().toString().replace(/-/g, ','));

    if (date.getDay() == Weekday.SUNDAY || date.getDay() == Weekday.SATURDAY) {
      this._messageView.update('Negotiations on weekdays only');
      return;
    }
    const negotiation = new Negotiation(
      date,
      parseInt(this._inputQuantity.val().toString()),
      parseFloat(this._inputValue.val().toString())
    );

    this._negotiations.add(negotiation);
    this._negotiationsView.update(this._negotiations);
    this._messageView.update('Negotiation added successfully!');
  }
}
