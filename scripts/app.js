//main js doc

"use strict";

var username = "Omar"; 
var age = 30;
var isHungry = true;



var usernames = []; //vs. var usernames = new Array();
//you cannot preallocate an array in js b/c its dynamci


//elements of array
usernames[0] = "Mike";
console.log(usernames[0]);
usernames[1] = "Rich";
usernames[2] = "Anju";
usernames[3] = "Margot";

//you can overwrite an array element
usernames[0] = "Tom";

console.log(usernames[0]);

usernames[5] = "another user";

console.log(usernames);
console.log(usernames[4]);

//push method adds an element to the bototm of arry
usernames.push("Omar");
console.log("my name pushed: " + usernames[6]);

//pop's the last element from the bottom of array 

usernames.pop();
console.log("my name pulled/poped: " + usernames[6]);

//notice how console log converts array into a string! 
