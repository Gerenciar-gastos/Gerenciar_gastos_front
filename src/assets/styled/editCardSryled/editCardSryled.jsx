
import styled from "styled-components";

export const All = styled.div`
 background-color: #E837AB;
 color: aliceblue;
 width: 100vw;  
 min-height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
`;

export const Container = styled.div`
 width: 90vw;  
 height: 90vh;
 background-color: red;
`;

export const ToGoBack = styled.div`
 background-color: #eb0808;
 width: 90vw;
 height: 50px;
 margin: 20px;
 svg{
    font-size: 50px;
    }
`;

export const NameCard = styled.div`
 background-color: blue;
 width: 90vw;
 height: 50px;
 display: flex;
 justify-content: space-around;
 align-items: center;
`;

export const DeleteToUpdate = styled.div`
 display: flex;
 background-color: #3cff00;
 width: 45vw;
 height: 50px;
 display: flex;
 justify-content: flex-start;
 align-items: center;
`;

export const Name = styled.input`
 font-size: 25px;
 background-color: #d0ff00;
 width: 45vw;
 height: 50px;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 border: none;
 padding: 20px;
`;

export const EstablishmentNameValuePersonDeleteToUpdate = styled.div`
 background-color: #1100ff;
 width: 90vw;
 height: 50px;
 display: flex;
 justify-content: center;
 align-items: center;
 margin-top: 10px;
`;

export const EstablishmentName = styled.input`
 background-color: #ff008c; 
 font-size: 25px ;
 width: 45vw;
 height: 50px;
 display: flex;
 justify-content: center;
 align-items: center;
 border: none;
 padding: 0 10px; /* Adicione padding para melhorar a aparência */
 outline: none; /* Remove a borda ao focar */

  /* Garanta que o input seja clicável */
  pointer-events: auto;
`;

export const Value = styled.div`
 background-color: #00d9ff; 
 font-size: 25px ;
 margin-left: 20px ;
 height: 50px;
 width: 10vw;
 display: flex;
 justify-content: center;
 align-items: center;
`;

export const Person = styled.div`
 background-color: #ff9100; 
 font-size: 25px ; 
 margin-left: 20px ; 
 height: 50px;
 width: 15vw;
 display: flex;
 justify-content: center;
 align-items: center; 
`;

export const Delete = styled.div`
 svg{
    font-size: 25px;
    margin-right: 40px;
    margin-left: 40px;
 }  
`;

export const ToUpdate = styled.div`
 svg{
    font-size: 25px;
 }     
`;


