export function expenseValueChange(id, newValue, expenses, setExpenses) {
    const updatedExpenses = expenses.map(expense =>
        expense.id === id ? { ...expense, value: newValue } : expense
    );
    setExpenses(updatedExpenses);
};