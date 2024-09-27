import { useState } from "react"
import Generator from "./components/Generator"
import Hero from "./components/Hero"
import Workout from "./components/Workout"
import { generateWorkout } from "./utils/workoutServices"

function App() {

  const [workout, setWorkout] = useState(null)
  const [workoutType, setWorkoutType] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')

  function updateWorkout() {
    if (muscles.length < 1) {
      return
    }

    let newWorkout = generateWorkout({ workoutType, muscles, goal })
    console.log("🚀 ~ updateWorkout ~ newWorkout:", newWorkout)
    setWorkout(newWorkout)

    window.location.href = "#formulate"
  }

  return (
    <main className="flex flex-col min-h-screen text-sm text-white bg-gradient-to-r from-slate-800 to-slate-950 sm:text-base">
      <Hero />
      <Generator
        workoutType={workoutType}
        setWorkoutType={setWorkoutType}
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />

      {workout && <Workout workout={workout} />}
    </main>
  )
}

export default App
