import 'dotenv/config';
import 'reflect-metadata';

import container from '@ioc';

async function initializeGamemode(): Promise<void> {
	mp.events.delayInitialization = true;


}

initializeGamemode()
	.then(_ => mp.events.delayInitialization = false)
	.catch(err => console.error(err));