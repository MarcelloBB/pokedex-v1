import { Binoculars } from "phosphor-react"
import SearchInput from "./SearchInput"

const Navbar = ({ pokemonFilter, searchValue, handleChange }) => {
  return (
    <nav className="bg-zinc-900/80 shadow-lg px-5  flex 
      flex-col justify-center items-center gap-8 py-10
      lg:md:flex-row  lg:md:justify-around lg:md:items-center lg:md:py-8"
    >
      <div className="">
        <img
         src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" 
         alt="Pokeapi logo"
         className="h-12"
        />
      </div>

      <form className="flex flex-row justify-center items-center bg-zinc-900 px-3 py-1 gap-3 rounded-lg lg:md:w-1/4 border border-violet-700 
        font-semibold hover:border-violet-300 transition-colors focus:outline-none focus:ring-2 
      focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background"
      >
        <Binoculars 
          size={32}
          className="text-violet-700"
          weight="thin"
        />

        <SearchInput 
          searchValue={searchValue}
          handleChange={handleChange}
        />
      </form>
    </nav>
  )
}

export default Navbar