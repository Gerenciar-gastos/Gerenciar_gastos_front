import PropTypes from "prop-types";
import { MdEmail } from "react-icons/md";
import { IconeEmail, InputEmail, InputInformation } from "../../assets/styled/userStyled/registerStyled";


export function Email({email, setEmail}) {

    return (
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
    )
}

Email.propTypes = {
    email: PropTypes.string.isRequired,
    setEmail: PropTypes.func.isRequired,
};