import { ToPrint } from './ToPrint';
import { Negotiation } from './Negotiation';
import { Equality } from './Equality';

export class Negotiations implements ToPrint, Equality<Negotiations> {
  private _negotiations: Negotiation[] = [];

  add(negotiation: Negotiation): void {
    this._negotiations.push(negotiation);
  }

  list(): Negotiation[] {
    return ([] as Negotiation[]).concat(this._negotiations);
  }

  toText(): void {
    console.log(JSON.stringify(this._negotiations));
  }

  isEqual(n: Negotiations): boolean {
    return JSON.stringify(this._negotiations) == JSON.stringify(n.list);
  }
}
