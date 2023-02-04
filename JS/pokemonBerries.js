async function fetchBerry(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/berry/${id}/`);
  const data = await res.json();
  document.getElementById("nameBerrie").src= "../IMG/Bayas/\\"+data.name+".png";
  console.log(data.name);
}