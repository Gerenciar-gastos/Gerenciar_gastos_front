import axios from "axios";

export default function registerNewMonth(nameMonth, totalFunds, authToken, setNameMonth, setTotalFunds, fetchData) {
    const urlCode = `${import.meta.env.VITE_API_URL}/home/month`;
    const data = {
        name: nameMonth,
        totalFunds
    };
    axios.post(urlCode, data, {
        headers: { Authorization: `Bearer ${authToken}` }
    })
        .then(() => {
            setNameMonth("")
            setTotalFunds("")
            fetchData()
        })
        .catch((error) => {
            console.error("Erro ao buscar dados:", error.response);
        });
}