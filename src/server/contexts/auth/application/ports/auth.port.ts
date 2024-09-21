import { ConnectionDTO, } from '../dtos/connection.dto';

export interface AuthPort {
  verifyUserBanStatus(player: PlayerMp): Promise<void>;
  incomingConnection(connection: ConnectionDTO): Promise<void>;
}