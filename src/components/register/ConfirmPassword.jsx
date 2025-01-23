import PropTypes from "prop-types";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { IconePassword, InputPassword, PassWord } from "../../assets/styled/userStyled/registerStyled";

export function ConfirmPassword({ confirmPassword, setConfirmPassword, showConfirmPassword, setShowConfirmPassword }) {

    function toggleConfirmPasswordVisibility() {
        setShowConfirmPassword(!showConfirmPassword);
    }


    return (
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
    )
}
ConfirmPassword.propTypes = {
    confirmPassword: PropTypes.string.isRequired,
    setConfirmPassword: PropTypes.func.isRequired,
    showConfirmPassword: PropTypes.string.isRequired,
    setShowConfirmPassword: PropTypes.func.isRequired,
};