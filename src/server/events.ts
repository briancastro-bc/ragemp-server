import { BaseEvent, } from '@shared/domain/types/base-event.type';

type CustomServerEvent = 'custom';

type ServerEventName = IServerEvents;

type ServerEvent = BaseEvent<keyof ServerEventName | CustomServerEvent> & object;

const events: Array<ServerEvent> = [
  {
    name: 'playerJoin',
    async handler(player) {
      // TODO: do something
    },
  },
];

export default events;