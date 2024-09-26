import SectionWrapper from "./SectionWrapper"
import { WORKOUTS, SCHEMES } from "../utils/excerciseDB.js"
import { useState } from "react"
import Button from "./Button.jsx"

function Header({ index, title, description }) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center gap-2 ">
                <p className="text-3xl font-semibold sm:text-4xl md:text-5xl text-slate-400">{index}</p>
                <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
            </div>
            <p className="mx-auto text-sm sm:text-base">{description}</p>
        </div>
    )
}

function Generator() {

    const [showModal, setShowModal] = useState(false)
    const [workoutType, setWorkoutType] = useState('individual')
    const [muscles, setMuscles] = useState([])
    const [goal, setGoal] = useState('strength_power')


    function toggleModal() {
        setShowModal(!showModal)
    }

    function updateMuscles(muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup))
            console.log("First if")
            return

        }

        if (muscles.length > 2) {
            console.log("Second if")
            //TODO: SHOW TOAST  HERE
            return
        }

        if (workoutType !== 'individual') {
            console.log("Third if")
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }


        if (muscles.length === 2) {
            console.log("last IF")
            setShowModal(false)
        }

        setMuscles([...muscles, muscleGroup])


    }

    console.log("=================")

    console.log("Modal Open?", showModal)

    console.info("Muscle Array length", muscles.length)

    console.log("==================")

    return (
        <SectionWrapper header={"generate your wokrout"} title={["It's", ["Huge"], ["o'clock"]]}>
            <Header index={'01'} title={'Pick your Workout Style'} description={"Select the workout you wish to endure."} />
            <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (
                        <button onClick={() => {
                            setMuscles([])
                            setWorkoutType(type)
                        }} className={'bg-slate-950 border  duration-200 px-4 hover:border-blue-600 py-3 rounded-lg ' + (type === workoutType ? ' border-blue-600' : ' border-blue-400')} key={typeIndex}>
                            <p className='capitalize'>{type.replaceAll('_', " ")}</p>
                        </button>
                    )
                })}
            </div>
            <Header index={'02'} title={'Lock on targets'} description={"Select the muscles judged for annihilation."} />
            <div className='flex flex-col border border-blue-400 border-solid rounded-lg bg-slate-950'>
                <button onClick={toggleModal} className='relative flex items-center justify-center p-3'>
                    <p className='capitalize'>{muscles.length == 0 ? 'Select muscle groups' : muscles.join(' ')}</p>
                    <i className="absolute -translate-y-1/2 fa-solid right-3 top-1/2 fa-caret-down"></i>
                </button>
                {showModal && (
                    <div className='flex flex-col px-3 pb-3'>
                        {(workoutType === 'individual' ? WORKOUTS[workoutType] : Object.keys(WORKOUTS[workoutType])).map((muscleGroup, muscleGroupIndex) => {
                            return (
                                <button onClick={() => {
                                    updateMuscles(muscleGroup)
                                }} key={muscleGroupIndex} className={'hover:text-blue-400 duration-200 ' + (muscles.includes(muscleGroup) ? ' text-blue-400' : ' ')}>
                                    <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                                </button>
                            )
                        })}
                    </div>
                )}
            </div>
            <Header index={'03'} title={'Become Juggernaut'} description={"Select your ultimate objective."} />
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (
                        <button onClick={() => {
                            setGoal(scheme)
                        }} className={'bg-slate-950 border  duration-200 hover:border-blue-600 py-3 rounded-lg px-4 ' + (scheme === goal ? ' border-blue-600' : ' border-blue-400')} key={schemeIndex}>
                            <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
                        </button>
                    )
                })}
            </div>

            <Button btnText={"Formulate"} />
        </SectionWrapper>

    )
}

export default Generator