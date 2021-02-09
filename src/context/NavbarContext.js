import React, { createContext, useReducer } from "react";
const initialState = {
   isLogin: false,
   showModal: false,
   buttonClicked: false,
};

export const NavbarContext = createContext( );

const reducer = (state, action) => {
   switch (action) {
      case "SETLOGIN":
         return { ...state, isLogin: true };
      case "SETMODAL":
         return { ...state, showModal: true };
      case "SETBUTTON":
         return { ...state, buttonClicked: true };
      default:
         return state;
   }
};

export const NavbarProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);
   return <NavbarContext.Provider value={{ state, dispatch }}>{children}</NavbarContext.Provider>;
};
