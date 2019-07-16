const fs = require('fs').promises;
const EventEmitter = require('events');

class FileWatcher extends EventEmitter {
    constructor(file, delay) {
        super();
        this.timeModified = undefined;
        this.file = file;
        this.delay = delay;
        this.watchTimer = undefined;
    }
    startWatch() {
        if (!this.watchTimer) {
            this.watchTimer = setInterval(() => {
                fs.stat(this.file).then((stat) => {
                    if (this.timeModified !== stat.mtime.toString()) {
                        fs.readFile(this.file, 'utf-8').then((content) => {
                            this.emit('change', content);
                        }).catch((error) => {
                            this.emit('error', error);
                        });
                        this.timeModified = stat.mtime.toString();
                    }
                }).catch((error) => {
                    this.emit('error', error);
                });
            }, this.delay);
        }
    }
    stopWatch() {
        if (this.watchTimer) {
            clearInterval(this.watchTimer);
            this.watchTimer = undefined;
        }
    }
}

const watcher = new FileWatcher('test.txt', 1000);

watcher.on('error', console.error);
watcher.on('change', (change) => {
    console.log('new change:', change);
});
watcher.startWatch();