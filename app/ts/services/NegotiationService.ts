import { Negotiation, PartialNegotiation } from '../models/index';

export class NegotiationService {
  importFromApi(handler: handlerFunction): Promise<Negotiation[]> {
    return fetch('http://localhost:8080/dados')
      .then((res) => handler(res))
      .then((res) => res.json())
      .then((data: PartialNegotiation[]) =>
        data.map((n) => new Negotiation(new Date(), n.vezes, n.montante))
      );
  }
}

export interface handlerFunction {
  (res: Response): Response;
}
