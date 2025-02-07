import styled from "styled-components";


export const All = styled.div`
 background-color: #E837AB;
 color: aliceblue;
 width: 100vw;  
 height: 100vh; 
 display: flex;
 justify-content: space-around;
 align-items: center;
`;

export const Month = styled.div`
  background-color: rgba(235, 8, 8, 0.5);
  color: #a70ee9;
  width: 20vw;  
  height: 40vh; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  text-align:center;
`;

export const Name = styled.div`
  background-color: rgba(87, 235, 8, 0.5);
  color: #a70ee9;
  width: 20vw;  
  height: 10vh;
  display: flex; 
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export const Percentage = styled.div`
  background-color: rgba(80, 235, 8, 0.865);
  width: 20vw;  
  height: 30vh; 
  color: #a70ee9;
  display: flex; 
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 30px;
  p{
    margin-bottom: 20%;
  }
`;

export const MonthAdd = styled.div`
  background-color: rgba(80, 235, 8, 0.865);
  width: 20vw;  
  height: 40vh;  
  color: #a70ee9;
  display: flex; 
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  font-size: 30px;
  border-radius: 10;
  text-align:center;
  button{
    background-color: rgba(255, 255, 255, 0.0);
    width:18vw;  
    height: 5vh; 
    border: 1px solid #ccc; 
    border-radius: 4px; 
    font-size: 20px; 
    outline: none; 
    box-sizing: border-box; 
    text-align:center;
  }
`;

export const InputName = styled.input`
  background-color: rgba(255, 255, 255, 0.0);
  width:18vw;  
  height: 5vh; 
  padding: 10px; 
  border: 1px solid #ccc; 
  border-radius: 4px; 
  font-size: 20px; 
  outline: none; 
  box-sizing: border-box; 
`;

export const InputtotalFunds = styled.input`
  background-color: rgba(255, 255, 255, 0.0);
  width:18vw;  
  height: 5vh; 
  padding: 10px; 
  border: 1px solid #ccc; 
  border-radius: 4px; 
  font-size: 20px; 
  outline: none; 
  box-sizing: border-box; 
`;

