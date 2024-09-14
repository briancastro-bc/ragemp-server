import 'reflect-metadata';

import container from '@ioc';

import events from './events';

const browser = mp.browsers.new('package://cef/index.html');

function handleEvents(): void {
	for (const event of events) {
		mp.events.add(event.name, event.handler)
	}
}

async function startup(): Promise<void> {
	mp.gui.chat.show(false);
	mp.gui.chat.activate(false);

	mp.gui.cursor.show(true, true);

	const path = `location.hash = "#login"`;
	browser.execute(path);

	console.log('asda');
	mp.game.ui.displayRadar(false);
}

startup()
	.then(() => handleEvents())
	.catch(err => console.error(err));

// mp.events.add('playerJoin', (player) => {
// 	console.log('player joined');
// 	const playerName = player.getName();
// 	const random = container.resolve<string>('random');
// 	console.log('random', random);

// 	mp.gui.chat.push(`Se ha unido un nuevo usuario ${playerName}`);
// });

// mp.events.add('playerReady', () => {
// 	mp.console.logInfo(`${mp.players.local.name} is ready!`);

// 	mp.players.local.customProperty = 1;
// 	mp.console.logInfo(`customProperty: ${mp.players.local.customProperty}`);

// 	mp.players.local.customMethod = () => {
// 		mp.console.logInfo(`customMethod called.`);
// 	};

// 	mp.players.local.customMethod();
// });
