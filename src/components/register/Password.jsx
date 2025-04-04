import PropTypes from "prop-types";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { IconePassword, InputPassword, PassWord } from "../../assets/styled/userStyled/registerStyled";

export function Password({ password, setPassword, setShowPassword, showPassword }) {
    
    function togglePasswordVisibility() {
        setShowPassword(!showPassword);
    }

    return (
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
    )
}
Password.propTypes = {
    password: PropTypes.string.isRequired,
    setPassword: PropTypes.func.isRequired,
    showPassword: PropTypes.string.isRequired,
    setShowPassword: PropTypes.func.isRequired,
};