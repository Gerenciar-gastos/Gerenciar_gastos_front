import { useContext } from "react";
import { AuthContext } from "../contexts/contex";
import { useNavigate, useParams } from "react-router-dom";
import { All, Container, Container1, Establishment, EstablishmentValuePerson, NameCard, Person, ToGoBack, Total, Value } from "../assets/styled/expensesStyled/expensesStyled";
import { CgArrowLeftO } from "react-icons/cg";
import { MdEdit } from "react-icons/md";
import NavBar from "../components/Navbar";

export function Expenses() {
    const { data } = useContext(AuthContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const monthId = parseInt(id, 10);

    const month = data.Month.find(month => month.id === monthId);
    
    function calculateTotalExpenses(expenses) {
        return expenses.reduce((total, expense) => total + expense.value, 0);
    };

    return (
        <All>
            <NavBar />
            <ToGoBack onClick={() => navigate(`/home`)} >
                <CgArrowLeftO />
            </ToGoBack>
            <Container1>
            {month.card.map((card) => (
                <Container key = {card.id}>
                    <NameCard >
                        <p>{card.name}</p>
                        <MdEdit onClick={() => navigate(`/editCard/${id}/${card.id}`)} />
                    </NameCard>
                        {card.expense.map((expense) => (
                            <EstablishmentValuePerson key={expense.id}>
                                <Establishment>{expense.name}</Establishment>
                                <Value>R$ {expense.value}</Value>
                                <Person>{expense.person}</Person>
                            </EstablishmentValuePerson>
                        ))}
                        <Total>
                        Total: R$ {calculateTotalExpenses(card.expense)}
                        </Total>
                </Container>
            ))}
            </Container1>
        </All>
    )
}