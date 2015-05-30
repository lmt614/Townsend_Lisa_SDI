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



//Find area of the room to find out how much carpet is needed

//Function for finding area of the room
var findArea = function(length,width){ //length, width parameters for storing
 //code that function will run
 var roomArea = length * width; //length * width gives us the area of the room
 return roomArea; //return value for getting information out of the function

}
var a = findArea(lengthOfRoom, widthOfRoom); //function call with arguments
alert("The area of your room is " +a+ " square feet."); //alerting the user what the area of their room
