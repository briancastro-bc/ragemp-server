import 'reflect-metadata';

import container from '@ioc';

mp.gui.chat.show(true);
mp.gui.chat.activate(false);

mp.events.add('playerJoin', (player) => {
	console.log('player joined');
	const playerName = player.getName();
	const random = container.resolve<string>('random');
	console.log('random', random);

	mp.gui.chat.push(`Se ha unido un nuevo usuario ${playerName}`);
});

mp.events.add('playerReady', () => {
	mp.console.logInfo(`${mp.players.local.name} is ready!`);

	mp.players.local.customProperty = 1;
	mp.console.logInfo(`customProperty: ${mp.players.local.customProperty}`);

	mp.players.local.customMethod = () => {
		mp.console.logInfo(`customMethod called.`);
	};

	mp.players.local.customMethod();
});
