class Vehicle {
    constructor(name, speed, cost) {
        this.name = name;
        this.speed = speed;
        this.cost = cost;
    }
    start() {
        console.log('Starting vehicle, ' + this.name + ' at ' + this.speed + 'km/h');
    }
    buy() {
        console.log('Buying for ' + this.cost);
    }
}

function printStat() {
    console.log('The car has a tanksize of ', this.tankSize);
}

class Car extends Vehicle {
    constructor(name, speed, cost, tankSize) {
        super(name, speed, cost);
        this.tankSize = tankSize;
    }
    start() {
        console.log('Driving car, at ' + this.speed + 'km/h');
        printStat.bind(this)();
    }
}

class Plane extends Vehicle {
    start() {
        console.log('Flying plane, at ' + this.speed + 'km/h');
    }
}
class Rocket extends Vehicle {
    start() {
        console.log('Flying rocket to the moon, at ' + this.speed + 'km/h');
    }
}

const car = new Car('Toyota Corolla', 120, 5000, 2000);
car.start();
