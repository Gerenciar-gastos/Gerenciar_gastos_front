import { useContext, useEffect, useState } from "react";
import { All, Month, Name, Percentage, MonthAdd, InputtotalFunds, SelectMonth, Option } from "../assets/styled/homeStyled/monthStyled";
import NavBar from "../components/Navbar";
import { AuthContext } from "../contexts/contex";
import registerNewMonth from "../components/home/registerNewMonth";
import fetchData from "../components/home/fetchData";

export default function Home() {
    const { token } = useContext(AuthContext);
    const [authToken, setAuthToken] = useState(localStorage.getItem("authToken") || token);
    const [data, setData] = useState(null);
    const [nameMonth, setNameMonth] = useState("");
    const [totalFunds, setTotalFunds] = useState();

    useEffect(() => {
        fetchData(authToken, setData);
    }, [authToken]);

    const meses = [
        "Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    return (
        <All>
            <NavBar />
            {data?.Month?.slice(-2).map((month) => (
                <Month key={month.id}>
                    <Name>{month.name}</Name>
                    <Percentage>
                        <p>Total gasto</p>
                        {((month.totalSpent / month.totalFunds) * 100).toFixed(2)}%
                    </Percentage>
                </Month>
            ))}
            <MonthAdd>
                <Name>Adicionar mês</Name>
                <SelectMonth value={nameMonth} onChange={(e) => setNameMonth(e.target.value)}>
                    {meses.map((mes) => (
                        <Option key={mes} value={mes}>
                            {mes}
                        </Option>
                    ))}
                </SelectMonth>
                <InputtotalFunds
                    type="number"
                    placeholder="Digite o total de fundos"
                    value={totalFunds}
                    onChange={(e) => setTotalFunds(Number(e.target.value))}
                />
                <button onClick={() => registerNewMonth(nameMonth, totalFunds, authToken, setNameMonth, setTotalFunds, setData, fetchData)}>
                    Enviar
                </button>
            </MonthAdd>
        </All>
    );
}
