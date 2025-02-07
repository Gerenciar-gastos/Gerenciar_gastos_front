import { useContext, useEffect, useState } from "react";
import { All, Month, Name, Percentage, MonthAdd, InputName, InputtotalFunds } from "../assets/styled/homeStyled/monthStyled";
import NavBar from "../components/Navbar";
import { AuthContext } from "../contexts/contex";
import axios from "axios";


export default function Home() {
 
    const { token } = useContext(AuthContext);
    const [authToken, setAuthToken] = useState(localStorage.getItem("authToken") || token);
    const [data, setData] = useState(null);
    const [nameMonth, setNameMonth] = useState("")
    const [totalFunds, setTotalFunds] = useState()

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


    function registerNewMonth(){
        console.log("aqui")
        const urlCode = `${import.meta.env.VITE_API_URL}/home/month`;
        const data = {
            name: nameMonth,
            totalFunds
        };
        axios.post(urlCode, data, {
            headers: { Authorization: `Bearer ${authToken}` }
        })
            .then((response) => {
                console.log("deu certo")
            })
            .catch((error) => {
                console.error("Erro ao buscar dados:", error);
            });
    }
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
            <MonthAdd  >
                <Name>
                    Adicionar mes
                </Name>
                <InputName
                    type="text"
                    placeholder="Digite o mês"
                    value={nameMonth}
                    onChange={(e) => setNameMonth(e.target.value)}
                />
                <InputtotalFunds
                    type="number" 
                    placeholder="Digite o total de fundos"
                    value={totalFunds}
                    onChange={(e) => setTotalFunds(Number(e.target.value))}
                />
                <button onClick={registerNewMonth} >
                    Enviar
                </button>
            </MonthAdd>
        </All>

    );
}
