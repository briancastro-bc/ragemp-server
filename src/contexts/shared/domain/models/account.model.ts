import { BaseModel, } from './model';

/**
 * 
 * @interface Account - Complemento de la entidad Usuario, se almacenan datos de
 * configuración y otros datos del juego importantes.
 * 
 */
export interface Account extends BaseModel {
  coins?: number | null; // moneda virtual.
  roleLevel?: number | null;
  hoursPlayed?: number | null;
  emailVerified?: boolean | null;
  phoneNumberVerified?: boolean | null;
  banned: boolean;
  twoFactor?: boolean | null;
  twoFactorSecret?: string | null;
}