import styled from "styled-components";

export const All = styled.div`
 background-color: #E837AB;
 color: aliceblue;
 width: 100vw;  
 min-height: 100vh;
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
 gap: 50px;
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
