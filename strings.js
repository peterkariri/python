let myStrin =
  "this is a WONDERFUL day ahead what WOULD they do faith faith faith faith faith faith i am a web developer ,qqqq";

/* //transforming a string to lowercase
console.log(myStrin.length);//uotput length of a string 

console.log(myStrin.toLowerCase());//transforms to lowercase
console.log(myStrin.toUpperCase());//transfroms to uppercase

//splitting a string
//has a delimiter("") that denotes by how much space you want to split your string then it also transform the words into an array of word
console.log(myStrin.split(' '));
//accessing single characters using the char method(at various indexes)
console.log(myStrin.charAt(26));
console.log(myStrin.charAt(25)); */

//accessing the index of an element using the indexoff
/* console.log(myStrin.indexOf("faith")); */ /* >>10 */

//if you have a storage with many redundadancies /repetitions you can use the last indexof method to check when the last element repeats itself
/* console.log(myStrin.lastIndexOf("faith"));

//checking if an element is contained in the string (we use the includes method which returns a boolean )
console.log(myStrin.toUpperCase().includes("DEVELOPER")); *///dropdown categories,selections
//slice
//has two parameters the startpoint of the slice and the endpoint of the slice 
/* console.log(myStrin.slice(10,20));
console.log(myStrin.slice(10));//if there is no end point we return the slice start and the rest of the string 
console.log(myStrin.slice(-10,20)); */

//concat
//has two parameters the first string and the second string
const string1="hello jumping jacks"
const string2="hello wonder kid"
//using the concat method
console.log(string1.concat(string2)); //output hello jumping jackshello wonder kid

/* template literal string *///string interpolation
console.log(`${string1} ${string2}`);

//assignment>>split a sentence string,reverse it and rejoin it together
//join method>>to rejoin strings back together (example you have split the string and reversed it now you want 
//to retung a reversed string as the same word or sentence)





