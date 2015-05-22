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
 
 //re-prompt the user
 userName = prompt("Please do not leave blank!\n How many do you have in your group?");
}