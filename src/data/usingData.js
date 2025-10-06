export async function fetchingImgs() {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const res = await fetch(url);
  const names = await res.json();
  const data = names.results;
  const pokemons = [];
  for (let i = 0; i < 12; i++) {
    const object = {};
    pokemons.push(object);
    object.name = data[i].name;
    object.url = await getUrl(data[i].name);
  }

  async function getUrl(name) {
    const res = await fetch(`${url}/${name}`);
    const data = await res.json();
    const img = data.sprites.other["official-artwork"].front_default;
    return img;
  }

  const randomPokemons = [];

  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    randomPokemons.push(pokemons[randomIndex]);
    pokemons.splice(randomIndex, 1);
  }
  return randomPokemons;
}
