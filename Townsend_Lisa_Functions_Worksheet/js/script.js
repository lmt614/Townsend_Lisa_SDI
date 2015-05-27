/**
 Lisa Townsend
 5/27/2015
 Section # 01
 Assignment Name: Functions Worksheet
 */

//alert("Test Connection");


/**
//Problem 1 - Circumference

//Calculate the circumference of a circle

//circumferenceOfCircle holds variable Radius

function circumferenceOfCircle(Radius){
    //code the function runs
    const pi = 3.14; //constant is pi
    var circumferenceOfCircle = 2 * 3.14 * Radius; //calculation and var that will store info
    console.log("The circumference of the circle is " +circumferenceOfCircle+ ".");
}

circumferenceOfCircle(7); //Function call

/*
Test result: Answer = 43.96 for the circumference of the circle
 */


//Problem 2 - Stung!


//It takes 8.666666667 bee stings per pound to kill an animal.

// Calculate how many bee stings are needed to kill an animal in a function

function numBeeStings(weight){
    //code the function runs
    var numBeeStings = 8.666666667 * weight;
    console.log("It takes " +numBeeStings+ " bee stings to kill this animal.");
}

numBeeStings(40); //Function call- a 40lb animal

/*
 Test result: Answer = 346.66666668 for number of bee stings to kill a 40lb animal
 */


