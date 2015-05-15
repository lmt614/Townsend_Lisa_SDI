/**
 Name: Lisa Townsend
 Date: 05/14/2015
 Class: Scalable Data Infrastructures # 01
 Title: Expressions Assignment
 */

//Between work, school and sleep, how many hours left are there to exercise?

//Alerts, variables and prompts

//Alert user to let them know what it is we are trying to accomplish and what we need. They will then understand why we are asking them questions.
alert("In a 24 hour day, after work, school and sleeping, how many hours do you have left to exercise? \nLets find out!");

//Ask the user through a prompt how many hours they work in a day. Use a prompt so they can fill in a value.
var workHours = prompt("How many hours do you work a day?");

//Ask the user through a prompt how many hours they study in a day. Use a prompt so they can fill in a value.
var schoolHours = prompt("How many hours a day do you study?");

//Ask the user through a prompt how many hours they sleep in a day. Use a prompt so they can fill in a value.
var hoursSleep = prompt("How many hours do you sleep?");

//Used a constant instead of variable because 24 hours in a day doesn't change
const hoursInDay = 24;


//Calculations

//Addition

//Added together hours worked, hours in school and hours spent sleeping a day together. Used casting because workHours, schoolHours and hours Sleep are not values, so when we add the plus symbol it thinks we are using concatenation instead of addition.
var hoursLeftOver = Number(workHours) + Number(schoolHours) + Number(hoursSleep);

//Subtraction

//Subtracted hoursLeftOver, which would be the sum of workHours, schoolHours and hoursSleep, subtracted it from hoursInDay, which is 24.
var totalWorkout = hoursInDay - hoursLeftOver;


//Answer

//Console

//Printed out in a 24 hour day how much they had left after work, school and sleep to exercise.
console.log("In a " +hoursInDay+ " hour day, after " +workHours+ " hours of work, " +schoolHours+ " hours of school and " +hoursSleep+ " hours of sleep, there are "+totalWorkout+" hours left to exercise.");

//Alert

//Also used alert so the user could see and it wouldn't just appear in the console
alert("In a " +hoursInDay+ " hour day, after " +workHours+ " hours of work, " +schoolHours+ " hours of school and " +hoursSleep+ " hours of sleep, there are "+totalWorkout+" hours left to exercise.");



//Final message to users with array

//Array
var workOut = ["Run, Hike, Dance, Box"];

//Console

//Printed to console, final message to users
console.log("With "+totalWorkout+" hours left to exercise, Take time to stay fit: " +workOut+ " anything that keeps you active. \nThank you for taking time to use this calculator!");

//Alert

//Used alert so the user could see and it wouldn't just appear in the console
alert("With "+totalWorkout+" hours left to exercise, Take time to stay fit: " +workOut+ " anything that keeps you active. \nThank you for taking time to use this calculator!");


/*
 //Test Values

 //Test- 1

 I typed in 8 for how many hours I work a day.
 I typed in 3 for how many hours I study a day.
 I typed in 8 for how many hours I sleep.

 It said In a 24 hour day, after 8 hours of work, 3 hours of school and 8 hours of sleep, there are 5 hours left to exercise.

*/