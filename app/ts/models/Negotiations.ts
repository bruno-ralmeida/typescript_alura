class Negotiations {
  private _negotiations: Negotiation[] = [];

  add(negotiation: Negotiation): void {
    this._negotiations.push(negotiation);
  }

  list(): Negotiation[] {
    return [].concat(this._negotiations);
  }
}
