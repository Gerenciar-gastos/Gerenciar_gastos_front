import { useNavigate, useParams } from "react-router-dom";
import { All, Container, Delete, EstablishmentName, EstablishmentNameValuePersonDeleteToUpdate, Name, NameCard, Person, ToGoBack, ToUpdate, Value, DeleteToUpdate } from "../assets/styled/editCardSryled/editCardSryled";
import { AuthContext } from "../contexts/contex";
import { useContext, useState } from "react";
import { CgArrowLeftO } from "react-icons/cg";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";


export function EditCard() {
    const { id, monthId } = useParams();
    const { data } = useContext(AuthContext);
    const monthIdParams = parseInt(monthId, 10);
    const idParamns = parseInt(id, 10)
    const navigate = useNavigate();

    const month = data.Month.find(month => month.id === monthIdParams);
    const card = month.card.find(card => card.id === idParamns);
    const [nameCard, setNameCard] = useState(card.name)
    const [expenses, setExpenses] = useState(card.expense);

    function changeOfExpenseName(id, newName) {
        const updatedExpenses = expenses.map(expense =>
            expense.id === id ? { ...expense, name: newName } : expense
        );
        setExpenses(updatedExpenses);
    };

    function expenseValueChange(id, newValue) {
        const updatedExpenses = expenses.map(expense =>
            expense.id === id ? { ...expense, value: newValue } : expense
        );
        setExpenses(updatedExpenses);
    };

    console.log(expenses)
    return (
        <All>
            <ToGoBack onClick={() => navigate(`/home`)} >
                <CgArrowLeftO />
            </ToGoBack>
            <Container>
                <NameCard>
                    <Name
                        type="text"
                        placeholder={card.name}
                        value={nameCard}
                        onChange={(e) => setNameCard(e.target.value)}
                    />
                    <DeleteToUpdate>
                        <Delete>
                            <MdDelete />
                        </Delete>
                    </DeleteToUpdate>
                </NameCard>
                {expenses.map((expense) => (
                    <EstablishmentNameValuePersonDeleteToUpdate key={expense.id}>
                        <EstablishmentName
                            type="text"
                            placeholder={expense.name}
                            onChange={(e) => changeOfExpenseName(expense.id, e.target.value)}
                        />
                        <Value
                            type="number"
                            placeholder={expense.value}
                            onChange={(e) => expenseValueChange(expense.id, e.target.value)}
                        />
                        <Person>
                            {expense.person}
                        </Person>
                        <Delete>
                            <MdDelete />
                        </Delete>
                    </EstablishmentNameValuePersonDeleteToUpdate>
                ))}

            </Container>
        </All>
    )
}