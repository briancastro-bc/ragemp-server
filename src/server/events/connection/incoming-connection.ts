import { container, } from '@server/ioc/core';
import { AuthPort, } from '@server/contexts/auth/application/ports/auth.port';
import { ConnectionDTO, } from '@server/contexts/auth/application/dtos/connection.dto';

export async function incomingConnection(
  ip: string,
  serial: string,
  rgscName: string,
  rgscId: string,
  gameType: string,
): Promise<void> {
  console.log('NEW CONNECTION FROM: ', `${ip} | ${serial} | ${rgscName} | ${rgscId} | ${gameType}`);
  const connection = new ConnectionDTO(
    ip,
    serial,
    rgscName,
    rgscId,
    gameType,
  );

  const usecase = container.get<AuthPort>('AuthUsecase');
  return await usecase.incomingConnection(connection) as void;
}