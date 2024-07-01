//program to generate student grades
// grade ranges are as follows :A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40 and lie between 0 and 100.

//loads a module that imports a function that prompts the user to input a value.
const prompt = require("prompt-sync")();

//function to generate student marks
function grade(Studentmarks){
    if (Studentmarks >= 0 && Studentmarks <= 100){
        if (Studentmarks <= 100 && Studentmarks >=79){
            return console.log("Congratulations!! You scored the grade : A")
        }
        else if(Studentmarks >= 60 && Studentmarks < 79){
            return console.log("Congratulations!! You scored the grade : B")
        }
        else if(Studentmarks >= 49 && Studentmarks < 59){
            return console.log("Congratulations!! You scored the grade : C")
        }
        else if(Studentmarks >= 40 && Studentmarks < 49){
            return console.log("Congratulations!! You scored the grade : D")
        }
        else if(Studentmarks < 40){
            return console.log("Congratulations!! You scored the grade : E")
        }
    }
}
var  Studentmarks = prompt("What was the student's score ");
grade(Studentmarks);