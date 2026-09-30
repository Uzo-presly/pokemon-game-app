/*we are going to practice fetching of data from an API.
The fetch function is used to make HTTP requests and retrieve data from a server including but not limited to JSON-styled data, images, and other resources.
the fetch function simplifies asynchronous operations. It is used for interracting with APIs to retrieve and send data asynchronously over the web.
fetch has two main parameters: the URL of the resource to fetch, and an optional configuration object.
The default is GET to retrieve data. Other methods include POST to submit data, PUT to update data, and DELETE to remove data.
For this exercise, we will focus on using the GET method via fetch to retrieve data from an API.
we shall be passing the URL of the API endpoint we want to fetch data from to our fetch function.
For this demo we shall fetch some pokemon data from the PokeAPI!
Pokémon is a popular Japanese media franchise centered on fictional creatures with special powers that humans catch, train, and battle against each other.
The name is a short form of the Japanese words for "Pocket Monsters". Satoshi Tajiri created the concept in 1996, starting as a pair of role-playing games for the Nintendo Game Boy. Since then, it has grown into one of the highest-grossing media franchises in history.
Core Concepts and Media
• The Creatures: There are 1,025 different species of Pokémon. They have different types—like water, fire, or grass—with unique strengths and weaknesses. The most famous mascot is an electric mouse named Pikachu.
• The Goal: Human characters, called Pokémon Trainers, catch creatures using small round tools called Pokéballs. They train them to grow stronger and battle other trainers to win badges and titles.
• The Franchise: Beyond the main video game series, Pokémon includes an ongoing television show (anime), movies, a massive trading card game, mobile apps like Pokémon GO, and endless toys and merchandise.
*/
//fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//for the time being, we shall console.log the response we get from the API to see what it looks like- because the body contains the data we want to work with, we will use the .json() method to parse the response body as JSON. This method returns a promise that resolves with the result of parsing the body text as JSON.
  /*
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(response => console.log(response))
  .catch(error => console.error('Error fetching data:', error));

 
  fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));
  

   fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(response => response.arrayBuffer())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));


    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(response => response.json())
  .then(data => console.log(data.types[0].type.name))
  .catch(error => console.error('Error fetching data:', error));

  

      fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(response => response.json())
  .then(data => console.log(data.name))
  .catch(error => console.error('Error fetching data:', error));
  


      fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));

  As at the time of this writing, spongebob is not a pokemon, so we will get an error when we try to fetch data for spongebob. Let's see  console logs, when we try to fetch data for spongebob from the PokeAPI.
  

      fetch('https://pokeapi.co/api/v2/pokemon/spongebob')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));
  
  we are going to introduce a throw error message for our exercise

fetch('https://pokeapi.co/api/v2/pokemon/spongebob')
    .then(response => {
        if (!response.ok){ throw new Error("could not fetch resource");
        }
        return response.json();
    })
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));
*/

  fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(response => {
        if (!response.ok){ throw new Error("could not fetch resource");
        }
        return response.json();
    })
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));