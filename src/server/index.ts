import './setup';

import { SHARED_CONSTANTS } from '@shared/constants';

mp.events.add('playerChat', (player, text) => {
	const playerPosition = player.position;
	const vehicle = mp.vehicles.new(text, playerPosition);

	player.putIntoVehicle(vehicle, 0);
});

mp.events.add('playerJoin', (player) => {
	player.setHairColor(0xff0033, 0xff0001);
	player.setFaceFeature(0, 1.0);
	player.setFaceFeature(1, 1.0);
	player.setFaceFeature(11, -1.0);

});

mp.events.add('playerReady', (player) => {
	console.log(`${player.name} is ready!`);

	player.customProperty = 1;

	player.customMethod = () => {
		console.log('customMethod called.');
	};

	player.customMethod();
});

mp.events.addCommand('hp', (player) => {
	player.health = 100;
});

mp.events.addCommand('kill', (player) => {
	player.health = 0;
});

mp.events.addCommand('spawnveh', (player) => {
	const playerPosition = player.position;

	mp.vehicles.new(0x46699F47, playerPosition);
});

mp.events.add('playerDeath', (player) => {
	const vector = new mp.Vector3(-425.517, 1123.620, 325.8544);

	player.spawn(vector);
	player.health = 100;
});

mp.events.addCommand('q', (player) => {
	player.kick('Has salido del servidor');
});