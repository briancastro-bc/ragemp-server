import { Model, } from './model';
import { Character, } from './character.model';
import { PhoneStyle, } from '../enums/phone.enum';

/**
 * 
 * @interface Phone - La entidad telefono tiene todo lo relacionado con
 * el celular del usuario, tal como contactos, etc.
 * 
 */
export interface Phone extends Model {
  name: string;
  style: PhoneStyle;
  number: string | null;
  balance?: number;
  contacts: Array<Character>; // TODO: pasarlo a una entidad contato?
  // calls?
  // messages?
}