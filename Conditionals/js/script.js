/**
 Name: Lisa Townsend
 Date: 05/16/2015
 Class: Scalable Data Infrastructures # 01
 Title: Conditionals
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
*/

/**
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
*/

/**
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
*/

/**
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
 */

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


