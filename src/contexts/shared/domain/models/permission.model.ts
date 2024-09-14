import { Model, } from './model';

/**
 * 
 * @interface Permission - Permisos que tienen los personajes de los usuarios 
 * en el servidor.
 * 
 */
export interface Permission extends Model {
  name: string;
  codeName: string;
  description: string;
}