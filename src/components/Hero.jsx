import Button from "./Button"

function Hero() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-10 text-center max-w-[800px] w-full mx-auto p-4">
            <div className="flex flex-col gap-4">
                <p>Time to get Huge</p>
                <h1 className="text-4xl font-semibold uppercase sm:text-5xl md:text-6xl lg:text-8xl">GET<span className="text-blue-400">-FIT</span>💪🏻</h1>
            </div>
            <p className="text-sm font-light md:text-base">
                Ready to <span className="font-medium text-blue-400">crush your workouts</span> like a beast?
                <br />
                Our Exercise Generator lets you build your perfect rountine. Wether you're all about the classic bro split, smashing one muscle group at a time, or going for that upper-lower body burn!
                From chest day pump to leg day DOMS  <span className="font-medium text-blue-400">(don't skip it!)</span>, we've got you covered. Customize your routine, hit those gains, and flex your way to fitness glory. Time to <span className="font-medium text-blue-400">lift heavy</span> and look <span className="font-medium text-blue-400">legendary!</span>
            </p>
            <Button func={() => window.location.href = "#generate"} btnText={"Lets Get Fit"} />
        </div>
    )
}

export default Hero