import React from "react";

const InputComp = ({ placeholder, id, type, index }) => {
   return <>{id === "subject" ? <input type={type} id={id} index={index} placeholder={placeholder} className="col-span-2" /> : <input type={type} id={id} index={index} placeholder={placeholder} />}</>;
};

export default InputComp;
