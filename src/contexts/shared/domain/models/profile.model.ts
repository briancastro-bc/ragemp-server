import { Model, } from './model';
import { Sex, } from '../enums/sex.enum';

/**
 * 
 * @interface Profile - En la entidad perfil se guardaran todos los datos de los personajes,
 * tanto aspecto fisico como detalles biologicos, informacion de interpretacion, etc.
 * 
 */
export interface Profile extends Model {
  age: number;
  sex: Sex;
  height: number;
  weight: number;
  nacionality: string;
  biography: string;
  physicalDescription: string;
  psicologicalDescription: string;
}