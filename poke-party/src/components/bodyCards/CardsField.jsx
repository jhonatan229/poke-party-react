import "./CardsFields.css"

function CardsField({pokemons}){
    const pokemonElements = []
    for (let i = 0; i < pokemons.length; i++) {
        pokemonElements.push(<li key={i} id="card">{pokemons[i].name}</li>);
    }

    return(
        <div >
            <ul id="cards">{pokemonElements}</ul>
        </div>
    )   
}

export default CardsField