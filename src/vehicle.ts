import { Identity } from './identity';

export class Vehicle{
    wheels: number;
    brand: string;
    id: number = 1234;

    constructor(wheels: number, brand: string) {
        this.wheels = wheels;
        this.brand = brand;
    }
    
    sleep(milliseconds: number): Promise<void> {
        return new Promise<void>((resolve) => {
          setTimeout(() => {
            resolve();
          }, milliseconds);
        });
      }
    
    

    getWheels()  {
        console.log(`The vehicle has ${this.wheels} wheels`);
    }

    getInfo() {
        console.log(`The vehicle is a ${this.brand}, with ${this.wheels} wheels.`);
    }

    simulatLatency(): Promise<void> {
            return this.sleep(100);
    }

    async add(): Promise<number> {
        return this.simulatLatency().then(() => {
            return Promise.resolve(this.id);
        });
    }

    async update(): Promise<void> {
        return this.simulatLatency().then(() => {
            return Promise.resolve();
        })
    }

    async delete(): Promise<void> {
        return this.simulatLatency().then(() => {
            return Promise.resolve();
        })
    }

    async get(): Promise<Vehicle> {
        return this.simulatLatency().then(() => {
            return Promise.resolve(this);
        })
    }

}