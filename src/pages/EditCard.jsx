import { useNavigate, useParams } from "react-router-dom";
import { All, Container, Delete, EstablishmentName, EstablishmentNameValuePersonDeleteToUpdate, Name, NameCard, Person, ToGoBack, Value, DeleteToUpdate, SubmitCancel, AddToSend } from "../assets/styled/editCardSryled/editCardSryled";
import { AuthContext } from "../contexts/contex";
import { useContext, useState } from "react";
import { CgArrowLeftO } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import { Option } from "../assets/styled/monthEditionStyled/monthEditionStyled";
import { changeOfExpenseName } from "../components/editCard/changeOfExpenseName";
import { expenseValueChange } from "../components/editCard/expenseValueChange";
import { expensePersonChange } from "../components/editCard/expensePersonChange";


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

    const names = [
        "Monique", "Lauro", "Sheure", "Senira", "Patrick", "Gerson",
        "Juliele", "Lucimar"
    ];

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
                            onChange={(e) => changeOfExpenseName(expense.id, e.target.value, expenses, setExpenses)}
                        />
                        <Value
                            type="number"
                            placeholder={expense.value}
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
                            <MdDelete />
                        </Delete>
                    </EstablishmentNameValuePersonDeleteToUpdate>
                ))}
            </Container>
            <SubmitCancel>
                <AddToSend onClick={() => navigate("/home")}>
                    Enviar
                </AddToSend>
                <AddToSend onClick={() => navigate("/home")}>
                    Cancelar
                </AddToSend>
            </SubmitCancel>
        </All>
    )
}