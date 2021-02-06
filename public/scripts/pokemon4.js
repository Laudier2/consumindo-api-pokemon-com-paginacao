const container_pokemon =
document.getElementById('div1')
const listar_Number = 120;

const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    grouns: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    paison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
}

const main_types = Object.keys(colors)

const fetchPokemon = async () => {
    for(let r = 91; r <= listar_Number; r++){
        await lsitaPokemon(r)
    }
}

const lsitaPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const req = await res.json()
    createPokemonCard(req)
}

fetchPokemon()

function createPokemonCard(req){
    const pokemonEL = document.createElement('p')
    pokemonEL.classList.add('req')

    const poke_types = req.types.map(el => el.type.name)
    const type = main_types.find(
        type => poke_types.indexOf(type) > -1
    )
    const name = req.name[0].toUpperCase() + req.name.slice(1)

    const color = colors[type]

    pokemonEL.style.backgroundColor = color
    
    const pokeInnerHTML = `
        <div class="img-container"> 
            <img src="https://pokeres.bastionbot.org/images/pokemon/${req.id}.png">
        </div>
        <div class="info">
            <span class="number">#${req.id.toString().padStart(3, '0')}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span>
        </div>
    `
    pokemonEL.innerHTML = pokeInnerHTML;
    container_pokemon.appendChild(pokemonEL)

}

function teste(){
    
}
