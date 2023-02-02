import { Binoculars } from "phosphor-react"

const Navbar = () => {
  return (
    <nav className="bg-zinc-900/80 shadow-lg px-5 py-8 flex flex-row items-center justify-around">
      <div className="">
        <img
         src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" 
         alt="Pokeapi logo"
         className="h-12"
        />
      </div>

      <form className="flex flex-row justify-center items-center bg-zinc-900 px-3 py-1 gap-3 rounded-lg w-1/5 border border-violet-700 
        font-semibold hover:border-violet-300 transition-colors focus:outline-none focus:ring-2 
      focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background"
      >
        <Binoculars 
          size={32}
          className="text-violet-700"
          weight="thin"
        />

        <input 
          type="text"
          placeholder="Looking for a Pokémon?"
          className="bg-zinc-900 w-full p-2 transition-colors focus:outline-none"
        />
      </form>
    </nav>
  )
}

export default Navbar