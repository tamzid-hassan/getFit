import { useEffect, useState } from "react"

function ExcerciseCard({ excerciseIndex, excercise }) {

    const [setsCompleted, setSetsCompleted] = useState(0)

    function handleSetsIncrement() {
        if (setsCompleted === 5) {
            setSetsCompleted(0)
            return
        }

        setSetsCompleted(prevValue => (prevValue + 1))
    }

    useEffect(() => {
        setSetsCompleted(0)
    }, [excercise])

    return (
        <div className="flex flex-col gap-4 p-4 rounded-md sm:flex-wrap bg-slate-950">
            <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4">
                <h4 className="hidden text-3xl font-semibold sm:inline sm:text-4xl md:text-5xl text-slate-400">
                    0{excerciseIndex + 1}
                </h4>
                <h2 className="flex-1 max-w-full text-lg capitalize truncate md:text-center whitespace-nowrap sm:text-xl md:text-2xl">
                    {excercise.name.replaceAll("_", " ")}
                </h2>
                <p className="text-sm capitalize text-slate-400">{excercise.type}</p>
            </div>
            <div className="flex flex-col">
                <h3 className="text-sm text-slate-400">Muscle Group</h3>
                <p className="capitalize ">{excercise.muscles.join(" & ")}</p>
            </div>
            <div className='flex flex-col gap-2 rounded bg-slate-950 '>
                {excercise.description.split('___').map((val, valIndex) => {
                    return (
                        <div key={valIndex} className='text-sm'>
                            {val}
                        </div>
                    )
                })}
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:place-items-center ">
                {['reps', 'rest', 'tempo'].map((info) => (
                    <div key={info} className="flex flex-col w-full p-2 border-2 border-solid rounded border-slate-900">
                        <h3 className="text-sm capitalize text-slate-400">{info === 'reps' ? `${excercise.unit}` : info}</h3>
                        <p className="font-medium">{excercise[info]}</p>
                    </div>
                ))}
                <button onClick={handleSetsIncrement} className="flex flex-col w-full p-2 duration-200 border-2 border-blue-900 border-solid rounded hover:border-blue-600">
                    <h3 className="text-sm capitalize text-slate-400">Sets Count: </h3>
                    <p className="font-medium">{setsCompleted === 5 ? "Set Completed ✅" : `${setsCompleted} / 5`}</p>
                </button>
            </div>
        </div>
    )
}

export default ExcerciseCard