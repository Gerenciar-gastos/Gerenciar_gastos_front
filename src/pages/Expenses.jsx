import { useContext } from "react";
import { AuthContext } from "../contexts/contex";
import { useParams } from "react-router-dom";
import { All, Container, Establishment, EstablishmentValuePerson, NameCard, Person, Value } from "../assets/styled/expensesStyled/expensesStyled";

export function Expenses() {
    const { data } = useContext(AuthContext);
    const { id } = useParams();

    const monthId = parseInt(id, 10);

    const month = data.Month.find(month => month.id === monthId);

    if (!month) {
        return <div>Mês não encontrado</div>;
    };
    
    return (
        <All>
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


        </All>
    )
}