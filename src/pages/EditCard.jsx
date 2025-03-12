import { useNavigate, useParams } from "react-router-dom";
import { All, Container, Delete, EstablishmentName, EstablishmentNameValuePersonDeleteToUpdate, Name, NameCard, Person, ToGoBack, Value, DeleteToUpdate } from "../assets/styled/editCardSryled/editCardSryled";
import { AuthContext } from "../contexts/contex";
import { useContext, useState } from "react";
import { CgArrowLeftO } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import { Option } from "../assets/styled/monthEditionStyled/monthEditionStyled";


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

    const names = [
        "Monique", "Lauro", "Sheure", "Senira", "Patrick", "Gerson",
        "Juliele", "Lucimar"
    ];

    function expenseValueChange(id, newValue) {
        const updatedExpenses = expenses.map(expense =>
            expense.id === id ? { ...expense, value: newValue } : expense
        );
        setExpenses(updatedExpenses);
    };

    function expensePersonChange(id, newPerson) {
        const updatedExpenses = expenses.map(expense =>
            expense.id === id ? { ...expense, person: newPerson } : expense
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
                        <Person
                            as="select"
                            value={expense.person}
                            onChange={(e) => expensePersonChange(expense.id, e.target.value)}
                        >
                            <Option disabled value="">
                                {expense.person}
                            </Option>
                            {names.map((name) => (
                                <Option key={name} value={name}>
                                    {name}
                                </Option>
                            ))}
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