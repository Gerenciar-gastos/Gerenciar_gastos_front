import axios from "axios";
import fetchData from "../home/fetchData";

export default function updateExpenses(authToken, id, setData, expenses, nameCard, card) {
    
    function isExpenseChanged(expense1, expense2) {
        return expense1.name !== expense2.name || expense1.person !== expense2.person || expense1.value !== expense2.value;
    };

    const changedExpenses = expenses.filter(expense => {
        const correspondingExpense = card.expense.find(e => e.id === expense.id);
        return correspondingExpense && isExpenseChanged(expense, correspondingExpense);
    });

    function comparingCardName() {
        return nameCard !== card.name;
    }
    console.log(card)
    const isCardNameChanged = comparingCardName();

    const dataToUpdate = {
        expenses: changedExpenses,
        newCardName: isCardNameChanged ? nameCard : null,
        cardId: card.id
    };
    console.log(dataToUpdate)

    if (changedExpenses.length > 0 || isCardNameChanged) {
        const urlCode = `${import.meta.env.VITE_API_URL}/expenses`;

        axios.put(urlCode, dataToUpdate, {
            headers: { Authorization: `Bearer ${authToken}` }
        })
            .then(() => {
                alert("Despesas e/ou nome do card atualizados no banco de dados.");
                fetchData(authToken, setData);
            })
            .catch((error) => {
                alert("Erro ao atualizar despesas e/ou nome do card");
                console.error("Erro ao atualizar despesas e/ou nome do card:", error);
            });
    } else {
        alert("Nenhuma despesa ou nome do card foi alterado.");
    }
}