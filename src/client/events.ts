import { BaseEvent, } from '@shared/domain/types/base-event.type';

type CustomClientEvent = 'playerLogin'
| 'triggerLogin';

type ClientEventName = IClientEvents;

type ClientEvent = BaseEvent<keyof ClientEventName | CustomClientEvent> & object;

const events: Array<ClientEvent> = [
  {
    name: 'playerJoin',
    async handler(player) {
      // TODO: do something
    },
  },
];

export default events;