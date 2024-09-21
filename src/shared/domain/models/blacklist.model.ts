import { Model, } from './model';
import { User, } from './user.model';

export interface Blacklist extends Model {
  user: User;
  reason: string;
  permanent?: boolean | null;
  time?: number | null;
  active?: boolean | null;
}