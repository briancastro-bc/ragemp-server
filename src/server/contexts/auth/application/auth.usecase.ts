import { validate, } from 'class-validator';
import { inject, injectable, } from 'inversify';

import { UsefulService, } from '@shared/domain/services/useful.service';
import { UserRepository, } from '@server/shared/domain/repositories/user.repository';
import { BlacklistRepository, } from '@server/shared/domain/repositories/blacklist.repository';

import { AuthPort, } from './ports/auth.port';
import { ConnectionDTO, } from './dtos/connection.dto';

@injectable()
export class AuthUsecase implements AuthPort {
  constructor(
    @inject('UsefulService') private readonly usefulService: UsefulService,
    @inject('UserRepository') private readonly userRepository: UserRepository,
    @inject('BlacklistRepository') private readonly blacklistRepository: BlacklistRepository,
  ) {}

  async verifyUserBanStatus(player: PlayerMp): Promise<void> {
    let user = await this.userRepository.findByIp(player.ip);
    if (!user) user = await this.userRepository.findByUsername(player.name);

    if (!user) return;

    const userBlacklist = await this.blacklistRepository.findByUser(user);
    if (!userBlacklist) return;

    const {
      time,
      reason,
      permanent,
      active,
    } = userBlacklist;

    if (!active) return;

    if (permanent || !time) return player.kick(reason);

    const now = new Date();
    const remainingBanTime = new Date(time);

    if (this.usefulService.hasDatePassed(remainingBanTime, now))
      return player.kick(`Te faltan ${(now.getTime() - remainingBanTime.getTime() / 1000)} minutos restantes de bloqueo.`);

    const unban = this.blacklistRepository.unBanByUsername(user.username);
    if (!unban)
      return player.kick(`Algo salio mal, no pudimos quitarte el ban`);
  }

  async incomingConnection(connection: ConnectionDTO): Promise<void> {
    const errors = await validate(connection);
    if (errors && errors.length > 0) return;

    const {
      ip,
    } = connection;

    const userByIp = await this.userRepository.findByIp(ip);
    if (!userByIp) return;

    const userBlacklist = await this.blacklistRepository.findByUser(userByIp);
    if (!userBlacklist) return;
  }
}