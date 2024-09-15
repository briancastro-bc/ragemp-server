import { Model, } from './model';
import { Permission, } from './permission.model';

/**
 * 
 * @interface Group - Los grupos definen un conjunto de permisos, sirve
 * para definir los accesos a facciones, administracion, etc.
 * 
 */
export interface Group extends Model {
  name: string;
  codeName: string;
  description: string;
  permissions: Array<Permission>;
}