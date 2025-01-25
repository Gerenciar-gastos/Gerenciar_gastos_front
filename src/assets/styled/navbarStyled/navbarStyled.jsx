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
  svg {
    color: #e30de3; 
    font-size: 2rem; 
  }
`;
