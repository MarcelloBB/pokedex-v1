const SearchInput = ({ searchValue, handleChange }) => (
  <input 
    placeholder="Looking for a Pokémon?"
    className="bg-zinc-900 w-full p-2 transition-colors focus:outline-none"
    onChange={handleChange}
    value={searchValue}
    type="search"
  />
)

export default SearchInput