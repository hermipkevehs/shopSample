import styled from "styled-components";

export const Color = styled.div`
   background-color: ${(props) => props.color};
   height: 1.5rem;
   width: 1.5rem;
   border-radius: 9999px;
`;
export const Background = styled.div`
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.8);
   position: fixed;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 10;
   top: 0;
`;

export const ModalWrapper = styled.div`
   width: 800px;
   height: 600px;
   box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
   background: #fff;
   color: #000;
   display: grid;
   grid-template-columns: 1fr 1fr;
   position: relative;
   z-index: 15;
   border-radius: 10px;
`;