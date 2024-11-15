import { useEffect, useState } from "react";
import CardsField from "./bodyCards/CardsField.jsx";
import getAllPokemons from "../services/PolemonService.jsx";

function BodyPage() {
    const [pokemons, setPokemons] = useState([]);
    useEffect( () => {

        const fetchPokemons = async () => {
            try {
                const data = await getAllPokemons();
                setPokemons(data);
                console.log(pokemons)
            } catch (err) {
            }
        };

        fetchPokemons();

    }, [])

    return (
        <div class="BodyPage">
            <div id="filter">
                filters
            </div>
            <CardsField pokemons={pokemons}></CardsField>
        </div>
    )
}

export default BodyPage;