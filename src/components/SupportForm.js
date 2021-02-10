import React from "react";
import { inputData } from "../data/formData";
import InputComp from "./InputComp";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const SupportForm = () => {
   const data = useStaticQuery(graphql`
      {
         support: contentfulOtherContent(title: { eq: "supportImg" }) {
            background {
               fluid {
                  ...GatsbyContentfulFluid
               }
            }
         }
      }
   `);
   return (
      <>
         <Image fluid={data.support.background.fluid} />
         <div className="bg-gray-800 py-12 flex flex-col text-white">
            <div className="self-center flex flex-col items-center py-8 space-y-4">
               <h2>Contact Support</h2>
               <h6>How Can We Help?</h6>
            </div>
            <form>
               <div className="text-white grid md:grid-cols-2 md:justify-center px-32 pb-0 md:gap-x-4 gap-y-4">
                  {inputData.map((input, index) => {
                     console.log(input.placeholder);
                     return <InputComp type={input.type} id={input.id} placeholder={input.placeholder} key={index} />;
                  })}
                  <select id="issues" name="issues" className="col-span-2 py-4 bg-transparent text">
                     <option value="" disabled selected hidden>
                        Choose an Issue
                     </option>
                     <option value="logging">Logging into Account</option>
                     <option value="payment">Completing payment</option>
                     <option value="viewing">Viewing Content</option>
                     <option value="uploading">Uploading Files</option>
                     <option value="others">Others</option>
                  </select>
                  <textarea name="help" resize="none" placeholder="Let us know what you need help with..." />
               </div>
            </form>
            <button type="submit" className="px-12 py-4 bg-white text-black self-center mt-8 hover:bg-opacity-20 hover:text-white">
               Get In Touch
            </button>
         </div>
      </>
   );
};

export default SupportForm;
