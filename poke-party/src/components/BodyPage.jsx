import { useEffect } from "react";
import CardsField from "./bodyCards/CardsField.jsx";

function BodyPage() {
    let pokemons = [
        { name: "squirtle" },
        { name: "bulba" },
        { name: "charmander" },
        { name: "charmander" },
        { name: "charmander" },
        { name: "charmander" },
        { name: "charmander" },
        { name: "charmander" },
        { name: "charmander" },
        { name: "charmander" },
        { name: "charmander" },
    ];
    useEffect(() => {


        return;
    })

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