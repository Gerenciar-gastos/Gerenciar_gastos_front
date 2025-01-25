
import { All, Conteiner1, Profile } from "../assets/styled/navbarStyled/navbarStyled";
import craiyon from "../assets/images/craiyon.png"
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa6";


export default function NavBar() {
    const navigate = useNavigate(); 

    return (
        <All>
            <Conteiner1 onClick={navigate('/home')}>
                <img src={craiyon} onClick={navigate('/home') }/>
            </Conteiner1>
            <Profile>
                <FaUser />
            </Profile>
        </All >
    );
}

