/**
 Name: Lisa Townsend
 Date: 05/16/2015
 Class: Scalable Data Infrastructures # 01
 Title: Conditionals Screencasts
 */


/**
//Conditional Logic


//If a child is old enough to ride a roller coaster

//Boolean variable

var oldEnough = true;


//Plan out the conditional statement

//If the child is old enough, print to the console "you can ride!"

if(oldEnough){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}

//Conditional Logic- Relational Expressions

//Kids over 48 inches are able to ride roller coaster, but under 48 inches, they're not.

//Store kid height in variable

var kidHeight = 50; //height in inches
var minHeight = 48;

//If the child is old enough, print to the console "You can ride!"
//If the kid is over 48 inches in height. If the kidHeight is > (greater than) comparing variable to value
//Compare variable with a variable kidHeight > minHeight

if(kidHeight > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}

//Conditional Logic- With an Expression

//Kids over 48 inches are able to ride roller coaster, but under 48 inches, they're not.

//Store kid height in variable

var kidHeight = 47; //height in inches
var minHeight = 48;
var sneakerLift = 2;

//If the child is old enough, print to the console "You can ride!"
//If the kid is over 48 inches in height. If the kidHeight is > (greater than) comparing variable to value


if(kidHeight + sneakerLift > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}



//Conditional Logic- If and Else

var kidHeight = 52;
var minHeight = 48;


//If the child is old enough, print to the console "you can ride!"
//If the kis is over 48 inches in height
if(kidHeight > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}else{
    //code performed if condition is false
    console.log("Sorry kid, you've got some growing to do first!");
}


//Conditional Logic- Else If

var kidHeight = 52;
var minHeight = 48;
var wParentHeight = 45; //The height of the kid with the parent

//If the child is old enough, print to the console "you can ride!"
//If the kid is over 48 inches in height
if(kidHeight > minHeight){
    //You can ride!
    console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight ){
    //You can ride with a parent present
    console.log("You can ride, but only with a parent present.");
}else{
    //Sorry you have growing to do
    console.log("Sorry kid, you've got some growing to do first!");
}




//Conditional Logic- Logical Operators


//AND Operator

var budget = 300;
var iPhonePrice = 199.99;
var payCheck = 200;

//If the price of the phone is less that our budget AND if our paycheck is over 300
//Using && both IPhone price and budget have to be true. Budget has to be greater than IPhone price AND pay check has to be greater than 300
if(iPhonePrice < budget && payCheck > 300){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!!");
}


//OR operator

var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

//If the price of the phone is less that our budget AND if our paycheck is over 300

if(iPhonePrice < budget || wonLottery){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!!");
}
*/


//Ternary Operators

//Conditional Statement
var gpa = 48;

//If the gpa is over the min 2.0 score, the student can graduate
/*if(gpa > 2.0){
    console.log("You can graduate!");

}else{
    console.log("GPA is too low");
}*/

//Shortened ternary

//Condition ? do if true : do if false
(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA is too low");

//Second example
//Long form
var age = 11;
var book;

//If the child is under 10, they get Green Eggs and Ham, otherwise they get The Time Machine
/*if(age < 10){
    book = "Green Eggs and Ham";

}else{
    book = "The Time Machine";
}
console.log(book);
*/

//Short form (Ternary)
book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);
