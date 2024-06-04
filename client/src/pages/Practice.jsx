import { useState } from "react";
import { GET_FLASHCARDS } from "../utils/queries";
import { useQuery } from "@apollo/client";


function Practice() {

    const { loading, error, data } = useQuery(GET_FLASHCARDS);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    const flashcards = data.flashcards;
  
    const handleCardClick = () => {
      setShowAnswer(!showAnswer);
    };
  
    const handleNextClick = () => {
      setShowAnswer(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    };
  
    const currentCard = flashcards[currentIndex];



    return (
        <div className="flex items-center justify-center w-full min-h-screen">
          <div className="bg-white shadow-md rounded-lg w-full m-3 p-4 max-w-2xl" style={{ minHeight: "50vh", backgroundColor: "rgb(100,130,246,1)" }}>
            <div className="flex flex-col justify-between h-full " onClick={handleCardClick}>
              {showAnswer ? (
                <>
                  <div className="flex justify-center ">
                    <h2 className="text-5xl font-bold mb-4 text-slate-100 hover:text-slate-300">Answer</h2>
                  </div>
                  <h2 className="text-xl md:mt-9 text-slate-100 hover:text-slate-300">{currentCard.answer}</h2>
                </>
              ) : (
                <>
                  <div className="flex justify-center">
                    <h2 className="text-5xl font-bold mb-4 text-slate-100 hover:text-slate-300">Question</h2>
                  </div>
                  <h2 className="text-xl md:mt-9 text-slate-100 hover:text-slate-300 mb-12">{currentCard.question}</h2>
                </>
              )}
            </div>
            <div className="flex justify-center mt-9">
              <button
                className="text-5xl font-bold text-white bg-white rounded-xl px-4 py-1 shadow-lg mt-12"
                style={{ color: "#F6D864" }}
                onClick={handleNextClick}
              >
                NEXT
              </button>
            </div>
          </div>
        </div>
      );
}

export default Practice;