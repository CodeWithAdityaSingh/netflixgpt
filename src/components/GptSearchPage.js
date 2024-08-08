import React, { useState } from "react";
import { useSelector } from "react-redux";
import { gptSearch } from "../utils/constans";
import Suggestion from "./Suggestion";
import client from "../utils/openAI";

const GptSearchPage = () => {
  let selector = useSelector((store) => store.gptSlice.Language);
  let [search,setSearch] = useState('')



  return (
    <div className="w-screen h-screen bg-red-400 bg-gradient-to-r from-black">
      <div className=" absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
        <input  value={search}
          className="w-96 rounded-md h-10"
          type="text"
          placeholder={gptSearch[selector].SearchBox} onChange={(e)=>{

             setSearch(e.target.value)

          }}
        ></input>
        <button
          className="m-4 bg-black text-white py-2 px-11 font-semibold rounded-md"
          onClick={() => {
            async function fech() {
              let movieQuery = "Act as Movei recomendation System suggest some Movie with the query :" + search + ". only give me name of five Move comma seperated like the example result ahead.Example Results : Gadar,Shole,Golmal,Don,Koi Mil Gayaa"
              const chatCompletion = await client.chat.completions.create({
                messages: [{ role: "user", content: movieQuery}],
                model: "gpt-3.5-turbo",
              });

              console.log(chatCompletion.choices);
            }

            fech(); 
          }}
        >
          {gptSearch[selector].search}
        </button>
        <Suggestion />
      </div>
    </div>
  );
};

export default GptSearchPage;
