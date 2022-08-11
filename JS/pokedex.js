const form2 = document.getElementById('poke_dex')

form2.addEventListener('submit', (event) => {
    event.preventDefault();
    const pokemonName = event.path[0][0].value
    loadData(pokemonName)
})

const getPokemon = async (pokemonName) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    const data = await res.json()
    return data
};

const loadData = async (pokemonName) => {
    const data = await getPokemon(pokemonName)
    const poke = [data]
    poke.map(addPoke)
}

const addPoke = async (poke) => {
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${poke.sprites.front_default}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${poke.name}</h5>
        <ul>
            <li>Ability ${poke.abilities[0].ability.name}</li>
            <li>Base HP ${poke.stats[0].base_stat}</li>
            <li>Base Experience ${poke.base_experience}</li>
        </ul>
    </div>
  </div>
    `
    document.body.append(div)
}







// --- .then way -------
// document.querySelector(`#search`).addEventListener('click', getPokemon);

// function getPokemon(e) {
//     const name = document.querySelector("#pokemonName").value
//     fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => response.json()).then((data) => {
//         document.querySelector(".pokemonBox").innerHTML = `
//         <div>
//         <img src="${data.sprites.front_default}" alt="${data.name}">
//         <div class="pokemonInfo">
//             <h1>${data.name}</h1>
//         <ul>
//             <li>Base HP ${data.stats[0].base_stat}</li>
//             <li>Ability ${data.abilities[0].ability.name}</li>
//             <li>Base Experience ${data.base_experience}</li>
//         </ul>
//         </div>
//         </div>
//         `;
//     }).catch((err) => {
//         console.log('Poke ERROR',err);
//     })
//     e.preventDefault();
// }
// --- .then way -------
