
function Button({ btnText, func }) {
    return (
        <button onClick={func} className="px-8 py-4 duration-200 border-2 border-blue-400 border-solid rounded-md btnBlueShadow">
            <p>{btnText}</p>
        </button>
    )
}

export default Button