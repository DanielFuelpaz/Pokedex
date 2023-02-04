async function fetchBerry(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/berry/${id}/`);
  const data = await res.json();
  document.getElementById("nameBerrie").src= "../IMG/Bayas/\\"+data.name+".png";
  console.log(data.name);
}

function traducir(texto) {
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
