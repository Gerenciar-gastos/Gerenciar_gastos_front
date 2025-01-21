import { useState } from "react";
import { All, Conteiner, PassWord, IconePassword, InputPassword, Ok } from "../styled/userStyled/register";
import { GiPadlock } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Name } from "../components/register/Name";
import { Email } from "../components/register/Email";
import { Cpf } from "../components/register/Cpf";
import { Password } from "../components/register/Password";


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

    function toggleConfirmPasswordVisibility() {
        setShowConfirmPassword(!showConfirmPassword);
    }

    return (
        <All>
            <Conteiner>
                <Name name={name} setName={setName} />
                <Email email={email} setEmail={setEmail} />
                <Cpf cpf={cpf} setCpf={setCpf} />
                <Password password={password} setPassword={setPassword} setShowPassword={setShowPassword} showPassword={showPassword} />


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
