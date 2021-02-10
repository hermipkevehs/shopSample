import React, { createContext, useReducer } from "react";
const initialState = {
   isLogin: false,
   showModal: false,
   buttonClicked: false,
};

export const NavbarContext = createContext();

const reducer = (state, action) => {
   switch (action.type) {
      case "SETLOGIN":
         return { ...state, isLogin: !state.isLogin };
      case "SETMODAL":
         return { ...state, showModal: !state.showModal };
      case "SETBUTTON":
         return { ...state, buttonClicked: !state.buttonClicked };
      case "LOGINMODAL":
         return { ...state, showModal: !state.showModal, isLogin: !state.isLogin };
      case "RESET":
         return { ...state, isLogin: false, showModal: false, buttonClicked: false };
      default:
         return state;
   }
};

export const NavbarProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);
   return <NavbarContext.Provider value={[state, dispatch]}>{children}</NavbarContext.Provider>;
};
