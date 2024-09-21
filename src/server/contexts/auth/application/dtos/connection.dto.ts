import {
  IsIP,
  IsString,
} from 'class-validator';

export class ConnectionDTO {
  @IsIP()
  ip: string;
  @IsString()
  serial: string;
  @IsString()
  rgscName: string;
  rgscId: string;
  @IsString()
  gameType: string;

  constructor(
    ip: string, 
    serial: string, 
    rgscName: string, 
    rgscId: string, 
    gameType: string
  ) {
    this.ip = ip;
    this.serial = serial;
    this.rgscName = rgscName;
    this.rgscId = rgscId;
    this.gameType = gameType; 
  }
}