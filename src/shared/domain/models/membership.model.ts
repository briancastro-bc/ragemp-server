import { Model, } from './model';

/**
 * 
 * @interface Membership - membresias del servidor, servirá para monetizar
 * y será lo que los jugadores compren para obtener beneficios adicionales.
 * 
 */
export interface Membership extends Model {
  name: string;
  codeName: string;
  description: string;
}