import { useEffect, useState } from "react";
import { GET_FLASHCARDS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { QUERY_GETUSER } from "../utils/queries";
import auth from "../utils/auth";


function Practice() {

  if (!auth.loggedIn()) {
    return <h1 className="text-5xl font-bold mb-4 text-slate-100 hover:text-slate-300">Please sign in to practice</h1>;
 }

  const [runQuery, setRunQuery] = useState(false);
 

  useEffect(() => {
    console.log("Inside useEffect");
    
    if (auth.loggedIn()) {
      console.log("User is logged in");
      setRunQuery(true);
    } else {
      console.log("The user is logged out");
      alert("Please log in to access your flashcards");
    }
  },[]);


  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);




    


      const { loading, error, data } = useQuery(QUERY_GETUSER, {
        variables: { email: auth.getProfile().email },
        skip: !runQuery,
        onCompleted: (data) => {
          if (auth.loggedIn()) {
            setFlashcards(data.userByEmail.user.flashcards);
          } else {
            alert("Wrong username or password");
          }
          setRunQuery(false);
        },
      });
      if (error) { console.log("there is an errrrrrrrrrrrrrrr")}


    



    
  

  
    
    const handleCardClick = () => {
      setShowAnswer(!showAnswer);
    };
  
    const handleNextClick = () => {
      setShowAnswer(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    };
  
    const currentCard = flashcards[currentIndex];

  

    return (
      <>{loading ? (<p className="text-5xl font-bold mb-4 text-slate-100 hover:text-slate-300">Loading...</p>) : 
        (<div className="flex items-center justify-center w-full min-h-screen">
          <div className="bg-white shadow-md rounded-lg w-full m-3 p-4 max-w-2xl" style={{ minHeight: "50vh", backgroundColor: "rgb(100,130,246,1)" }}>
            <div className="flex flex-col justify-between h-full " onClick={handleCardClick}>
              {showAnswer ? (
                <>
                  <div className="flex justify-center ">
                    <h2 className="text-5xl font-bold mb-4 text-slate-100 hover:text-slate-300">Answer</h2>
                  </div>
                  <h2 className="text-xl md:mt-9 text-slate-100 hover:text-slate-300">{currentCard?.answer }</h2>
                </>
              ) : (
                <>
                  <div className="flex justify-center">
                    <h2 className="text-5xl font-bold mb-4 text-slate-100 hover:text-slate-300">Question</h2>
                  </div>
                  <h2 className="md:text-4xl md:mt-9 text-slate-100 hover:text-slate-300 mb-12">{currentCard?.question }</h2>
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
    )}
     </> );
}

export default Practice;