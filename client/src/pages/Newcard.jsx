import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_FLASHCARD } from "../utils/mutations";
import auth from "../utils/auth";

function Flashcard() {


        if (!auth.loggedIn()) {
           return <h1 className="text-5xl font-bold mb-4 text-slate-100 hover:text-slate-300">Please sign in to make cards</h1>;
        }

    
        const [question, setQuestion] = useState('');
        const [answer, setAnswer] = useState('');
        const [createFlashcard] = useMutation(CREATE_FLASHCARD);

        const handleCreateFlashcard = async (e) => {
          e.preventDefault();
          try {
            const result = await createFlashcard({
              variables: {
                question,
                answer,
                userId: ""
              }
            });
            console.log('Flashcard created:', result.data.addFlashcard);
          } catch (err) {
            console.error('Error creating flashcard:', err);
          }
          alert("1");
          setAnswer("");
          setQuestion("");
        };





    return(
        <div className=" flex items-center justify-center w-full min-h-screen ">
        <div className=" bg-white  shadow-md rounded-lg w-full m-3 p-4 max-w-2xl ">
            <div>
                <h2 className=" text-5xl font-bold mb-4">Create Flashcard</h2>
                <form onSubmit={handleCreateFlashcard}>
                    <label htmlFor="cardQuestion" className=" block text-gray-700 font-medium mb-2 text-xl">Question</label>
                    <input
                    type="text"
                    id="newQuestion"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                    className=" px-3 py-2 border border-gray-300 rounded-md w-10/12"
                    />


                    <label htmlFor="Answer" className="block text-gray-700 font-medium mb-2 text-xl">Answer</label>
                    <textarea
                    id="Answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
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