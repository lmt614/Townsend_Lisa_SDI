/**
 Lisa Townsend
 5/26/2015
 Section # 01
 Assignment Name: Screencast: Functions
 */

/**
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
*/


/**
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
*/


//Functions - Parameters and Arguments

calcArea(30, 20); //added arguments- information that we are going to send to the function

function calcArea(w, h){ //w=30, h=20
    //parenthesis above bins that will contain information- storage containers
    var area = w * h;
    console.log(area);
}

//Second Example of Parameters and Arguments
