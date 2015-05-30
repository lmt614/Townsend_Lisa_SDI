/**
 Lisa Townsend
 5/29/2015
 Section # 01
 Assignment Name: Functions Assignment
 */

//Selling carpet for 15.99 per sq yd. Prompting users for the length and width of their room, that needs carpet, to find the area and price of carpet.


//Alert user to explain what you are doing
alert("Need carpet? Tell us the length and width of the room and we will tell you how much it will cost.");

//Prompts and validations

//Prompt user for length of room to find area
var lengthOfRoom = prompt("What is the length of your room?");

//Validate lengthOfRoom prompt with a while loop
while(lengthOfRoom ==="" || isNaN(lengthOfRoom)) {

 //re-prompt the user if blank or else if length is not a number
 if (lengthOfRoom === "") {
  lengthOfRoom = prompt("Please do not leave blank!\n What is the length of your room?");
 } else if (isNaN(lengthOfRoom)) {
  lengthOfRoom = prompt("Please only use numbers! \n What is the length of your room?");
 }
}


//Prompt user for width of room to find area
var widthOfRoom = prompt("What is the width of your room?");


//Validate widthOfRoom prompt with a while loop
while(widthOfRoom ==="" || isNaN(widthOfRoom)){

 //re-prompt the user if blank or else if is not a number
 if (widthOfRoom === "") {
  widthOfRoom = prompt("Please do not leave blank!\n What is the width of your room?");
 }else if(isNaN(widthOfRoom)){
  widthOfRoom = prompt("Please only use numbers! \n What is the width of your room?");
 }
}