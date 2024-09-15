import 'reflect-metadata';

import events from '@client/events';

function handleEvents(): void {
	for (const event of events) {
		mp.events.add(event.name, event.handler)
	}
}

async function startup(): Promise<void> {
	mp.console.clear();

	mp.nametags.enabled = false;

	mp.gui.chat.show(false);
	mp.gui.chat.activate(false);
}

startup()
	.then(() => handleEvents())
	.catch(err => console.error(err));
