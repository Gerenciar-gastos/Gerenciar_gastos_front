import axios from "axios";

export default function registerNewMonth(nameMonth, totalFunds, authToken) {
    const urlCode = `${import.meta.env.VITE_API_URL}/home/month`;
    const data = {
        name: nameMonth,
        totalFunds
    };
    axios.post(urlCode, data, {
        headers: { Authorization: `Bearer ${authToken}` }
    })
        .then(() => {
            console.log("deu certo")
        })
        .catch((error) => {
            console.error("Erro ao buscar dados:", error);
        });
}