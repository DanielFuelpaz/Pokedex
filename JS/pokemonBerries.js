const berrieContainer = document.querySelector(".berrie-container");

async function fetchBerry(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/berry/${id}/`);
  const data = await res.json();
  createBerrie(data);
}

/*
Berries
id
nombre
tiempoCrecimiento
tamaño
suavidad
sabor
*/

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
  growth_time.textContent =
    "Tiempo Crecimiento: " + berrie.growth_time + " horas por etapa";

  const firmness = document.createElement("p");
  firmness.classList.add("firmness");
  firmness.textContent = berrie.firmness.name;

  const flavor = document.createElement("p");
  flavor.classList.add("flavor");
  flavor.textContent = sabor(berrie.flavors);

  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);
  card.appendChild(growth_time);

  const cardBack = document.createElement("div");
  cardBack.classList.add("berrie-block-back");

  const size = document.createElement("p");
  size.classList.add("size");
  size.textContent = "tamaño: " + berrie.size / 10 + "cm";

  cardBack.appendChild(size);
  cardBack.appendChild(firmness);
  cardBack.appendChild(flavor);
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

function sabor(flavors) {
  for (let i = 0; i < flavors.length; i++) {
    const flavor = flavors[i];
    if (flavor.potency != 0) {
      const items = new Map([
        ["spicy", "Picante"],
        ["dry", "Seco"],
        ["sweet", "Dulce"],
        ["bitter", "Amargo"],
        ["sour", "Picante"],
      ]);
      if (items.has(flavor.flavor.name)) {
        flavor.flavor.name = items.get(flavor.flavor.name);
      }
      return flavor.flavor.name;
    }
  }
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
    ["rowap", "Magua"]
  ]);
  if (types.has(texto)) {
    texto = types.get(texto);
  }
  return texto;
}
