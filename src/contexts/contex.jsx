import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import fetchData from '../components/home/fetchData';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [authToken, setAuthToken] = useState(() => { return localStorage.getItem("authToken")});   
    const [data, setData] = useState(null);
    useEffect(() => {
        const storedData = localStorage.getItem("data");
        if (storedData) {
            setData(JSON.parse(storedData));
        } else {
            fetchData(authToken, setData);
        }
    }, [authToken]);
    return (
        <AuthContext.Provider value={{ 
            authToken, setAuthToken,
            data, setData
             }}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
