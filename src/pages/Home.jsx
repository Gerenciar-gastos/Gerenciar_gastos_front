import { useContext, useEffect, useState } from "react";
import { All, Month, Name, Percentage } from "../assets/styled/homeStyled/monthStyled";
import NavBar from "../components/Navbar";
import { AuthContext } from "../contexts/contex";
import axios from "axios";


export default function Home() {
 
    const { token } = useContext(AuthContext);
    const [authToken, setAuthToken] = useState(localStorage.getItem("authToken") || token);
    const [data, setData] = useState(null);


    useEffect(() => {
        const urlCode = `${import.meta.env.VITE_API_URL}/home`;

        axios.get(urlCode, {
            headers: { Authorization: `Bearer ${authToken}` } 
        })
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar dados:", error);
            });
    }, [authToken]);

    return (
        <All>
            <NavBar />
            {data?.Month?.map((month) => (
                <Month key={month.id}>
                    <Name>{month.name}</Name>
                    <Percentage>
                        <p>Total gasto</p>
                        {((month.totalSpent / month.totalFunds) * 100).toFixed(2)}%
                    </Percentage>
                </Month>
            ))}
        </All>

    );
}
