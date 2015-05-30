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



//Convert feet to yards by dividing by 3
const ftInYd = 3; //there is 3 feet in 1 yard

//Function to convert feet to yards
var convertFt = function(feet,yards){ //function parameters feet,yards
 //Code that function will run
 var convertFtYd = feet / yards;
 return convertFtYd; //return the info to the main code
};

var ftYd = convertFt(a,ftInYd); //function call and arguments
alert("You need " +ftYd+ " yards of carpet."); //alert the user telling them the amount of carpet needed



//Find out price of carpet


//Total price without tax
const price = 15.99;
var fee = 3;

function totalPrice(feetYards, price, fee){ //function with parameters feetYards, price
 //Code that function will run
 var totalWithoutTax = (feetYards * price) - fee;
 return totalWithoutTax; //return value for getting information out of the function

}
var b = totalPrice(ftYd, price, fee); //function call with arguments
console.log("Your total price without tax is $" +b+ ". \nThis is including a $3.00 fee for processing."); //print to console for testing purpose


//Total price with tax

//Prompts and Validation

//Prompt user for name on the order
var name = prompt("What is the name for this order?");

//Validate prompt for name on the order
while(name ===""){

 //re-prompt the user if blank
 if (name === "") {
  name = prompt("Please do not leave blank!\n What is the name for this order?");
 }
}


//Prompt user for e-mail address
var emailAddress= prompt("What is your e-mail address for this order");

//Validate prompt for e-mail address
while(emailAddress ==="") {

 //re-prompt the user if blank
 if (emailAddress === "") {
  emailAddress = prompt("Please do not leave blank!\n What is the name for this order?");
 }
}



//Total Price with tax


const tax = .092;

//Total price with tax function
function priceWithTax(withoutTax, tax){
 //Code that function will run
 var totalWithTax = withoutTax * tax + Number(withoutTax);
 return totalWithTax; //return value for getting information out of the function

}
var c = priceWithTax(b, tax, price); //function call with arguments

//Print to console the result
console.log("Thank you " +name+ "! \nYour total price for the amount of carpet you need is $" +c+ " and a confirmation e-mail has been sent to " +emailAddress+ ". \nThank you for your order!");

//Alert the user of the total price and that their confirmation email has been sent
alert("Thank you " +name+ "! \nYour total price for the amount of carpet you need is $" +c+ " and a confirmation e-mail has been sent to " +emailAddress+ ". \nThank you for your order!");


/*
 Test- 1
 I typed in 2 for the length of my room and 3 for the width and it told me the area of my room was 6 square feet and that I need 2 yards of carpet for the area of my room.
 Next I typed in Smith for the order name and smith123@gmail.com for the email address.
 The result it gave: Thank you Smith! Your total price for the amount of carpet you need is $31.646160000000002 and a confirmation e-mail has been sent to smith123@gmail.com. Thank you for your order!
 */