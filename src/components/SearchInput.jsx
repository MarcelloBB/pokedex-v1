import { Binoculars } from "phosphor-react"

const SearchInput = ({ searchValue, handleChange }) => (
  <form 
    className="flex flex-row justify-center items-center gap-3
    bg-zinc-900 font-semibold px-3 py-1 rounded-lg w-9/12 my-8 mx-auto 
      border border-violet-700 hover:border-violet-300 transition-colors 
      focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background
      lg:md:w-1/4"
  >
    <Binoculars 
      size={32}
      className="text-violet-700"
      weight="thin"
    />

    <input 
      placeholder="Looking for a Pokémon?"
      className="bg-zinc-900 w-full p-2 transition-colors focus:outline-none"
      onChange={handleChange}
      value={searchValue}
      type="search"
    />
  </form>
)

export default SearchInput