import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/';

export const getPokemons = async () => {
  try {
    const response = await axios.get(`${API_URL}pokemon/`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar Pokémon:", error);
    throw error;
  }
};
export const getPokemonsByName = async (pokemonName) => {
  try {
    const response = await axios.get(`${API_URL}pokemon/${pokemonName}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar Pokémon:", error);
    throw error;
  }
};