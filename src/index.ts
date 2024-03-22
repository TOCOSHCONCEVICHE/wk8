import { Vehicle } from "./vehicle";

function sleep(milliseconds: number): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, milliseconds);
    });
  }

  console.log("Start");
sleep(2000).then(() => {
  console.log("After 2 seconds");
})

// Usage
const vehicle = new Vehicle(4, 'Toyota');

vehicle.add().then((id) => {
    console.log(`Added vehicle with ID: ${id}`);
});

vehicle.update().then(() => {
    console.log('Vehicle updated');
});

vehicle.delete().then(() => {
    console.log('Vehicle deleted');
});

vehicle.get().then((retrievedVehicle) => {
    console.log('Retrieved vehicle:', retrievedVehicle);
});
