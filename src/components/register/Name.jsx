import PropTypes from "prop-types";
import { FaUser } from "react-icons/fa6";
import { IconeName, InputInformation, InputName } from "../../assets/styled/userStyled/registerStyled";


export function Name({name, setName}){

    return(
        < InputInformation >
            <IconeName>
                <FaUser />
            </IconeName>
            <InputName
                type="text"
                placeholder="Nome Completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </InputInformation >
    )
} 
Name.propTypes = {
    name: PropTypes.string.isRequired,
    setName: PropTypes.func.isRequired,
};