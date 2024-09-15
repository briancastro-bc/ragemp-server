import { container, } from '@client/ioc/core';
import { BaseEvent, } from '@shared/domain/types/base-event.type';

import { Auth, } from '@client/login/application/ports/auth.port';

type CustomClientEvent = 'playerLogin'
| 'triggerLogin';

type ClientEventName = IClientEvents;

type ClientEvent = BaseEvent<keyof ClientEventName | CustomClientEvent> & object;

const events: Array<ClientEvent> = [
  {
    name: 'render',
    async handler() {
      mp.console.logInfo('render');
    },
  },
  {
    name: 'playerReady',
    async handler() {
      mp.console.logInfo('playerReady');

      const authUsecase = container.get<Auth>('Auth');
      authUsecase.openLoginRoute();
    }
  },
  {
    name: 'browserCreated',
    async handler() {
      mp.console.logInfo('browser created');
    },
  },
  {
    name: 'browserDomReady',
    async handler() {
      mp.console.logInfo('browser dom ready');
      const camera = {
        from: new mp.Vector3(-392.0152587890625, -2195.9765625, 204.3353729248047), 
        to: new mp.Vector3(-126.2790298461914, -1274.2332763671875, 173.96531677246094), 
        rot: 132.75473022460938,
      }

      const authUsecase = container.get<Auth>('Auth');
      authUsecase.createLoginScene(camera.from, camera.to, camera.rot);

      mp.gui.cursor.show(true, true);
      mp.game.ui.displayRadar(false);
    },
  },
  {
    name: 'playerJoin',
    async handler() {
      console.log('player joined');
      mp.console.logInfo('player joined');
    },
  },
];

export default events;