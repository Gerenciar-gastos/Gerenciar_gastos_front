import { useContext } from "react";
import { useParams } from "react-router-dom";
import { All, Conteiner, NameCard, NamePersonValue, Name, Person, Value } from "../assets/styled/monthEditionStyled/monthEditionStyled";
import { AuthContext } from "../contexts/contex";

export default function MonthEdition() {
    const { data } = useContext(AuthContext);
    const { id } = useParams(); 

    const selectedMonth = data?.Month?.find((month) => month.id === Number(id));
    return (
        <All>
            {selectedMonth?.card.map((card) => (
                <Conteiner key={card.id}>
                    <NameCard>{card.name}</NameCard>
                    {card.expense.map((expense) => (
                        <NamePersonValue key={expense.id}>
                            <Name>{expense.name}</Name>
                            <Person>{expense.person}</Person>
                            <Value>R$ {expense.value.toFixed(2)}</Value>
                        </NamePersonValue>
                    ))}
                </Conteiner>
            ))}
        </All>
    );
}
