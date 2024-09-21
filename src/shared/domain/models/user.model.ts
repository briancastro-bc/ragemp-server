import { Model, } from './model';
import { Account, } from './account.model';
import { Character, } from './character.model';
import { Blacklist, } from './blacklist.model';
// import { Membership, } from './membership.model';

/**
 * 
 * @interface User - entidad principal, el nucleo de todas las relaciones.
 * 
 */
export interface User extends Model {
  email: string;
  password: string | null;
  username: string;
  ip: string;
  quizzApproved: boolean;
  quizzCorrectAnswers?: number | null;
  quizzIncorrectAnswers?: number | null;
  account: Account;
  blacklists: Array<Blacklist>;
  characters: Array<Character>;
}