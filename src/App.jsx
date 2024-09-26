import Generator from "./components/Generator"
import Hero from "./components/Hero"
import Workout from "./components/Workout"

function App() {

  return (
    <main className="flex flex-col min-h-screen text-sm text-white bg-gradient-to-r from-slate-800 to-slate-950 sm:text-base">
      <Hero />
      <Generator />
      <Workout />
    </main>
  )
}

export default App
