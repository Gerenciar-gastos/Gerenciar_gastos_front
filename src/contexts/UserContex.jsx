import PropTypes from 'prop-types';
import { createContext } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
