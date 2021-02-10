import React, { createContext, useReducer } from "react";
const NavInitialState = {
   isLogin: false,
   showModal: false,
   buttonClicked: false,
};
const CartInitialState = {count:0};

export const GlobalContext = createContext();

const CartReducer = (state, action) => {
   switch(action.type){
      case "ADDTOCART": 
         return {count: state+1}
      case "REMOVE":
         return {count: state-1}
      case "RESET":
         return {count: 0}
   }
}

const NavReducer = (state, action) => {
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

export const GlobalProvider = ({ children }) => {
   const [navstate, dispatch] = useReducer(NavReducer, NavInitialState);
   return <GlobalContext.Provider value={[navstate, dispatch]}>{children}</GlobalContext.Provider>;
};
