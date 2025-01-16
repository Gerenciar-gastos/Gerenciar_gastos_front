import { All, Conteiner, EmailCpf, IconeEmailCpf, IconePassword, InputEmailCpf, InputPassword, LogoLogin, PassWord, Register, SavePassword } from "../styled/loginStyled";
import { FaUser } from "react-icons/fa6";
import { GiPadlock } from "react-icons/gi";


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
                <PassWord>
                    <IconePassword>
                        <GiPadlock />
                    </IconePassword>
                    <InputPassword type="text" placeholder="Digite a senha" />
                </PassWord>
                <SavePassword></SavePassword>
                <Register>Login</Register>
            </Conteiner>

        </All >

    );
}

