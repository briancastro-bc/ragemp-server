import { Model, } from './model';
import { Character, } from './character.model';

/**
 * 
 * @interface Spawn - La entidad spawn representa las zonas donde podrá spawn cada personaje
 * que tenga el jugador, el cual podrá establecer varias zonas de spawn.
 * 
 */
export interface Spawn extends Model {
  name: string;
  description?: string | null;
  positionX: number;
  positionY: number;
  positionZ: number;
  active?: boolean | null;
  character: Character;
}