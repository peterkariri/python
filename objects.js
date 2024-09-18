//objects  are key value pairs where they have key/property and the value 
//a key is a unique identifier>>name,age,
//a value is what describes the key
//objects allow you to create and manage data effectively 

//defining an object 
//object literal syntax ::nameof object={ key value properties }
//propeerties in objects are separated by commas
let person={
    name:"Peter",
    age:30,
    occupation:"Software Engineer",
    music:"pop "
}
//using the object constructor:new Object ()
//separed by semicolon
let person2=new Object();
person2.name='Faith';
person2.age=25;
person2.occupation="developer"


//accessing objects>>this can be done in two ways using the dot notation and using the bracket notation 
//dot notation>>dot notation is used to access the properties of an object its simple 
//bracket notation>>bracket notation is used to access the properties of an object when the property is unique 

//uding the dot notation
console.log(`${person.name} ${person.occupation} `)
//using the bracket notation
//put your values in quotes
//objectname[property you want]
console.log(person["age"]);
console.log(`${person['name']} ${person['occupation']}`)

let vehicle={
    brand:"Toyota",
    model:"Camry",
    year:"2021",
    hello: function(){
        console.log("hello world");
    }
    
}

console.log(vehicle.hello());

//complex objects

const book={
    title:"Javascript Essesntials",
    author1:{
          firstName:"Winnie",
          lastName:"Atieno",
          passion:"coding"
    },
    publishYear:2027,
    genre:["programmng","technology",'innovation',"engineering"],
    readingBook: function(){
        console.log("I am reading a book  called" + " " + this.title +"by"+ " " + this.author1.firstName +" "+ this.author1.lastName);
    }
};
book.readingBook()
