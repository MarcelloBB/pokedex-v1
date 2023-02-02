const PokemonCard = () => {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap m-4">

        <div className="p-1 sm:w-1/2 lg:w-1/3 shadow-xl  bg-zinc-800/60 hover:bg-zinc-800 rounded-xl transition duration-300 ease-in">
          <div className="p-4 h-full rounded-lg overflow-hidden ">
            <img 
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png" 
              alt="" 
              className="lg:h-72 md:h-48 w-full object-cover object-center"
            />

            <div className="p-6 mb-3">
              {/* name */}
              <h2 className="font-bold mb-1 text-xl">Ditto</h2>

              {/* types */}
              <p className="font-medium leading-relaxed text-green-600">
                Type: 
                <span className="text-zinc-300 ml-2">Normal</span>
              </p>

              {/* weight */}
              <p className="font-medium leading-relaxed text-green-600">
                Weight: 
                <span className="text-zinc-300 ml-2">40</span>
              </p>

            </div>

            <div className="flex items-center flex-wrap">
              <a href="#" className="text-violet-500 inline-flex items-center md:mb-2 lg:mb-0">Read more</a>
            </div>

          </div>
        </div>
      </div>
    </div>  
  )
}

export default PokemonCard