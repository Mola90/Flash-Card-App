import { useState } from "react";
import { GET_FLASHCARDS } from "../utils/queries";


function Practice() {
    return(
        <div className=" flex items-center justify-center w-full min-h-screen ">
        {/* <div className=" bg-white  shadow-md rounded-lg w-full m-3 p-4 max-w-2xl " style={{minHeight: "50vh", backgroundColor: "rgb(100,130,246,1)"}}>
            <div>
                <div className=" flex justify-center">
                <h2 className=" text-5xl font-bold mb-4 text-slate-100  hover:text-slate-300" >Question</h2>
                </div>

                <h2 className="text-xl md:mt-9 text-slate-100  hover:text-slate-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h2>
                
            </div>
            
        </div> */}
        <div className=" bg-white  shadow-md rounded-xl w-full m-3 p-4 max-w-2xl " style={{minHeight: "50vh", backgroundColor: "rgb(100,130,246,1)"}}>
            <div>
                <div className=" flex justify-center">
                <h2 className=" text-5xl font-bold mb-4 text-slate-100  hover:text-slate-300" >Answer</h2>
                </div>

                <h2 className="text-xl md:mt-9 text-slate-100  hover:text-slate-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h2>
                
            </div>
            <div className=" flex justify-center mt-9">
                <button className=" text-5xl font-bold text-white bg-white  rounded-xl px-4 py-1 shadow-lg" style={{color: "#F6D864"}}>NEXT</button>
            </div>
            
        </div>

        </div>
    );
}

export default Practice;