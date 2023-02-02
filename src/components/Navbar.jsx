import { Binoculars, GithubLogo, GitBranch, LinkedinLogo } from "phosphor-react"

import SearchInput from "./SearchInput"

const Navbar = () => {
  return (
    <nav className="flex flex-col justify-center items-center gap-8
    bg-zinc-900/80 shadow-lg px-5 py-10
      lg:md:flex-row 
      lg:md:justify-evenly 
      lg:md:items-center 
      lg:md:py-8"
    >
      {/* IMG */}
      <div className="">
        <img
         src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" 
         alt="Pokeapi logo"
         className="h-12"
        />
      </div>

      {/* LINKS */}
      <div className="flex flex-row justify-center items-center gap-5">
        <a href="https://github.com/MarcelloBB">
          <GithubLogo 
            size={25}
            className="text-violet-700"
          />
        </a>
        <a href="https://github.com/MarcelloBB/pokedex-v1">
          <GitBranch 
            size={25}
            className="text-violet-700"
          />
        </a>
        <a href="https://www.linkedin.com/in/marcello-belanda-batista-362109262/">
          <LinkedinLogo 
            size={25}
            className="text-violet-700"
          />
        </a>
      </div>
    </nav>
  )
}

export default Navbar