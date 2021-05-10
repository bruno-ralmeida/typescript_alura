import { ToPrint } from './ToPrint';
import { Equality } from './Equality';

export class Negotiation implements ToPrint, Equality<Negotiation> {
  constructor(
    readonly date: Date,
    readonly quantity: number,
    readonly value: number
  ) {}

  get volume(): number {
    return this.quantity * this.value;
  }

  toText(): void {
    console.log(`
      Date: ${this.date}
      Quantity: ${this.quantity}
      Value: ${this.value}
      Volume: ${this.volume}
    `);
  }

  isEqual(negotiation: Negotiation): boolean {
    return (
      this.date.getDate == negotiation.date.getDate &&
      this.date.getMonth == negotiation.date.getMonth &&
      this.date.getFullYear == negotiation.date.getFullYear
    );
  }
}
