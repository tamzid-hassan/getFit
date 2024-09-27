import SectionWrapper from "./SectionWrapper"
import ExcerciseCard from "./ExcerciseCard"

function Workout({ workout }) {
    console.log(workout)
    return (
        <SectionWrapper sectionId={"formulate"} header={"welcome to"} title={["The", ["Danger"], ["Zone"]]}>
            <div className="flex flex-col gap-4">
                {workout?.map((excercise, excerciseIndex) => {
                    return (
                        < ExcerciseCard key={excerciseIndex} excerciseIndex={excerciseIndex} excercise={excercise} />
                    )
                })}
            </div>
        </SectionWrapper>
    )
}

export default Workout