//program that takes sprrd input and awards demerit points for every select increase in speed.

//loads a module that imports a function that prompts the user to input a speedvalue.
const prompt = require("prompt-sync")();

//function that awards demerit point depending on speed increase by a driver
function speed_detector(speed){

    //validate input as a number.

    if (isNaN(speed) || speed < 0) {
        console.log("Please enter a valid speed.");
        return;
    }

    const speedLimit = 70;// declare the speed limit.
    const DemeritPointPerKm = 5; // the value of speed increase beyond the speed limit at which demerit points will be issued.

    if(speed <= speedLimit){
        console.log("OK");
    }
    //Demerit Points Calculation.
    else{
        let points = Math.floor((speed - speedLimit) / DemeritPointPerKm);
        if (points > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${points}`);
        }

    }
}

//prompt user to enter current driver's speed and the value is converted to a floating point number.
let speed = parseFloat(prompt("Enter the driver current speed : "));

//call on the speed-detector function.
speed_detector(speed);