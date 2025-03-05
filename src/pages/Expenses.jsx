import { useContext } from "react";
import { AuthContext } from "../contexts/contex";
import { useNavigate, useParams } from "react-router-dom";
import { All, Container, Container1, Establishment, EstablishmentValuePerson, NameCard, Person, ToGoBack, Value } from "../assets/styled/expensesStyled/expensesStyled";
import { CgArrowLeftO } from "react-icons/cg";

export function Expenses() {
    const { data } = useContext(AuthContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const monthId = parseInt(id, 10);

    const month = data.Month.find(month => month.id === monthId);

    if (!month) {
        return <div>Mês não encontrado</div>;
    };

    return (
        <All>
            <ToGoBack onClick={() => navigate(`/home`)} >
                <CgArrowLeftO />
            </ToGoBack>
            <Container1>
            {month.card.map((card) => (
                <Container key = {card.id}>
                    <NameCard>
                        <p>{card.name}</p>
                    </NameCard>
                    
                        {card.expense.map((expense) => (
                            <EstablishmentValuePerson key={expense.id}>
                                <Establishment>{expense.name}</Establishment>
                                <Value>R$ {expense.value}</Value>
                                <Person>{expense.person}</Person>
                            </EstablishmentValuePerson>
                        ))}
                </Container>
            ))}
            </Container1>

        </All>
    )
}