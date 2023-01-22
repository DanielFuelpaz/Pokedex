const pokemonContainer = document.querySelector(".pokemon-container");
const spinner = document.querySelector("#spinner");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const input= document.querySelector('#searchPKM');
const buttonS=document.querySelector('#searchBtn')



let limit = 8;
let offset = 1;

buttonS.addEventListener("click",e=>{
    removeChildNodes(pokemonContainer)
    fetchPokemon(input.value);
   
})

previous.addEventListener("click", () => {
    if (offset != 1) {
        offset -= 9;
        removeChildNodes(pokemonContainer);
        fetchPokemons(offset, limit);
    }
});

next.addEventListener("click", () => {
    offset += 9;
    removeChildNodes(pokemonContainer);
    fetchPokemons(offset, limit);
});

async function fetchPokemon(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    const data = await res.json()
    createPokemon(data);
    spinner.style.display = "none";
}

async function fetchPokemons(offset, limit) {
    spinner.style.display = "block";
    for (let i = offset; i <= offset + limit; i++) {
        await fetchPokemon(i);
    }
}

function createPokemon(pokemon) {
    const flipCard = document.createElement("div");
    flipCard.classList.add("flip-card");

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    flipCard.appendChild(cardContainer);

    const card = document.createElement("div");
    card.classList.add("pokemon-block");

    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img-container");

    const sprite = document.createElement("img");
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement("p");
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = pokemon.name;

    const types = document.createElement('p');
    types.classList.add("types");
    types.textContent = pokemon.types;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);
    card.appendChild(PokemonTypes(pokemon.types));

    const cardBack = document.createElement("div");
    cardBack.classList.add("pokemon-block-back");

    cardBack.appendChild(progressBars(pokemon.stats));



    cardContainer.appendChild(card);
    cardContainer.appendChild(cardBack);

    pokemonContainer.appendChild(flipCard);
}

function colorType(typeN) {
    const typesColor = new Map([
        ["Acero", "background-color-steel"],
        ["Agua", "background-color-water"],
        ["Bicho", "background-color-bug"],
        ["Dragón", "background-color-dragon"],
        ["Eléctrico", "background-color-electric"],
        ["Fantasma", "background-color-ghost"],
        ["Fuego", "background-color-fire"],
        ["Hada", "background-color-fairy"],
        ["Hielo", "background-color-ice"],
        ["Lucha", "background-color-fighting"],
        ["Normal", "background-color-normal"],
        ["Planta", "background-color-grass"],
        ["Psíquico", "background-color-psychic"],
        ["Roca", "background-color-rock"],
        ["Siniestro", "background-color-dark"],
        ["Tierra", "background-color-ground"],
        ["Veneno", "background-color-poison"],
        ["Volador", "background-color-flying"]
    ]);
    if (typesColor.has(typeN)) {
        typeN = typesColor.get(typeN);
    }
    return typeN;
}

function PokemonTypes(types) {
    const typesContainer = document.createElement("div");
    typesContainer.classList.add("types-container");

    for (let i = 0; i < types.length; i++) {
        const type = types[i];
        const typeN = document.createElement("div");
        typeN.textContent = traducir(type.type.name);
        typeN.classList.add(colorType(typeN.textContent));
        typesContainer.appendChild(typeN)
    }
    return typesContainer;
}
function progressBars(stats) {
    const statsContainer = document.createElement("div");
    statsContainer.classList.add("stats-container");

    for (let i = 0; i < 3; i++) {
        const stat = stats[i];

        const statPercent = stat.base_stat / 2 + "%";
        const statContainer = document.createElement("stat-container");
        statContainer.classList.add("stat-container");

        const statName = document.createElement("p");
        statName.textContent = stat.stat.name;

        const progress = document.createElement("div");
        progress.classList.add("progress");

        const progressBar = document.createElement("div");
        progressBar.classList.add("progress-bar");
        progressBar.setAttribute("aria-valuenow", stat.base_stat);
        progressBar.setAttribute("aria-valuemin", 0);
        progressBar.setAttribute("aria-valuemax", 200);
        progressBar.style.width = statPercent;

        progressBar.textContent = stat.base_stat;

        progress.appendChild(progressBar);
        statContainer.appendChild(statName);
        statContainer.appendChild(progress);

        statsContainer.appendChild(statContainer);
    }

    return statsContainer;
}

function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function traducir(texto) {
    const types = new Map([
        ["steel", "Acero"],
        ["water", "Agua"],
        ["bug", "Bicho"],
        ["dragon", "Dragón"],
        ["electric", "Eléctrico"],
        ["ghost", "Fantasma"],
        ["fire", "Fuego"],
        ["fairy", "Hada"],
        ["ice", "Hielo"],
        ["fighting", "Lucha"],
        ["normal", "Normal"],
        ["grass", "Planta"],
        ["psychic", "Psíquico"],
        ["rock", "Roca"],
        ["dark", "Siniestro"],
        ["ground", "Tierra"],
        ["poison", "Veneno"],
        ["flying", "Volador"]
    ]);
    if (types.has(texto)) {
        texto = types.get(texto);
    }
    return texto;
}
/*fetchPokemons(offset, limit);*/