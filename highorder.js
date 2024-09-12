//map,reduce,filter,foreach,sort and find
//what are high order functions>>this are functions that receives
//functions as arguments//parameters or they return other functioons

//map
//map is a high order function that applies a given function to each element of an array and returns anew array
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map((num) => num * 2);
console.log(doubleNumbers);

//filter>>used to remove repetition or you can filter data based on the requirements
const newNumbers = [1, 2, 4, 5, 6, 7, 8, 9];
const evenNumbers = newNumbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

//reduce>>takes four parameters by general(inital value,current index,current value and the accumulator)
//reduce is a high order function that applies a reducer function to each element of an array and returns a single output value(accumulated result)
const newNumber = [1, 3, 4, 5, 6, 7, 8];
const sumOfNumbers = newNumber.reduce((acc, curr) => acc + curr, 0);
console.log(sumOfNumbers);

//foreach>>shorter brother to the for loop
//foreach is a high order function that applies a given function to each element of an array by loopong through the itmes in the array
const newNumbers2 = [1, 2, 3, 4, 5, 6, 7, 8];
 newNumbers2.forEach((num)=>console.log(num*4));

 //sort>>sort is a high order function that sorts the elements of an array in place and returns
const oldNumbers=[2,5,6,1,8,3,4,5,2]
const sort=oldNumbers.sort((a,b)=>a-b)//sorts in ascending order ,if it was descending it would have been b-a
console.log(sort);

//find
//find is a high order function that returns the first element in the array that satisfies the provided testing or conditonconst
const oldNumbers2=[123,45,68,45,34,6,34,5,3]
const found=oldNumbers2.find(num=>num<10)
console.log(found);