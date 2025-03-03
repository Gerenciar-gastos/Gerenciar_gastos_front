import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AiOutlineCheck } from "react-icons/ai";
import { FaUser } from "react-icons/fa6";
import { GiPadlock } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';
import { All, Conteiner, ConteinerSavePassword, EmailCpf, IconeEmailCpf, IconePassword, InputEmailCpf, InputPassword, LogoLogin, Ok, PassWord, Register, SavePassword, SavePasswordRegister } from "../assets/styled/userStyled/loginStyled";
import { formatCpf } from '../utils/formatCpf';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../contexts/contex';


export default function Login() {
    const [isChecked, setIsChecked] = useState(false);
    const [cpfEmail, setCpfEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate(); 
    const { setAuthToken } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false)
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            try {
                const decodedToken = JSON.parse(atob(token.split('.')[1]));
                const isTokenExpired = decodedToken.exp * 1000 < Date.now();
                if (isTokenExpired) {
                    alert('Sessão expirada, faça login novamente.');
                    localStorage.removeItem('authToken');
                    navigate('/');
                } else {
                    navigate('/home'); 
                }
            } catch (error) {
                console.error('Erro ao decodificar token:', error);
                localStorage.removeItem('authToken');
            }
        }
    }, [navigate]);


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
        const urlCode = `${import.meta.env.VITE_API_URL}/user/login`;
        const data = {
            mode: cpfEmail,
            password
        };
        axios.post(urlCode, data)
            .then((response) => {
                const token = response.data[1].token;
                setAuthToken(token)
                if (token) {
                    localStorage.setItem('authToken', token); 
                    navigate("/home"); 
                }
            })
            .catch((err) => {
                console.error('Erro na requisição:', err.response?.data || err.message);
            });
    }
    function togglePasswordVisibility() {
        setShowPassword(!showPassword);
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
                        type={showPassword ? "text" : "password"}
                        placeholder="Digite a senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="button" onClick={togglePasswordVisibility} style={{ background: 'none', border: 'none' }}>
                        {showPassword ? <FaEye style={{ fontSize: "30px", color: "#E837AB" }} /> : <FaEyeSlash style={{ fontSize: "30px", color: "#E837AB" }} />}
                    </button>
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
