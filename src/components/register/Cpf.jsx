import { FaUser } from "react-icons/fa6";
import { IconeCpf, InputCpf, InputInformation } from "../../styled/userStyled/register";
import PropTypes from "prop-types";
import { formatCpf } from "../../utils/formatCpf";


export function Cpf({ cpf, setCpf }) {

    return (
        <InputInformation>
            <IconeCpf>
                <FaUser />
            </IconeCpf>
            <InputCpf
                type="text"
                placeholder="Digite seu CPF"
                value={cpf}
                onChange={(e) => {
                    const numericValue = e.target.value.replace(/\D/g, '').slice(0, 11);
                    setCpf(formatCpf(numericValue)); 
                }}
            />
        </InputInformation>
    )
}
Cpf.propTypes = {
    cpf: PropTypes.string.isRequired,
    setCpf: PropTypes.func.isRequired,
};