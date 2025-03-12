export function expensePersonChange(id, newPerson, expenses, setExpenses) {
    const updatedExpenses = expenses.map(expense =>
        expense.id === id ? { ...expense, person: newPerson } : expense
    );
    setExpenses(updatedExpenses);
};