import { ArrowRight } from "phosphor-react"
import { Barbell } from "phosphor-react"
import { Ruler } from "phosphor-react"
import { Atom } from "phosphor-react"

const Pokemon = ({ name, type, weight, height, image }) => {
  const mainType = type[0].type.name

  return (
    <div className="p-2 shadow-xl bg-zinc-800/60 hover:bg-zinc-800 
      rounded-xl transition duration-300 ease-in m-2 my-10 mx-auto lg:mx-2 max-w-sm w-9/12 lg:w-auto" // max-w-sm w-8/12
    >
      <div className="p-4 h-full rounded-lg overflow-hidden flex flex-col justify-center items-center">
        <img 
          src={image} 
          alt="" 
          className="w-full object-cover object-center" // max-h-64
        />

        {/* name */}
        <h2 className="font-bold mt-2 text-2xl first-letter:uppercase">{name}</h2>

        <div className="p-6 mb-2 flex flex-col justify-center items-start">
          {/* types */}
          <div className=" text-xs font-medium leading-relaxed text-green-600 flex items-center gap-1">
            <Atom 
              size={16}
              weight="thin"
            />
            Type: 
            <span className="text-xs text-zinc-300 ml-2">{mainType}</span>                
          </div>

          {/* weight */}
          <div className="text-xs font-medium leading-relaxed text-green-600 flex items-center gap-1">
            <Barbell 
              size={16}
              weight="thin"
            />
            Weight (hg): 
            <span className="text-xs text-zinc-300 ml-2">{weight}</span>
          </div>

          {/* height */}
          <div className="text-xs font-medium leading-relaxed text-green-600 flex items-center gap-1">
            <Ruler 
              size={16}
              weight="thin"
            />
            Height (dm): 
            <span className="text-xs text-zinc-300 ml-2">{height}</span>
          </div>

        </div>

        <div className="flex items-center flex-wrap p-1 justify-center">
          <a 
            href="https://pokeapi.co/" 
            className="text-violet-500 inline-flex items-center md:mb-2 lg:mb-0
            hover:text-violet-700 transition-colors text-sm"
          >
            Read more

            <ArrowRight
              size={16}
              weight="thin"
              className="ml-1 font-bold"
            />
          </a>
        </div>

      </div>
    </div>
  )
}

export default Pokemon