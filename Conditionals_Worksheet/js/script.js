/**
 Name: Lisa Townsend
 Date: 05/19/2015
 Class: Scalable Data Infrastructures # 01
 Title: Conditionals TEST
 */

var carMPG = 22; //Car Miles per gallon
var gasGauge = 0.5; //Half a tank of gas in percent
var tankCapacity = 16; //Tank holds 16 gallons
const milesToGo = 200; //They have 200 miles until next gas station
var total = tankCapacity * gasGauge * carMPG;

// Yes the car can make it without stopping OR you have only X amount of gallons of gas fill up now

if(total > milesToGo){
    console.log("Yes, you can make it without stopping for gas!");
}else{
    console.log("You only have " +total+ " gallons of gas in your tank, better get gas now while you can!");
}

var usernameEntered = prompt("Enter username:");
var passwordEntered = prompt("Enter password:");
var correctUsername = "smith15";
var correctPassword = "Rad$21";
var incorrectUser;




//If username and password are correct
if(correctUsername === usernameEntered && passwordEntered === correctPassword){
    alert("Welcome, " +correctUsername+ " !");
    console.log("Welcome, " +correctUsername+ " !");

}else if (correctUsername != usernameEntered || correctPassword != passwordEntered){
alert("User not found. Try again.");
    console.log("User not found. Try again.");
}else{
    console.log("Password does not match our records.");
}

