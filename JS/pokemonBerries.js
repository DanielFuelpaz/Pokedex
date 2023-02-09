const berrieContainer = document.querySelector(".berrie-container");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const spinner = document.querySelector("#spinner");

let limit = 14;
let offset = 1;

previous.addEventListener("click", () => {
  if (offset != 1) {
    offset -= 15;
    removeChildNodes(berrieContainer);
    fetchBerrys(offset, limit);
  }
});

next.addEventListener("click", () => {
  offset += 15;
  removeChildNodes(berrieContainer);
  if(offset<=64){
    fetchBerrys(offset, limit);
  }
});


async function fetchBerry(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/berry/${id}/`);
  const data = await res.json();
  createBerrie(data)
  spinner.style.display = "none";
}

async function fetchBerrys(offset, limit) {
  spinner.style.display = "block";
  for (let i = offset; i <= offset + limit; i++) {
    await fetchBerry(i);
  }
}

function createBerrie(berrie) {
  const flipCard = document.createElement("div");
  flipCard.classList.add("flip-card");

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  flipCard.appendChild(cardContainer);

  const card = document.createElement("div");
  card.classList.add("berrie-block");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");

  const sprite = document.createElement("img");
  sprite.src = cargarImagenBaya(berrie.name);

  spriteContainer.appendChild(sprite);

  const number = document.createElement("p");
  number.textContent = `#${berrie.id.toString().padStart(2, 0)}`;

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = nombre(berrie.name);

  const growth_time = document.createElement("p");
  growth_time.classList.add("growth_time");
  growth_time.textContent = "Crecimiento: " + berrie.growth_time + "h x etapa";

  const firmness = document.createElement("p");
  firmness.classList.add("firmness");
  firmness.textContent = "Dureza: " + dureza(berrie.firmness.name);

  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);
  card.appendChild(growth_time);

  const cardBack = document.createElement("div");
  cardBack.classList.add("berrie-block-back");

  const size = document.createElement("p");
  size.classList.add("size");
  size.textContent = "Tamaño: " + berrie.size / 10 + "cm";

  const flavorsName = document.createElement("div");
  flavorsName.classList.add("flavors-name");
  flavorsName.textContent = "Sabores";

  cardBack.appendChild(size);
  cardBack.appendChild(firmness);
  cardBack.appendChild(flavorsName);
  cardBack.appendChild(berrieFlavors(berrie.flavors));
  cardContainer.appendChild(card);
  cardContainer.appendChild(cardBack);
  berrieContainer.appendChild(flipCard);
}
function cargarImagenBaya(name) {
  const ruta = "../IMG/Bayas/\\" + name + ".png";
  return ruta;
}
function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function berrieFlavors(flavors) {
  const flavorsContainer = document.createElement("div");
  flavorsContainer.classList.add("flavors-container");

  for (let i = 0; i < flavors.length; i++) {
    const flavor = flavors[i];
    const flavorN = document.createElement("div");
    if (flavor.potency != 0) {
      const items = new Map([
        ["spicy", "Picante"],
        ["dry", "Seca"],
        ["sweet", "Dulce"],
        ["bitter", "Amarga"],
        ["sour", "Ácida"],
      ]);

      const itemBackground = new Map([
        ["spicy", "background-color-spicy"],
        ["dry", "background-color-dry"],
        ["sweet", "background-color-sweet"],
        ["bitter", "background-color-bitter"],
        ["sour", "background-color-sour"],
      ]);

      if (items.has(flavor.flavor.name)) {
        flavorN.textContent = items.get(flavor.flavor.name);
        flavorN.classList.add(itemBackground.get(flavor.flavor.name));
        flavorsContainer.appendChild(flavorN);
      }
    }
  }
  return flavorsContainer;
}

function dureza(texto) {
  const types = new Map([
    ["very-soft", "Muy blanda"],
    ["soft", "Blanda"],
    ["hard", "Dura"],
    ["very-hard", "Muy Dura"],
    ["super-hard", "Superdura"],
  ]);
  if (types.has(texto)) {
    texto = types.get(texto);
  }
  return texto;
}

function ocultar() {
  document.getElementById("obj1").style.display = "none";
}

function nombre(texto) {
  const types = new Map([
    ["cheri", "Zreza"],
    ["chesto", "Atania"],
    ["pecha", "Meloc"],
    ["rawst", "Safre"],
    ["aspear", "Perasi"],
    ["leppa", "Zanama"],
    ["oran", "Aranja"],
    ["persim", "Caquic"],
    ["lum", "Ziuela"],
    ["sitrus", "Zidra"],
    ["figy", "Higog"],
    ["wiki", "Wiki"],
    ["mago", "Ango"],
    ["aguav", "Guaya"],
    ["iapapa", "Pabaya"],
    ["razz", "Frambu"],
    ["bluk", "Oram"],
    ["nanab", "Latano"],
    ["wepear", "Peragu"],
    ["pinap", "Pinia"],
    ["pomeg", "Grana"],
    ["kelpsy", "Algama"],
    ["qualot", "Ispero"],
    ["hondew", "Meluce"],
    ["grepa", "Uvav"],
    ["tamato", "Tamate"],
    ["cornn", "Mais"],
    ["magost", "Aostan"],
    ["rabuta", "Rautan"],
    ["nomel", "Monli"],
    ["spelon", "Wikano"],
    ["pamtre", "Plama"],
    ["watmel", "Sambia"],
    ["durin", "Rudion"],
    ["belue", "Andano"],
    ["occa", "Caoca"],
    ["passho", "Pasio"],
    ["wacan", "Gualot"],
    ["rindo", "Tamar"],
    ["yache", "Rimoya"],
    ["chople", "Pomaro"],
    ["kebia", "Kebia"],
    ["shuca", "Acardo"],
    ["coba", "Kouba"],
    ["payapa", "Payapa"],
    ["tanga", "Yecana"],
    ["charti", "Alcho"],
    ["kasib", "Drasi"],
    ["haban", "Anjiro"],
    ["colbur", "Dillo"],
    ["babiri", "Baribá"],
    ["chilan", "Chilan"],
    ["liechi", "Lichi"],
    ["ganlon", "Gonlan"],
    ["salac", "Aslac"],
    ["petaya", "Yapati"],
    ["apicot", "Aricoc"],
    ["lansat", "Zonlan"],
    ["starf", "Arabol"],
    ["enigma", "Enigma"],
    ["micle", "Lagro"],
    ["custap", "Chiri"],
    ["jaboca", "Jaboca"],
    ["rowap", "Magua"],
  ]);
  if (types.has(texto)) {
    texto = types.get(texto);
  }
  return texto;
}
