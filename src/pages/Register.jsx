import { useState } from "react";
import { All, Conteiner, InputInformation, PassWord, IconePassword, InputPassword, Ok, IconeName, InputName, IconeEmail, InputEmail, IconeCpf, InputCpf } from "../styled/userStyled/register";
import { FaUser } from "react-icons/fa6";
import { GiPadlock } from "react-icons/gi";
import { formatCpf } from "../utils/formatCpf";
import { MdEmail } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Name } from "../components/register/Name";
import { Email } from "../components/register/Email";
import { Cpf } from "../components/register/Cpf";



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
                <Name name={name} setName={setName} />
                <Email email={email} setEmail={setEmail} />
                <Cpf cpf={cpf} setCpf={setCpf} />
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
