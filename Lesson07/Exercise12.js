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

const vehicle = new Vehicle('bicycle', 15, 100);
vehicle.start();
vehicle.buy();

class Car extends Vehicle {
    constructor(name, speed, cost, tankSize) {
        super(name, speed, cost);
        this.tankSize = tankSize;
    }
    start() {
        console.log('Driving car, at ' + this.speed + 'km/h');
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

const car = new Car('Toyota Corolla', 120, 5000);
const plane = new Plane('Boeing 737', 1000, 26000000);
const rocket = new Rocket('Saturn V', 9920, 6000000000);

car.start();
plane.start();
rocket.start();

const car2 = new Car('Toyota Corolla 2', 120, 5000, 2000);
console.log(car2.tankSize); // 2000
