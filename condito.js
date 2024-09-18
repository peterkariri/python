/* let age=17
if(age>=18){
    console.log("you are an adult  ");
} */
//only handles truthy value
//if .... else (ternary operator )
/* let jump=20

if(jump>=19){
    console.log("you can jump");//truthy 
}
else{
    console.log("you cannot jump");//default falsey 
} */

//nested if ...else if ....else
//we have a nested if else that encompes of many logics inside the nest

let jump = 20;

if (jump >= 22) {
  console.log("you can jump"); //truthy
} else if (jump >= 21) {
  console.log("hey faith you made it "); //truthy
} else if (jump == 20) {
  console.log("you better watch ut");
} else {
  console.log("you cannot jump"); //default falsey
}

//switch case statement>>it can be used to switch in between few case scenario
//it is used when we have many if else if else if else if else if else if else
let day = 6;
switch (day) {
  case 1:
    console.log("monday");
    break; //the break statement is used to terminate the loop or jump out of ht loop when the intended conditon has been attained
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;

  default:
    console.log("weekend");
}

// while statement
//it repeats a specified condition a certin number of specified times
/* let number = 3;
while (number >= 1) {
  console.log(number);
  number--;
}
 */
//for loop>>used to loop over a specified array or lst of elements
//for name <condition (initialization,lenthng specification increment /decrement)

let numberTen = [1, 2, 3, 4, 5, 6, 7, 8]
for (let i = 0; i<numberTen.length; i++) {
  console.log(numberTen[i]);
}
