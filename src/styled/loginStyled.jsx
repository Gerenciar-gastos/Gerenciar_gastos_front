import styled from "styled-components";


export const All = styled.div`
  background-color: #E837AB;
  color: aliceblue;
  width: 100vw;  
  height: 100vh; 
 display: flex;
 justify-content: center;
 align-items: center;
`;

export const Conteiner = styled.div`
  background-color: #0c0b0c;
  color: aliceblue;
  width: 80vw;  
  height: 80vh; 
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
`;

export const LogoLogin = styled.div`
  background-color: #0ce1e8;
  width: 250px;  
  height: 250px;
  border-radius: 50%;
  position: fixed;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
   svg {
    color: #e30de3; 
    font-size: 10rem; 
  }
`;

export const EmailCpf = styled.div`
  background-color: #ec2207;
  width: 60vw;  
  height: 10vh;
  margin-top: 160px;
`;

export const PassWord = styled.div`
  background-color: #e86d09;
  width: 60vw;  
  height: 10vh;
`;

export const SavePassword = styled.div`
  background-color: #e7eb05;
  width: 70vw;   
  height: 10vh;
`;

export const Register = styled.div`
  background-color: #63f40f;
  width: 70vw;   
  height: 10vh;
  font-size: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
