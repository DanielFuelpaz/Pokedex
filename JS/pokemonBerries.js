async function fetchBerry(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/berry/${id}/`)
    const data = await res.json()
    console.log(data.name);
}