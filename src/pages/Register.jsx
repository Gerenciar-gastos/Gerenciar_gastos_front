import { useState } from "react";
import { All, Conteiner, InputInformation, IconeEmailCpf, InputEmailCpf, PassWord, IconePassword, InputPassword, Ok, IconeName, InputName, IconeEmail, InputEmail, IconeCpf, InputCpf } from "../styled/userStyled/register";
import { FaUser } from "react-icons/fa6";
import { GiPadlock } from "react-icons/gi";
import { formatCpf } from "../utils/formatCpf";
import { MdEmail } from "react-icons/md";



export default function Register() {
    const [cpf, setCpf] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const isButtonDisabled = !(cpf && password)

    function RegisterPost(){

    }
    return (
        <All>
            <Conteiner>
                <InputInformation>
                    <IconeName>
                        <FaUser />
                    </IconeName>
                    <InputName
                        type="text"
                        placeholder="Nome Completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </InputInformation>
                <InputInformation>
                    <IconeEmail>
                        <MdEmail />
                    </IconeEmail>
                    <InputEmail
                        type="text"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </InputInformation>
                <InputInformation>
                    <IconeCpf>
                        <FaUser />
                    </IconeCpf>
                    <InputCpf
                        type="text"
                        placeholder="Digite seu CPF"
                        value={cpf}
                        onChange={(e) => setCpf(formatCpf(e.target.value))}
                    />
                </InputInformation>
                <PassWord>
                    <IconePassword>
                        <GiPadlock />
                    </IconePassword>
                    <InputPassword
                        type="text"
                        placeholder="Digite a senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </PassWord>
                <PassWord>
                    <IconePassword>
                        <GiPadlock />
                    </IconePassword>
                    <InputPassword
                        type="text"
                        placeholder="Confirme a senha a senha"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </PassWord>
                <Ok
                    type="button"
                    onClick={RegisterPost}
                    style={{
                        backgroundColor: isButtonDisabled ? '#ccc' : '#E837AB',
                        cursor: isButtonDisabled ? 'not-allowed' : 'pointer'
                    }}
                    disabled={isButtonDisabled}
                >
                    Registre-se
                </Ok>
            </Conteiner>
        </All >
    );
}
