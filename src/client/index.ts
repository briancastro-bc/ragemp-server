import { SHARED_CONSTANTS } from '@shared/constants';

mp.gui.chat.activate(true);

mp.events.add('playerJoin', (player) => {
	console.log('player joined');
	const playerName = player.getName();

	mp.gui.chat.push(`Se ha unido un nuevo usuario ${playerName}`);
});

mp.events.add('playerReady', () => {
	mp.console.logInfo(`${mp.players.local.name} is ready!`);
	mp.console.logInfo(SHARED_CONSTANTS.HELLO_WORLD);

	mp.players.local.customProperty = 1;
	mp.console.logInfo(`customProperty: ${mp.players.local.customProperty}`);

	mp.players.local.customMethod = () => {
		mp.console.logInfo(`customMethod called.`);
	};

	mp.players.local.customMethod();
});
