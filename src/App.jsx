import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App w-screen h-screen text-2xl font-bold text-white bg-zinc-800">
      <h1>Hello, pokedex</h1>
    </div>
  )
}

export default App
