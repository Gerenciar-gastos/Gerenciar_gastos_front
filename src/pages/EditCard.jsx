import { useNavigate, useParams } from "react-router-dom";
import { All, Container, Delete, EstablishmentName, EstablishmentNameValuePersonDeleteToUpdate, Person, ToGoBack, Value, SubmitCancel, AddToSendSubmit, AddToSendCancel, Add } from "../assets/styled/editCardSryled/editCardSryled";
import { AuthContext } from "../contexts/contex";
import { useContext, useState } from "react";
import { CgArrowLeftO } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import { Option } from "../assets/styled/monthEditionStyled/monthEditionStyled";
import { changeOfExpenseName } from "../components/editCard/changeOfExpenseName";
import { expenseValueChange } from "../components/editCard/expenseValueChange";
import { expensePersonChange } from "../components/editCard/expensePersonChange";
import { NameCardcomponents } from "../components/editCard/nameCard";
import NavBar from "../components/Navbar";
import deleteExpenses from "../components/editCard/deleteExpenses";
import { FiPlusSquare } from "react-icons/fi";
import updateExpenses from "../components/editCard/updateExpenses";


export function EditCard() {
    const { id, monthId } = useParams();
    const { data, authToken, setData } = useContext(AuthContext);
    const monthIdParams = parseInt(monthId, 10);
    const idParamns = parseInt(id, 10)
    const navigate = useNavigate();
    const month = data.Month.find(month => month.id === monthIdParams);
    const card = month.card.find(card => card.id === idParamns);
    const [nameCard, setNameCard] = useState(card.name)
    const [expenses, setExpenses] = useState(card.expense);
    const names = [
        "Monique", "Lauro", "Sheure", "Senira", "Patrick", "Gerson",
        "Juliele", "Lucimar"
    ];
   
    function addContainer() {
        const newExpense = {
            id: expenses.length + 1, 
            name: "",
            value: 0,
            person: ""
        };
        setExpenses([...expenses, newExpense]);
    };

    return (
        <All>
            <NavBar />
            <ToGoBack onClick={() => navigate(`/expenses/${monthId}`)} >
                <CgArrowLeftO />
            </ToGoBack>
            <Container>
                <NameCardcomponents nameCard={nameCard} setNameCard={setNameCard} card={card.name} id={card.id} authToken={authToken} setData={setData} navigate={navigate} />
                {expenses.map((expense) => (
                    <EstablishmentNameValuePersonDeleteToUpdate key={expense.id}>
                        <EstablishmentName
                            type="text"
                            placeholder={expense.name}
                            onChange={(e) => changeOfExpenseName(expense.id, e.target.value, expenses, setExpenses)}
                        />
                        <Value
                            type="number"
                            placeholder={`R$ ${expense.value}`}
                            onChange={(e) => expenseValueChange(expense.id, e.target.value, expenses, setExpenses)}
                        />
                        <Person
                            as="select"
                            value={expense.person}
                            onChange={(e) => expensePersonChange(expense.id, e.target.value, expenses, setExpenses)}
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
                            <MdDelete onClick={() => deleteExpenses(authToken, expense.id, setData, expenses, setExpenses)} />
                        </Delete>
                    </EstablishmentNameValuePersonDeleteToUpdate>
                ))}
                <Add onClick={addContainer}>
                    <FiPlusSquare style={{ color: "black", fontSize: 25 }} />
                </Add>
            </Container>
            <SubmitCancel>
                <AddToSendSubmit onClick={() => updateExpenses(authToken, id, setData, expenses, nameCard, card)}>
                    Enviar
                </AddToSendSubmit>
                <AddToSendCancel onClick={() => navigate(`/expenses/${monthId}`)}>
                    Cancelar
                </AddToSendCancel>
            </SubmitCancel>
        </All>
    )
}