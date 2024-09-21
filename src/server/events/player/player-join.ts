import { container, } from '@server/ioc/core';
import { AuthPort, } from '@server/contexts/auth/application/ports/auth.port';

export async function playerJoin(player: PlayerMp): Promise<void> {
  const usecase = container.get<AuthPort>('AuthUsecase');
  await usecase.verifyUserBanStatus(player);

  player.setVariable('loggedin', false);
}