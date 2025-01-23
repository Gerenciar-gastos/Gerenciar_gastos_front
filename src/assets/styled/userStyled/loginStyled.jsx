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
  background-color: rgba(255, 255, 255, 0.5);
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
  background-color: rgba(255, 255, 255, 1);
  width: 200px;  
  height: 200px;
  border-radius: 50%;
  position: fixed;
  top: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
   svg {
    color: #e30de3; 
    font-size: 8rem; 
  }
`;

export const EmailCpf = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  width: 85vw;  
  height: 10vh;
  margin-top: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const IconeEmailCpf = styled.div`
  width: 8vw;  
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  svg {
    color: #e30de3; 
    font-size: 3rem; 
  }
`;

export const InputEmailCpf = styled.input`
  background-color: rgba(255, 255, 255, 0.0);
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
  background-color: rgba(255, 255, 255, 0.5);
  width: 85vw;  
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: -30px;
`;

export const IconePassword = styled.div`
  width: 8vw;  
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  svg {
    color: #e30de3; 
    font-size: 3rem; 
  }
`;

export const InputPassword = styled.input`
  background-color: rgba(255, 255, 255, 0.0);
  width: 70vw;  
  height: 8vh; 
  padding: 10px; 
  border: 1px solid #ccc; 
  border-radius: 4px; 
  font-size: 25px; 
  outline: none; 
  box-sizing: border-box; 
`;

export const SavePasswordRegister = styled.div`
  width: 85vw;  
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SavePassword = styled.div`
  width: 40vw;  
  height: 8vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  p{
    font-size: 30px;
    color: black;
    text-align: center;
  }
`;

export const ConteinerSavePassword = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  width: 50px;  
  height: 50px;
  border-radius: 10px;
  margin-right: 10px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  svg {
    font-size: 40px; 
    color: #000; 
  }
`;

export const Register = styled.div`
  width: 40vw;  
  height: 8vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Ok = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  width: 70vw;   
  height: 10vh;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: black
`;
