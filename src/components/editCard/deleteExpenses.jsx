import axios from "axios";

export default function deleteExpenses(authToken, id) {
    const urlCode = `${import.meta.env.VITE_API_URL}/editCard/${id}`;


    axios.delete(urlCode, {
        headers: { Authorization: `Bearer ${authToken}` }
    })
        .then(() => {
            alert("Despesa excluida")
        })
        .catch((error) => {
            console.error("Erro ao excluir despesas:", error);
        });
};