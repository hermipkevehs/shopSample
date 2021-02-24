import React from "react";

const InputComp = ({ placeholder, id, type, index }) => {
   return <React.Fragment>{id === "subject" ? <input type={type} id={id} index={index} placeholder={placeholder} className="col-span-2" /> : <input type={type} id={id} index={index} placeholder={placeholder} />}</React.Fragment>;
};

export default InputComp;
