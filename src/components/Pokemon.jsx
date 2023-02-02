import { ArrowRight } from "phosphor-react"
import { Barbell } from "phosphor-react"
import { Ruler } from "phosphor-react"
import { Atom } from "phosphor-react"

const Pokemon = ({ name, type, weight, height, image }) => {
  const mainType = type[0].type.name

  return (
    <div className="p-2 m-2 my-10 mx-auto w-9/12 max-w-sm shadow-xl rounded-xl 
      bg-zinc-800/60 hover:bg-zinc-800 
       transition duration-300 ease-in
       lg:mx-2 
       lg:w-auto" 
    >
      <div className="flex flex-col justify-center items-center
        p-4 h-full rounded-lg overflow-hidden"
      >
        <img 
          src={image} 
          alt="Pokemon Image" 
          className="w-full object-cover object-center" 
        />

        <h2 
          className="font-bold mt-2 text-2xl first-letter:uppercase"
        >
          {name}
        </h2>

        <div className="flex flex-col justify-center items-start
          p-6 mb-2"
        >
          {/* TYPE */}
          <div className="flex items-center gap-1
            text-xs font-medium leading-relaxed text-green-600"
          >
            <Atom 
              size={16}
              weight="thin"
            />

            <p>Type:</p>

            <span 
              className="text-xs text-zinc-300 ml-1"
            >
              {mainType}
            </span>                
          </div>

          {/* WEIGHT */}
          <div className="flex items-center gap-1 
            text-xs font-medium leading-relaxed text-green-600"
          >
            <Barbell 
              size={16}
              weight="thin"
            />

            <p>Weight (hg):</p>

            <span
              className="text-xs text-zinc-300 ml-1"
            >
              {weight}
            </span>
          </div>

          {/* HEIGHT */}
          <div className="flex items-center gap-1
            text-xs font-medium leading-relaxed text-green-600"
          >
            <Ruler 
              size={16}
              weight="thin"
            />

            <p>Height (dm):</p>

            <span 
              className="text-xs text-zinc-300 ml-1"
            >
              {height}
            </span>
          </div>
        </div>

        {/* READ MORE */}
        <div className="flex items-center flex-wrap p-1 justify-center">
          <a 
            href="https://pokeapi.co/" 
            className="inline-flex items-center 
            text-violet-500 hover:text-violet-700 transition-colors text-sm
              md:mb-2 lg:mb-0"
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