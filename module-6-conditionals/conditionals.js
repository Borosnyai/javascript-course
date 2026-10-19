 // if statement
 /*
 var age = prompt("Enter your age: ");

if(age > 18){
    // runs if the condition is true
    console.log("Admission granted")

    
}else {
    // runs in every other case
    console.log("Not old enough")
}
*/
/**************************************************************************/
/*Else-If Statements*/
/*
var color = prompt("Enter a color (green, orange, red): ")
// always compare in lowercase
var lowerColorName = color.toLocaleLowerCase();

if(lowerColorName == "green"){
    alert("You may go");

}else if(lowerColorName == "orange"){
    alert("You may start moving or must brake");

}
else if(lowerColorName == "red"){
    alert("You must stop");
}else {
    alert("No valid traffic light color entered");
}
*/
/*******************************************************************************/
/* Extend the traffic light program with an HTML form */
function main(){

    var input = document.getElementById("inputColor")

    var color = input.value;
    // always compare in lowercase
    var lowerColorName = color.toLowerCase();

    if(lowerColorName == "green"){
        alert("You may go");

    }else if(lowerColorName == "orange"){
        alert("You may start moving or must brake");

    }
    else if(lowerColorName == "red"){
        alert("You must stop");
    }else {
        alert("No valid traffic light color entered");
    }
}
/******************************************************************************* */
/* Excursus: uploading source code and projects with Git */






