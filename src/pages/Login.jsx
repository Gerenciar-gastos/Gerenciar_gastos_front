import { All, Conteiner, EmailCpf, LogoLogin, PassWord, Register, SavePassword } from "../styled/loginStyled";

export default function Login() {


    return (
        <All>
            <Conteiner>
                <LogoLogin></LogoLogin>
                <EmailCpf></EmailCpf>
                <PassWord></PassWord>
                <SavePassword></SavePassword>
                <Register>Login</Register>
            </Conteiner>
           
        </All >
       
    );
}

