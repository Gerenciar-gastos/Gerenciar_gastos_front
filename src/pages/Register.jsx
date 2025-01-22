import { useState } from "react";
import { All, Conteiner, Ok } from "../styled/userStyled/register";
import { Name } from "../components/register/Name";
import { Email } from "../components/register/Email";
import { Cpf } from "../components/register/Cpf";
import { Password } from "../components/register/Password";
import { ConfirmPassword } from "../components/register/ConfirmPassword";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 


export default function Register() {
    const [cpf, setCpf] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate(); 

    const isButtonDisabled = !(cpf && password && name && email && confirmPassword)

    function RegisterPost() {
        console.log(cpf)
        if (password !== confirmPassword) {
            window.alert("As senhas não conferem");
        }else{
            const urlCode = `${import.meta.env.VITE_API_URL}/user/register`;
            const data = {
                name,
                password,
                cpf,
                email,
            };
            const promise = axios.post(urlCode, data);
            promise.then(() => {
                console.log("cadastro realizado")
                navigate("/login");
            });
            promise.catch((err) => {
                console.log(err.response);
            });
        }
    }


    return (
        <All>
            <Conteiner>
                <Name name={name} setName={setName} />
                <Email email={email} setEmail={setEmail} />
                <Cpf cpf={cpf} setCpf={setCpf} />
                <Password password={password} setPassword={setPassword} setShowPassword={setShowPassword} showPassword={showPassword} />
                < ConfirmPassword confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} showConfirmPassword={showConfirmPassword} setShowConfirmPassword={setShowConfirmPassword} />
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
