import React from "react";
import { homeInput } from "../data/formData";
import InputComp from "./InputComp";

const HomeContact = () => {
   return (
      <div className="bg-gray-800 py-12 mt-5 flex text-white justify-center flex-wrap">
         <div className="self-start flex flex-col items-center py-8 space-y-4">
            <h2>Contact</h2>
            <h6>134 Tanguile Street, Marikina Heights, Marikina City</h6>
            <h6>hermipkevehs@gmail.com</h6>
            <h6>09560651742</h6>
         </div>
         <form className="flex flex-col">
            <div className="text-white grid md:grid-cols-2 md:justify-center px-32 pb-0 md:gap-x-4 gap-y-4">
               {homeInput.map((input, index) => {
                  console.log(input.placeholder);
                  return <InputComp type={input.type} id={input.id} placeholder={input.placeholder} key={index} />;
               })}
               <textarea name="help" resize="none" placeholder="Type your message here..." />
            </div>
            <button type="submit" className="px-12 py-4 bg-white text-black self-center mt-8 hover:bg-opacity-20 hover:text-white">
            Submit
         </button>
         </form>
      </div>
   );
};

export default HomeContact;
