import { Model, } from './model';
import { Jail, } from './jail.model';
import { Phone, } from './phone.model';
import { Spawn, } from './spawn.model';
import { Group, } from './group.model';
import { Disease, } from './disease.model';
import { Profile, } from './profile.model';
import { Permission, } from './permission.model';

/**
 * 
 * @interface Character - Es la entidad relacionada directamente a los personajes del
 * jugador en cuestion.
 * 
 */
export interface Character extends Model {
  name: string;
  phone: Phone;
  health?: number | null;
  armor?: number | null;
  energyLevel: number | null; // estamina/energia
  thristLevel: number | null; // sed
  hungerLevel: number | null; // hambre
  diseases: Array<Disease> | null;
  money: number;
  byDefault?: boolean | null;
  profile: Profile;
  receivedJails: Array<Jail> | null;
  issuedJails: Array<Jail> | null;
  spawns: Array<Spawn>;
  groups: Array<Group>;
  permissions: Array<Permission>;
}