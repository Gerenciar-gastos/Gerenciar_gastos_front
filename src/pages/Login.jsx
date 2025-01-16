import React, { useState } from 'react';
import { All, Conteiner, ConteinerSavePassword, EmailCpf, IconeEmailCpf, IconePassword, InputEmailCpf, InputPassword, LogoLogin, Ok, PassWord, Register, SavePassword, SavePasswordRegister } from "../styled/loginStyled";
import { FaUser } from "react-icons/fa6";
import { GiPadlock } from "react-icons/gi";
import { AiOutlineCheck } from "react-icons/ai";


export default function Login() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxClick = () => {
        setIsChecked(!isChecked);
    };

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
                <SavePasswordRegister>
                    <SavePassword>
                        <ConteinerSavePassword onClick={handleCheckboxClick}>
                            {isChecked && <AiOutlineCheck />}
                        </ConteinerSavePassword>
                        <p>Salvar senha</p>
                    </SavePassword>
                    <Register></Register>
                </SavePasswordRegister>
                <Ok>Login</Ok>
            </Conteiner>
        </All>
    );
}
