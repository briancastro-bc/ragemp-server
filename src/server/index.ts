import 'reflect-metadata';

import { config, } from 'dotenv';

import { container, } from '@server/ioc/core';
import { DatabaseProvider, } from '@server/shared/domain/providers/database.provider';

import events from '@server/events';

config({
	path: '.env'
});

function handleEvents(): void {
	for (const event of events) {
		mp.events.add(event.name, event.handler);
	}
}

async function initializeGamemode(): Promise<void> {
	mp.events.delayInitialization = true;

	const datasource = container.get<DatabaseProvider>('DatabaseProvider');
	await datasource.connect();
}

initializeGamemode()
	.then(() => {
		mp.events.delayInitialization = false;

		handleEvents();
	})
	.catch(err => console.error(err));