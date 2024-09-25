function displayData(data) {
  const container = document.getElementById("displayData"); //attaining land

  const itemDiv = document.createElement("div"); //used to create an element
  itemDiv.className = "item"; //used to add a class to the element
  /* itemDiv.classList.add('item')..used to add many classes or a list of classes that eenable looping */
  itemDiv.innerHTML = `

    <h1>${data.title} </h1>
    <h6>${data.message}</h6>
    `;
  container.appendChild(itemDiv); //joining the item div to the html container
}

const myData = {
  title: "hello sharon",
  message: "hello world welcome to programming",
};
displayData(myData);

//fetch api >>GET(RETRIVE DATA) ,PUT(UPDATE),POST(SENDING DATA ), DELETE(TO REMOVE),
//USES HTTPS METHODS TO ACCESS INFORMATION
//it has two paramaeters ((url),{object/position})
//a fetch operation will always  conclude either  a true or a false
//it uses asynchronous code to run get and execute
//it is a promise based operation
//will check on promises

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((response) => response.json())
   .then(data=> data.json)
     .catch((error) => console.log(error));

  /*    try to create a div that will contain the pokemon 
     //container 
     create an image tag with empty src atribute 
     fecth information from the  pokemon api using the fetch method and the .then 
     in js \..create a function that when called creates the duv and displays the pokemon//input type search that when a user searches for a pokemon it displays the image  */
