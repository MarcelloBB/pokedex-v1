import axios from "axios"
import { useEffect, useState } from "react"

import Navbar from "../../components/Navbar"
import Pokemon from "../../components/Pokemon"
import PokemonNotFound from "../../components/PokemonNotFound"
import SearchInput from "../../components/SearchInput"

const Home = () => {
  const [pokemons, setPokemons] = useState([])
  const [searchValue, setSearchValue] = useState("")

  const pokemonLimit = 50

  const getPokemons = async () => {
    const endpoints = []

    for (let i = 1; i < pokemonLimit; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }

    const responses = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(res => setPokemons(res))
  }

  const filteredPokemons = !!searchValue  
    ? pokemons.filter(pokemon => pokemon.data.name.toLowerCase().includes(searchValue.toLowerCase()))
    : pokemons

  const handleChange = (event) => {
    const { value } = event.target
    setSearchValue(value)
  }

  useEffect(() => {
    getPokemons()
  }, [])

  const pokemonExists = filteredPokemons.length > 0

  return (
    <div className="Home">
      <Navbar />
      
      <SearchInput 
        searchValue={searchValue}
        handleChange={handleChange}
      />

      {pokemonExists && (
        <div 
          className="grid grid-cols-1 
            sm:md:grid-cols-2 
            lg:grid-cols-4 
            lg:mx-20"
        >
          {filteredPokemons.map((pokemon, index) => (
            <Pokemon 
              key={index}
              name={pokemon.data.name}
              type={pokemon.data.types}
              weight={pokemon.data.weight}
              height={pokemon.data.height}
              image={pokemon.data.sprites.front_default}
            />
          ))}
        </div>
      )}

      {!pokemonExists && (
        <PokemonNotFound 
          pokemon={searchValue}
        />
      )}
    </div>
  )
}

export default Home