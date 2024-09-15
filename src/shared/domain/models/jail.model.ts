import { Model, } from './model';
import { Character, } from './character.model';

/**
 * 
 * @interface Jail - Permite saber cuantas sanciones ha tenido el usuario,
 * aparte de contener los datos de las mismas.
 * 
 */
export interface Jail extends Model {
  type: string;
  time: number;
  reason: string;
  active: boolean;
  admin: Character;
  offender: Character;
}