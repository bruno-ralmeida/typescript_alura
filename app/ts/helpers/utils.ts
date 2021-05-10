import { ToPrint } from '../models/index';

export function toPrintConsole(...n: ToPrint[]) {
  n.forEach((n) => n.toText());
}
