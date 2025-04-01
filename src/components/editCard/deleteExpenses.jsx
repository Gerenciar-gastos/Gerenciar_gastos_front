import axios from "axios";
import fetchData from "../home/fetchData";

export default function deleteExpenses(authToken, id, setData, expenses, setExpenses) {
    const expenseToDelete = expenses.find(expense => expense.id === id);
    console.log("aqui")

    if (!expenseToDelete.name && !expenseToDelete.value && !expenseToDelete.person) {
        const updatedExpenses = expenses.filter(expense => expense.id !== id);
        setExpenses(updatedExpenses);
    } else {

        const urlCode = `${import.meta.env.VITE_API_URL}/expenses/${id}`;

        axios.delete(urlCode, {
            headers: { Authorization: `Bearer ${authToken}` }
        })
            .then(() => {
                alert("Despesa excluída do banco de dados.");
                const updatedExpenses = expenses.filter(expense => expense.id !== id);
                setExpenses(updatedExpenses);
                fetchData(authToken, setData); 
            })
            .catch((error) => {
                console.error("Erro ao excluir despesas:", error);
            });
    }
}