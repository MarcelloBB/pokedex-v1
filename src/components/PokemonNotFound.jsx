import { SmileySad } from "phosphor-react"

const PokemonNotFound = ({ pokemon }) => {
  return (
    <div className="w-full h-full flex flex-col p-4 mt-20">
      <div className="flex flex-col justify-center items-center">
        <SmileySad 
          size={60}
          weight="thin"
        />

        <div className="text-zinc-300 flex flex-col justify-center items-center mt-2">
          <h2 className="font-semibold ">We couldn't find </h2>
          <span className="font-bold ml-2 mt-2 text-3xl text-zinc-400">'{pokemon}'</span>
        </div>
      </div>
    </div>
  )
}

export default PokemonNotFound