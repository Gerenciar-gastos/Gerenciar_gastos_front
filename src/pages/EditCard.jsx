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

    console.log(card)
    return (
        <All>
            <ToGoBack onClick={() => navigate(`/home`)} >
                <CgArrowLeftO />
            </ToGoBack>
            <Container>
                <NameCard>
                    <Name type="text"
                        placeholder={card.name}
                        value={nameCard}
                        onChange={(e) => setNameCard(e.target.value)}
                    />
                    <DeleteToUpdate>
                        <Delete>
                            <MdDelete />
                        </Delete>
                        <ToUpdate>
                            <MdModeEdit />
                        </ToUpdate>
                    </DeleteToUpdate>
                    
                </NameCard>
                {card.expense.map((expense) =>(
                    <EstablishmentNameValuePersonDeleteToUpdate key={expense.id}>
                        <EstablishmentName>
                            {expense.name}
                        </EstablishmentName>
                        <Value>
                            {expense.value}
                        </Value>
                        <Person>
                            {expense.person}
                        </Person>
                        <Delete>
                            <MdDelete />
                        </Delete>
                        <ToUpdate>
                            <MdModeEdit />
                        </ToUpdate>
                    </EstablishmentNameValuePersonDeleteToUpdate>
                ))}
                
            </Container>
        </All>
    )
}