import { injectable, } from 'inversify';

import { UsefulService, } from '@shared/domain/services/useful.service';

@injectable()
export class UsefulImplementationService implements UsefulService {
  randomNumber(min: number): number {
    const random = Math.floor(Math.random() * (min + 1));
    return random;
  }

  randomNumberBetween(
    min: number, 
    max: number
  ): number {
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
  }

  /**
   * @method hasDatePassed - Funcion que compara las fechas y define si A es mayor a B.
   * @param from - Fecha a comprar desde.
   * @param to - Fecha a comparar hasta.
   * @returns true o false en caso de que la fecha `from` sea mayor a `to`.
   */
  hasDatePassed(
    from: string | number | Date, 
    to: string | number | Date,
  ): boolean {
    if (typeof from === 'number' || typeof from === 'string')
      from = new Date(from);
    
    if (typeof to === 'number' || typeof to === 'string')
      to = new Date(to);

    return from.getTime() > to.getTime();
  }
}