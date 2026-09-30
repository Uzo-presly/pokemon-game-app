
/*


fetchData();
async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("could not fetch resource");
        }
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}
    Since our app is working, we do not need to check logs of console any more. therefore we shall remove console.log and in place of it create a constant at that position and feed it with the informaion  nested in the constant named 'data', and request the front default image (Sprite as it is called)
    After which we shall get our image element as identification of pokemon's sprite
*/

fetchData();
async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("could not fetch resource");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        //next we shall acess the css property of the image and change its display to a block
        imgElement.style.display = "block";
        // now we should be able to get the image of whatever pokewmon we search for 
        //like mewtwo, pikachu,  bulbasaur, Typhlosion charizard etc

    }
    catch(error){
        console.error(error);
    }
}


