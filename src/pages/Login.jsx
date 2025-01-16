import { All, Conteiner, EmailCpf, LogoLogin, PassWord, Register, SavePassword } from "../styled/loginStyled";
import { AiOutlineUser } from "react-icons/ai";


export default function Login() {


    return (
        <All>
            <Conteiner>
                <LogoLogin>
                    <AiOutlineUser />
                </LogoLogin>
                <EmailCpf></EmailCpf>
                <PassWord></PassWord>
                <SavePassword></SavePassword>
                <Register>Login</Register>
            </Conteiner>

        </All >

    );
}

