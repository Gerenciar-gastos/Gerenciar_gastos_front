import { All, Conteiner, EmailCpf, IconeEmailCpf, InputEmailCpf, LogoLogin, PassWord, Register, SavePassword } from "../styled/loginStyled";
import { AiOutlineUser } from "react-icons/ai";
import { FaUser } from "react-icons/fa6";


export default function Login() {


    return (
        <All>
            <Conteiner>
                <LogoLogin>
                    <FaUser />
                </LogoLogin>
                <EmailCpf>
                    <IconeEmailCpf>
                        <FaUser />
                    </IconeEmailCpf>
                    <InputEmailCpf type="text" placeholder="Digite seu email ou CPF" />
                </EmailCpf>
                <PassWord></PassWord>
                <SavePassword></SavePassword>
                <Register>Login</Register>
            </Conteiner>

        </All >

    );
}

