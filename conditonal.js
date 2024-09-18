//control structures allow you to dictate the flow of your code by making decisions ,repeating actions ,until the reuslt or endpoint is satisfied

//main types of controll strucutures are loop[s,conditional statements and exception handling]

/* conditional statements 
 
1.if statement:executes the block of code if condition is true 

*/ let age=18
if(age>=18){
    console.log("wow you are an adult");
} 

//if --(condition)....else
//executes one block of code if a condition is true else it returns the default value in the else block
let sage=17.9
if(sage>=18){
    console.log("wow you are an adult");
}
else{
    console.log("you are a minor");
}

//if ...condition ..else if .... else if .....(as many else if as you want ) ....else(default value)

let age = 16;
if (age >= 18) {
    console.log("You are an adult.");
} else if (age >= 13) {
    console.log("You are a teenager.");
} else {
    console.log("You are a child.");
}
//switch statement 
//evaluates an expression or condition based on mathing case values 
//program toswitch in between days 
let day=5;
switch(day){//switch case block
    case 1:
        console.log("monday");
        break;//terminates a switch case by looping out of the switch block to the initial state else continue (gets out of the loop)
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    default:
        console.log("invalid day");

}
//assignment //continue statement 


////looops 
//for loop >>for keyword ,initializer,renge,increment >>separated using semicolon
for (let i=0;i<6;i++){
    //consitions to be looped 
    //a for loop repeats a block of code a specified number of times ,up until what is in the range is complete 
}

//while loop 
//repeats a block of code as long as the specified condition  is true(initialization, while keyword,condition)
//if you dont terminate a while loop it may run permanenlty up until the ram is full ,we terminate a while loop using an increment (i++)
/* let i=3;
while(i<5){
    console.log(i);
    i++;
}
 */
//do ...while()its similar to the while but it guarantess that the code block are executed at least once 

let i=0;
do{
    console.log(i);
    i++

}
while (i<5)

//for ...in ..loops
//loops thtouhg properties of object 
let person={name:"winnie" ,age:23};
for (let key in person ){
    console.log(key+" " +person[key]);
}

