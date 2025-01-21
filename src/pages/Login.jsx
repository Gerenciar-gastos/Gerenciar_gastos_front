import { useEffect, useState } from 'react';
import { All, Conteiner, ConteinerSavePassword, EmailCpf, IconeEmailCpf, IconePassword, InputEmailCpf, InputPassword, LogoLogin, Ok, PassWord, Register, SavePassword, SavePasswordRegister } from "../styled/userStyled/loginStyled";
import { FaUser } from "react-icons/fa6";
import { GiPadlock } from "react-icons/gi";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { formatCpf } from '../utils/formatCpf';


export default function Login() {
    const [isChecked, setIsChecked] = useState(false);
    const [cpfEmail, setCpfEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        const savedCpfEmail = localStorage.getItem('savedCpfEmail');
        const savedPassword = localStorage.getItem('savedPassword');
        if (savedCpfEmail && savedPassword) {
            setCpfEmail(savedCpfEmail);
            setPassword(savedPassword);
            setIsChecked(true);
        }
    }, []);

    const handleCheckboxClick = () => {
        setIsChecked(!isChecked);

        if (isChecked) {
            localStorage.setItem('savedCpfEmail', cpfEmail);
            localStorage.setItem('savedPassword', password);
        } else {
            localStorage.removeItem('savedCpfEmail');
            localStorage.removeItem('savedPassword');
        }
    };
    const isButtonDisabled = !(cpfEmail && password)

    function LoginPost() {
        console.log(cpfEmail)
        const urlCode = `${import.meta.env.VITE_API_URL}/user/login`;
        const data = {
            mode: cpfEmail,
            password
        };
        const promise = axios.post(urlCode, data);
        promise.then(() => {
            console.log("aqui")
        });
        promise.catch((err) => {
            console.log(err.response);
        });
    }

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
                    <InputEmailCpf
                        type="text"
                        placeholder="Digite seu email ou CPF"
                        value={cpfEmail}
                        onChange={(e) => setCpfEmail(formatCpf(e.target.value))}
                    />
                </EmailCpf>
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
                <SavePasswordRegister>
                    <SavePassword>
                        <ConteinerSavePassword onClick={handleCheckboxClick}>
                            {isChecked && <AiOutlineCheck />}
                        </ConteinerSavePassword>
                        <p>Salvar senha</p>
                    </SavePassword>
                    <Register>
                        <Link to="/register" style={{ color: 'black', fontSize: '30px', marginRight: '10px' }}>
                            Cadastre-se
                        </Link>
                    </Register>
                </SavePasswordRegister>
                <Ok
                    type="button"
                    onClick={LoginPost}
                    style={{
                        backgroundColor: isButtonDisabled ? 'rgba(255, 255, 255, 0.5)' : '#E837AB', 
                        cursor: isButtonDisabled ? 'not-allowed' : 'pointer' 
                    }}
                    disabled={isButtonDisabled}
                >
                    Login
                </Ok>

            </Conteiner>
        </All >
    );
}
