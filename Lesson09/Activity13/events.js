const EventEmitter = require('events');

class FireAlarm extends EventEmitter {
    constructor() {
        super();
        this.batteryLevel = 10;
    }
    test() {
        if (this.batteryLevel > 0) {
            this.batteryLevel -= 0.1;
            if (this.batteryLevel < 0.5) {
                this.emit('low battery');
            }
            return true;
        }
        return false;
    }
}

class House {
    constructor(numBedroom, numBathroom, numKitchen) {
        this.numBathroom = numBathroom;
        this.numBedroom = numBedroom;
        this.numKitchen = numKitchen;
        this.alarmListener = () => {
            console.log('alarm is raised');
        }
        this.lowBatteryListener = () => {
            console.log('alarm battery is low');
        }
    }
    addAlarm(alarm) {
        alarm.on('alarm', this.alarmListener);
        alarm.on('low battery', this.lowBatteryListener);
    }
    removeAlarm(alarm) {
        alarm.removeListener('alarm', this.alarmListener);
        alarm.removeListener('low battery', this.lowBatteryListener);
    }
}

const myHouse = new House(2, 2, 1);
const fireAlarm = new FireAlarm();

myHouse.addAlarm(fireAlarm);

for (let i = 0; i < 96; i++) {
    fireAlarm.test();
}

fireAlarm.emit('alarm');

myHouse.removeAlarm(fireAlarm);
fireAlarm.test();
fireAlarm.emit('alarm');
