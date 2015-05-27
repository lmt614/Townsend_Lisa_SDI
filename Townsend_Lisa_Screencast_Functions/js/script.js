/**
 Lisa Townsend
 5/26/2015
 Section # 01
 Assignment Name: Screencast: Functions
 */


//Functions -Basic Structure

function outptMsg(){
    console.log("Hello World");
}

//Second Example of a functions basic structure

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}

//Run code or invoke

calcArea();
calcArea();
calcArea();




//Functions - Variable Scope

var width = 5; //width outside the function

function calcArea(){
    var width = 20; //width inside the function
    var height = 30;
    var area = width * height;
    //console.log(area); //machine chooses width inside the function- scoped to calcArea
}

calcArea();
console.log(width); //machine chooses the width variable outside the function



//Functions - Parameters and Arguments

calcArea(30, 20); //added arguments- information that we are going to send to the function

function calcArea(w, h){ //w=30, h=20
    //parenthesis above bins that will contain information- storage containers
    var area = w * h;
    console.log(area);
}

//Second Example of Parameters and Arguments

function dogYears(age){
    //var age = 4; instead of using this here use in parameters
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + "years old.")
}

var age1 = 4;
dogYears(age1);
dogYears(5);


//Functions - Returning Values

var total = calcArea(30, 20);

function calcArea(w, h){
    var area = w * h;
    return area; //function spitting out the info now we need to store it
}
console.log(total);


//Functions - Functions vs Procedure

// This is a function
function calcAreaF(width, height) {
    var area = width * height;
    return area;
}

//This is a procedure
function calcAreaP(width, height){
    var area = width * height;
    console.log(area); //no return
}


//Functions - Anonymous Functions

//Basic setup
var functionName = function(){
    //code to run
}

functionName();


//Anonymous function with our calcArea example

var calcArea = function(width, height){
    //code function runs
    var area = width * height;
    return area;
}

var a = calcArea(20, 30);
console.log(a);