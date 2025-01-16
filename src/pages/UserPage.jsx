import styled from "styled-components";
import NavBar from "../components/Navbar";

export default function UserPage() {
   
    return (<>
        <NavBar />
        <Container > Aqui </Container>
        </>
        
    );
}
const Container = styled.p`
 color: black;
 font-size: 30;
 background-color: red;
`;