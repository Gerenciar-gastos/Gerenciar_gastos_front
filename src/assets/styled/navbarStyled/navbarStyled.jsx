import styled from "styled-components";


export const All = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  color: #a70ee9;
  width: 100vw;  
  height: 60px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
`;

export const Conteiner1 = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  width: 60px;  
  height: 50px; 
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-left: 10%;
  cursor: pointer;
  img{
    width: 60px;  
    height: 50px; 
    border-radius: 50%;
  }
`;

export const Profile = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  width: 60px;  
  height: 50px; 
  margin-right: 10%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    color: #e30de3; 
    font-size: 2rem; 
  }
`;

export const LogOut = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  width: 300px;  
  height: 300px;
  position : fixed ;
  top: 70px;
  right: 60px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  svg {
    color: #e30de3; 
    font-size: 2rem;
    margin-right :10px ;
    margin-top: 10px;
  }
`;
export const Close = styled.div`
  width:300px ;  
  height: 50px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

export const HandleLogout = styled.button`
  margin-top:  10px;
  width: 200px;  
  height: 100px;
  cursor: pointer;
  color: #e30de3;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-size: 50px;
  margin-bottom: 10px;
`
