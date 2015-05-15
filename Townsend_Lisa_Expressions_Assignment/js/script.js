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

//Added together hours worked, hours in school and hours spent sleeping a day together. Used casting because workHours, schoolHours and hours Sleep are not values, so when we add the plus symbol it thinks we are using concatenation instead of addition.
var hoursLeftOver = Number(workHours) + Number(schoolHours) + Number(hoursSleep);