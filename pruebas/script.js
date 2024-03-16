const nombrePokemon = document.getElementById("nombrePokemon");
const imagenPokemon = document.getElementById("imagenPokemon");
const btnBuscarPokemon = document.getElementById("btnBuscarPokemon");

function buscarPokemonPorNombre (){
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon.value}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            imagenPokemon.src = data.sprites.front_default;
        })
        .catch((err) => console.log(err))
}

btnBuscarPokemon.addEventListener("click", buscarPokemonPorNombre);