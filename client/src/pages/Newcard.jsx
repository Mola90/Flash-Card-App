

function Flashcard() {
    return(
        <div className=" flex items-center justify-center w-full min-h-screen ">
        <div className=" bg-white  shadow-md rounded-lg w-full m-3 p-4 max-w-2xl ">
            <div>
                <h2 className=" text-5xl font-bold mb-4">Create Flashcard</h2>
                <form>
                    <label htmlFor="cardQuestion" className=" block text-gray-700 font-medium mb-2 text-xl">Question</label>
                    <input
                    type="text"
                    id="newQuestion"
                    required
                    className=" px-3 py-2 border border-gray-300 rounded-md w-10/12"
                    />


                    <label htmlFor="Answer" className="block text-gray-700 font-medium mb-2 text-xl">Answer</label>
                    <textarea
                    id="Answer"
                    required
                    className=" px-3 py-2 border border-gray-300 rounded-md w-10/12"
                    />
                    
                    <div className="flex justify-center my-3">
                    <button type="submit" className=" block w-8/12 bg-blue-500 text-white px-4 rounded-md hover:bg-blue-600 text-xl p-2"> Submit</button>
                    </div>
                    
                </form>
            </div>
        </div>

        </div>
    )
}

export default Flashcard;