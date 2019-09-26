const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.emit('my-event', { value: 'event value' });

emitter.on('my-event', (value) => {
    console.log(value);
});
	
emitter.emit('my-event', { value: 'another value' });

emitter.on('my-event', (value) => {
    console.log('i am handling it again');
});
emitter.emit('my-event', { value: 'new value' });

function handleEvent(event) {
    console.log('i am handling event type: ', event.type);
}

emitter.on('event-with-type', handleEvent);

emitter.emit('event-with-type', { type: 'sync' });
emitter.removeListener('event-with-type', handleEvent);
emitter.emit('event-with-type', { type: 'sync2' });