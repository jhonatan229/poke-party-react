import { getPokemons, getPokemonsByName } from "../api/PokemonAPI";

async function getAllPokemons() {

    try {
        const result = await getPokemons();
        return getInfoPokemons(result.results);
        
    } catch (err) {
        console.error("Erro ao buscar pokémons:", err);
        throw err; // Importante lançar o erro para quem chamar a função lidar com ele
    }
}

async function getInfoPokemons(pokemons){
    const pokemonList = [];
    for (let index = 0; index < pokemons.length; index++) {
        try{
            const pokemon = await getPokemonsByName(pokemons[index].name);
            const poke = {
                name: pokemon.name,
                image: pokemon.sprites.front_default,
                types: pokemon.types
            }
            pokemonList.push(poke);
        }
        catch (err){
            console.log("erro ao buscar pokemon pelo nome");
        }
    }
    console.log(pokemonList)
    return pokemonList;
}


export default getAllPokemons;