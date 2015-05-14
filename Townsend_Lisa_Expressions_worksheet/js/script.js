/**
 Lisa Townsend
 5/13/2015
 Section # 01
 Assignment Name: Expressions Worksheet
 */

//Dog years

//Declared variable
var sparkysAge = prompt("Calculating your dogs human age in dog years. \nEnter age:");
//Dog years is the constant
const dogYears = 7;
//Take the constant 7 and multiply it by dogs age entered
var dogYearAge = sparkysAge * dogYears;
//Print out age entered and result in dog years
console.log("Sparky is " + sparkysAge + " human years old, which is " +  dogYearAge  + " in dog years.");


//Slice of Pie Part- 1

//Declared variable, slicesPerPizza and created prompt function with a string of text.
var slicesPerPizza = prompt("Calculating the number of slices eaten. \nEnter the amount of slices per pizza:");
//Declared variable number of peopleAtParty and created a prompt function with a string of text.
var peopleAtParty = prompt("Enter amount of people attending the party:");
//Declared variable, pizzasOrdered and created a prompt function with a string of text.
var pizzasOrdered = prompt("Enter the amount of pizza'\s ordered:");
//Declared variable, slicesPerPerson, multiplied that by number of pizzas ordered and divided by number of people at the party
var slicesPerPerson = slicesPerPizza * pizzasOrdered / peopleAtParty;
//Printed out How many pieces of pizza each person ate at the party
console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.");


//Slice of Pie Part- 2

//Reused variable from previous problem, slicesPerPizza and created prompt function with a string of text.
var slicesPerPizza = prompt("Calculating the number of slices eaten. \nEnter the amount of slices per pizza:");
//Reused variable number of peopleAtParty and created a prompt function with a string of text.
var peopleAtParty = prompt("Enter amount of people attending the party:");
//Reused variable, pizzasOrdered and created a prompt function with a string of text.
var pizzasOrdered = prompt("Enter the amount of pizza'\s ordered:");
//Reused variable, slicesPerPerson, multiplied that by number of pizzas ordered and used a modulo operator to get remainder
var slicesPerPerson = (slicesPerPizza * pizzasOrdered) % peopleAtParty;
//Printed out how many slices of pizza Sparky got to eat
console.log("Sparky got " + slicesPerPerson + " slices of pizza");

//Average Shopping Bill

//Declared variable and listed amounts for grocery totals in an array
var shoppingBill = [150, 200, 100, 80, 175];
//Added totals together accessing it through index numbers.
var total = shoppingBill[0] + shoppingBill[1] + shoppingBill[2] + shoppingBill[3] + shoppingBill[4];
//Divided total by number of items listed which is 5
var totalAverage = total / 5;
//Printed out average of shopping bill
console.log("You have spent a total of $" + total + " on groceries over 5 weeks. That is an average of $" + totalAverage + " per week");



