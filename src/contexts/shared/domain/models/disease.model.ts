import { Model, } from './model';
import { DiseaseSeverity, } from '../enums/disease-severity.enum';

/**
 * 
 * @interface Disease - Entidad que permite generar distintos tipos de 
 * enfermedades.
 * 
 */
export interface Disease extends Model {
  name: string;
  description: string;
  severity: DiseaseSeverity;
  treatment: string; // TODO: relacionar una entidad?
}