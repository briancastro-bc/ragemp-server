import { BaseEvent, } from '@shared/domain/types/base-event.type';

import { 
  incomingConnection, 
} from './connection/incoming-connection';

import { playerJoin, } from './player/player-join';

type CustomServerEvent = 'custom';

type ServerEventName = IServerEvents;

type ServerEvent = BaseEvent<keyof ServerEventName | CustomServerEvent> & object;

const events: Array<ServerEvent> = [
  {
    name: 'incomingConnection',
    handler: async (...args) => await incomingConnection(...args as [string, string, string, string, string]),
  },
  {
    name: 'playerJoin',
    handler: async (player) => await playerJoin(player as PlayerMp),
  },
];

export default events;