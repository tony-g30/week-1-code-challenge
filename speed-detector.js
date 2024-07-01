//program that takes sprrd input and awards demerit points for every select increase in speed.

//loads a module that imports a function that prompts the user to input a speedvalue.
const prompt = require("prompt-sync")();

//function that awards point dependi9ng on speed increase by a driver
function speed_detector(speed){

    if(speed < 70 && speed >= 0){
        console.log("OK");
    }
    else{
        var s 

        for(s = 0;s >= speed;s++){
            console.log("Points: [s]");
        }

    }
}

var speed = prompt("Enter the driver current speed : ");

speed_detector(speed);