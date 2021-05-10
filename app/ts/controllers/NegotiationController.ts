import { MessageView, NegotiationsView } from '../views/index';
import { Negotiation, Negotiations } from '../models/index';
import { DOMInject, throttle } from '../helpers/decorators/index';
import { NegotiationService } from '../services/index';

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
  @DOMInject('#date')
  private _inputDate: JQuery;

  @DOMInject('#quantity')
  private _inputQuantity: JQuery;

  @DOMInject('#value')
  private _inputValue: JQuery;
  private _negotiations = new Negotiations();
  private _negotiationsView = new NegotiationsView('#negotiations', true);
  private _messageView = new MessageView('#message', true);

  private _negotiationService = new NegotiationService();

  constructor() {
    this._negotiationsView.update(this._negotiations);
  }

  @throttle()
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

  @throttle()
  importData() {
    function isOk(res: Response) {
      if (!res.ok) throw new Error(res.statusText);
      return res;
    }

    this._negotiationService.importFromApi(isOk).then((data) => {
      data.forEach((n) => {
        this._negotiations.add(n);
        this._negotiationsView.update(this._negotiations);
      });
    });
  }
}
