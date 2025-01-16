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
  width: 90vw;  
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
  width: 85vw;  
  height: 10vh;
  margin-top: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const IconeEmailCpf = styled.div`
  background-color: #0716ec;
  width: 8vw;  
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  svg {
    color: #e30de3; 
    font-size: 4rem; 
  }
`;

export const InputEmailCpf = styled.input`
  background-color: #eeeae9;
  width: 70vw;  
  height: 8vh; 
  padding: 10px; 
  border: 1px solid #ccc; 
  border-radius: 4px; 
  font-size: 25px; 
  outline: none; 
  box-sizing: border-box; 
`;

export const PassWord = styled.div`
  background-color: #e86d09;
  width: 85vw;  
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: -50px;
`;

export const IconePassword = styled.div`
  background-color: #0716ec;
  width: 8vw;  
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  svg {
    color: #e30de3; 
    font-size: 4rem; 
  }
`;

export const InputPassword = styled.input`
  background-color: #eeeae9;
  width: 70vw;  
  height: 8vh; 
  padding: 10px; 
  border: 1px solid #ccc; 
  border-radius: 4px; 
  font-size: 25px; 
  outline: none; 
  box-sizing: border-box; 
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
