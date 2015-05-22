/**
 Name: Lisa Townsend
 Class: SDI 01
 Date: 05/21/15
 Title: Conditionals Assignment
 */

//Singing competition being held at Coren Hall Solos and choirs are welcomed. Ticket price for entry is $20 plus tax for solos and $30 plus tax for choirs. Both solos will be given different room numbers for auditions which will also be at Coren Hall this Friday.

alert("Register today for singing competition at Coren Hall! Only Soloists and choirs qualify.");

//prompting user for name
var userName = prompt("What is your name or choir's name?");

//Prompt validation
if(userName ===""){

 //re-prompt the user if blank
 userName = prompt("Please do not leave blank!\n How many do you have in your group?");
}

//prompting user for number of people in singing group
var numberInGroup = prompt("How many people will be singing in your group?");

//Prompt Validation
if(numberInGroup ==="" || Number(numberInGroup) === 0){

 //re-prompt the user if blank or zero
 numberInGroup = prompt("Please do not leave blank or use zero or less!\n How many do you have in your group?");
}

//prompting for users email for confirmation
var emailAddress = prompt("Please type in your e-mail address so that we can confirm your registration. Thank you!");

//Prompt Validation
if(emailAddress ===""){

 //re-prompt the user if blank
 emailAddress = prompt("Please do not leave blank, type in your e-mail address so that we can confirm your registration. Thank you!");
}