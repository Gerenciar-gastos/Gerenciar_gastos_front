import axios from "axios";
import fetchData from "../home/fetchData";

export default function deleteCard(id, authToken, setData, navigate) {

    const urlCode = `${import.meta.env.VITE_API_URL}/card/${id}`;

    axios.delete(urlCode, {
        headers: { Authorization: `Bearer ${authToken}` }
    })
        .then(() => {
            alert("Cartão excluído do banco de dados.");
            fetchData(authToken, setData);
            navigate('/home')
        })
        .catch((error) => {
            console.error("Erro ao excluir despesas:", error);
        });

}