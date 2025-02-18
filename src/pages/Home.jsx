import { useContext, useEffect, useState } from "react";
import { All, Month, Name, Percentage, MonthAdd, InputtotalFunds, SelectMonth, Option, FaPenStyled, ToSend } from "../assets/styled/homeStyled/monthStyled";
import NavBar from "../components/Navbar";
import { AuthContext } from "../contexts/contex";
import registerNewMonth from "../components/home/registerNewMonth";
import fetchData from "../components/home/fetchData";
import { useNavigate } from "react-router-dom";


export default function Home() {
    const { token } = useContext(AuthContext);
    const [authToken, setAuthToken] = useState(localStorage.getItem("authToken") || token);
    const [data, setData] = useState(null);
    const [nameMonth, setNameMonth] = useState("");
    const [totalFunds, setTotalFunds] = useState();
    const navigate = useNavigate();

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
                <Month key={month.id} >
                    <div >
                        <Name>{month.name}</Name>
                        <FaPenStyled
                            onClick={() => navigate('/monthEdition')} />
                    </div>
                    <Percentage>
                        <p>Total gasto</p>
                        {((month.totalSpent / month.totalFunds) * 100).toFixed(2)}%
                    </Percentage>
                </Month>
            ))}
            <MonthAdd>
                <Name>Adicionar mês</Name>
                <SelectMonth value={nameMonth} onChange={(e) => setNameMonth(e.target.value)}>
                    <Option disabled value="">
                        Selecione
                    </Option>
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
                <ToSend onClick={() => registerNewMonth(nameMonth, totalFunds, authToken, setNameMonth, setTotalFunds, setData, fetchData)}>
                    Enviar
                </ToSend>
            </MonthAdd>
        </All>
    );
}
