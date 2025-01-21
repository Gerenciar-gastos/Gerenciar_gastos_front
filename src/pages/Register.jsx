import { useState } from "react";
import { All, Conteiner, InputInformation, PassWord, IconePassword, InputPassword, Ok, IconeName, InputName, IconeEmail, InputEmail, IconeCpf, InputCpf } from "../styled/userStyled/register";
import { FaUser } from "react-icons/fa6";
import { GiPadlock } from "react-icons/gi";
import { formatCpf } from "../utils/formatCpf";
import { MdEmail } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";



export default function Register() {
    const [cpf, setCpf] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const isButtonDisabled = !(cpf && password && name && email && confirmPassword)

    function RegisterPost() {
        if (password !== confirmPassword) {
            window.alert("As senhas não conferem");
        }
    }

    function togglePasswordVisibility() {
        setShowPassword(!showPassword);
    }

    function toggleConfirmPasswordVisibility() {
        setShowConfirmPassword(!showConfirmPassword);
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
                        type={showPassword ? "text" : "password"}
                        placeholder="Digite a senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="button" onClick={togglePasswordVisibility} style={{ background: 'none', border: 'none' }}>
                        {showPassword ? <FaEye style={{ fontSize: "30px", color: "#E837AB" }} /> : <FaEyeSlash style={{ fontSize: "30px", color: "#E837AB" }} />}
                    </button>
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
                    <button type="button" onClick={toggleConfirmPasswordVisibility} style={{ background: 'none', border: 'none' }}>
                        {showConfirmPassword ? <FaEye style={{ fontSize: "30px", color: "#E837AB" }} /> : <FaEyeSlash style={{ fontSize: "30px", color: "#E837AB" }} />}
                    </button>
                </PassWord>
                <Ok
                    type="button"
                    onClick={RegisterPost}
                    style={{
                        backgroundColor: isButtonDisabled ? 'rgba(255, 255, 255, 0.5)' : '#E837AB',
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
