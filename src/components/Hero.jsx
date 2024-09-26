function Hero() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-10 text-center max-w-[800px] w-full mx-auto p-4">
            <div className="flex flex-col gap-4">
                <p>Its asdasdasd</p>
                <h1 className="text-5xl font-semibold uppercase sm:text-6xl md:text-7xl lg:text-8xl">ASDASDAS<span className="text-blue-400">asdasd</span></h1>
            </div>
            <p className="text-sm font-light md:text-base">Lorem ipsum dolor sit amet <span className="font-medium text-blue-400">consectetur adipisicing</span> elit. Ducimus, provident quibusdam autem placeat accusantium, eum facilis nesciunt exercitationem quaerat nemo molestiae cum dolorum <span className="font-medium text-blue-400">consectetur adipisicing</span> tempore mollitia.</p>
            <button className="px-8 py-4 duration-200 border-2 border-blue-400 border-solid rounded-md btnBlueShadow"><p>Lets Get Fit</p></button>
        </div>
    )
}

export default Hero