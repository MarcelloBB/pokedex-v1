import axios from "axios"
import { useEffect, useState } from "react"

import Navbar from "../../components/Navbar"
import Pokemon from "../../components/Pokemon"
import PokemonNotFound from "../../components/PokemonNotFound"

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

  /* const searchPokemons = (name) => {
    const filteredPokemons = []

    if (name === "") {
      getPokemons()
    }

    pokemons.forEach((pokemon, index) => {
      if (pokemon.data.name.includes(name)) {
        filteredPokemons.push(pokemon)
      }
    })

    setPokemons(filteredPokemons)
  } */

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

  return (
    <div>
      <Navbar 
        searchValue={searchValue}
        handleChange={handleChange}
      />

      {filteredPokemons.length > 0 && (
        <div className="grid grid-cols-1 sm:md:grid-cols-2 lg:grid-cols-4 lg:mx-20">
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

      {filteredPokemons.length === 0 && (
        <PokemonNotFound 
          pokemon={searchValue}
        />
      )}
      

    </div>
  )
}

export default Home