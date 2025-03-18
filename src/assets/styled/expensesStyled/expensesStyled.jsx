import styled from "styled-components";

export const All = styled.div`
 background-color: #E837AB;
 color: aliceblue;
 width: 100vw;  
 min-height: 100vh;
 display: flex;
 flex-direction: column;
`;

export const ToGoBack = styled.div`
 background-color: #eb0808;
 width: 50px;
 height: 50px;
 margin: 20px;
 margin-top: 70px;
 svg{
    font-size: 50px;
    }
`;

export const Container1 = styled.div`
 display: grid;
 width: 100vw;  
 min-height: 100vh;
 background-color: blue;
 grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const Container = styled.div`
 width: 300px;
 height: 400px;
 background-color: #8af70e;
 margin: 20px;
 border-radius: 5px;
`;

export const NameCard = styled.div`
 background-color: #f70e0e;
 width: 300px;
 height: 25px;
 display: flex;
 justify-content: center;
 align-items: center;
 p{
    font-size: 20px;
 }
 svg{
    font-size: 20px;
    margin-left: 20px;
 }
`;

export const EstablishmentValuePerson = styled.div`
 background-color: #075af5;
 width: 300px;
 height: 25px; 
 display: flex;
 color: black;
`;

export const Establishment = styled.div`
 background-color: #23f507;
 width: 100px;
 height: 25px;
 display: flex;
 justify-content: center;
 align-items: center;  
`;

export const Value = styled.div`
 background-color: #f507a6;
 width: 100px;
 height: 25px; 
 display: flex;
 justify-content: center;
 align-items: center; 
`;

export const Person = styled.div`
 background-color: #ddf507;
 width: 100px;
 height: 25px; 
 display: flex;
 justify-content: center;
 align-items: center;  
`;

export const Total = styled.div`
 width: 300px;
 height: 25px; 
 background-color: #0b88f5;
 color: black;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 padding-right: 20px;
`;