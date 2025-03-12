export function changeOfExpenseName(id, newName, expenses, setExpenses) {
    const updatedExpenses = expenses.map(expense =>
        expense.id === id ? { ...expense, name: newName } : expense
    );
    setExpenses(updatedExpenses);
};
