
import { All, Conteiner1, Profile, LogOut, Close, HandleLogout } from "../assets/styled/navbarStyled/navbarStyled";
import craiyon from "../assets/images/craiyon.png"
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";


export default function NavBar() {
    const navigate = useNavigate();
    const [openProfile, setOpenProfile] = useState(false)

    function profile() {
        setOpenProfile(true)
    }
    function profileLogOut() {
        setOpenProfile(false)
    }
    function handleLogout() {
        localStorage.removeItem("authToken");
        navigate("/");
    }

    return (
        <All>
            <Conteiner1 onClick={() => navigate('/home')}>
                <img src={craiyon} />
            </Conteiner1>
            <Profile onClick={() => profile()}>
                <FaUser />
            </Profile>
            {openProfile && (
                <LogOut >
                    <Close>
                        <IoCloseCircleSharp onClick={() => profileLogOut()} />
                    </Close>
                    <HandleLogout onClick={() => handleLogout()} >
                        Logout
                    </HandleLogout>
                </LogOut>
            )}
        </All >
    );
}

