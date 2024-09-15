import 'dotenv/config';
import 'reflect-metadata';

async function initializeGamemode(): Promise<void> {
	mp.events.delayInitialization = true;
}

initializeGamemode()
	.then(() => mp.events.delayInitialization = false)
	.catch(err => console.error(err));