import axios from "axios";
import fetchData from "../home/fetchData";

export default function deleteExpenses(authToken, id, setData) {
    const urlCode = `${import.meta.env.VITE_API_URL}/expenses/${id}`;

    axios.delete(urlCode, {
        headers: { Authorization: `Bearer ${authToken}` }
    })
        .then(() => {
            alert("Despesa excluida")
            fetchData(authToken, setData)
        })
        .catch((error) => {
            console.error("Erro ao excluir despesas:", error);
        });
};