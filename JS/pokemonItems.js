const itemContainer = document.querySelector(".item-container");

async function fetchItem(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/item/${id}/`);
  const data = await res.json();
  createItem(data);
}

function createItem(item) {
  const flipCard = document.createElement("div");
  flipCard.classList.add("flip-card");

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  flipCard.appendChild(cardContainer);

  const card = document.createElement("div");
  card.classList.add("item-block");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");

  const sprite = document.createElement("img");
  sprite.src = item.sprites.default;

  spriteContainer.appendChild(sprite);

  const number = document.createElement("p");
  number.textContent = `#${item.id.toString().padStart(2, 0)}`;

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = nombre(item);

  const flavor_text_entries = document.createElement("p");
  flavor_text_entries.classList.add("description");
  flavor_text_entries.textContent = "Descripción: " + descripcion(item);

  const category = document.createElement("p");
  category.classList.add("category");
  category.textContent = "Categoría: " + item.category.name;

  card.appendChild(number);
  card.appendChild(spriteContainer);
  card.appendChild(name);

  const cardBack = document.createElement("div");
  cardBack.classList.add("item-block-back");

  cardBack.appendChild(flavor_text_entries);
  cardBack.appendChild(category);
  cardContainer.appendChild(card);
  cardContainer.appendChild(cardBack);
  itemContainer.appendChild(flipCard);
}

function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function descripcion(description) {
  const desc = description.flavor_text_entries;
  for (let index = 0; index < desc.length; index++) {
    if (desc[index].language.name == "es") {
      return desc[index].text;
    }else if(desc[index].langua){

    }
  }
}

function nombre(name) {
  const names = name.names;
  for (let index = 0; index < names.length; index++) {
    if (names[index].language.name == "es") {
      return names[index].name;
  }
}
}