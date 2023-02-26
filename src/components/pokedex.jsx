import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { Link } from "react-router-dom";

function PokedexComponents() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then((response) => {
        const results = response.data.results;
        const newPokemonList = results.map(async (pokemon) => {
          const pokemonResponse = await axios.get(pokemon.url);
          return {
            name: pokemon.name,
            image: pokemonResponse.data.sprites.front_default,
          };
        });
        Promise.all(newPokemonList)
          .then((data) => {
            setPokemonList(data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );
  
  return (
    <div>
      <main className="overflow-scroll rounded-xl border m-8 p-5">
        <div className="flex w-1/2 sticky justify-between">
          <form className="flex mb-5 w-full md:ml-0">
            <label htmlFor="search-field" className="sr-only">
              Search
            </label>
            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                <MagnifyingGlassIcon
                  className="h-5 ml-2 w-5"
                  aria-hidden="true"
                />
              </div>
              <input
                id="search-field"
                className="block rounded h-10 w-full border py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                placeholder="Search"
                type="search"
                name="search"
                onChange={handleSearchChange}
              />
            </div>
          </form>
          <button className="flex justify-between rounded-md ml-3 p-1.5 w-64 h-10 border">
            <span className="text-center">Catch Your Pokemon!</span>
          </button>
        </div>

        <div className="w-full h-[30rem] border-black flex flex-wrap">
          {filteredPokemonList
            .filter((pokemon) =>
              pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((pokemon) => (
              <div
                className="border h-36 md:w-1/2 lg:w-1/6 flex flex-col items-center p-2"
                key={pokemon.name}
              >
                <Link to="#">
                  <img
                    className="h-24 w-24"
                    src={pokemon.image}
                    alt={pokemon.name}
                  />
                  <span className="text-sm flex justify-center capitalize">
                    {pokemon.name}
                  </span>
                </Link>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}

export default PokedexComponents;
