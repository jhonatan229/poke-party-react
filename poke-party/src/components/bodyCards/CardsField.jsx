import "./CardsFields.css"

function CardsField({ pokemons }) {
    const pokemonElements = [];

    for (let i = 0; i < pokemons.length; i++) {
        const pokeTypes = [] 
        for (let index = 0; index < pokemons[i].types.length; index++) {
            pokeTypes.push(
                <li key={index}>
                    {pokemons[i].types[index].type.name}
                </li>
            );
        }

        pokemonElements.push(
            <li key={i}>
                <div id="card">
                    <div id="title">
                        {pokemons[i].name}
                    </div>
                    <div id="pokeImg">
                        <img src={pokemons[i].image} alt={pokemons[i].name} />
                    </div>
                    <div id="pokeType">
                        <ul id="types">
                            {pokeTypes}
                        </ul>
                    </div>
                </div>
            </li>
        );
    }

    return (
        <div >
            <ul id="cards">{pokemonElements}</ul>
        </div>
    )
}

export default CardsField