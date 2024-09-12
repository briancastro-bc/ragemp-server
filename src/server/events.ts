import { BaseEvent, } from '@shared/domain/types/base-event.type';

type ServerEventName = IServerEvents;

type ServerEvent = BaseEvent<keyof ServerEventName> & object;

const events: Array<ServerEvent> = [
  {
    name: 'playerJoin',
    async handler(player) {
      // TODO: do something
    }
  }
];

export default events;