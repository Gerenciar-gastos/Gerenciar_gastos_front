import { useNavigate, useParams } from "react-router-dom";
import { All, Container, Delete, EstablishmentName, EstablishmentNameValuePersonDeleteToUpdate, Name, NameCard, Person, ToGoBack, ToUpdate, Value, DeleteToUpdate } from "../assets/styled/editCardSryled/editCardSryled";
import { AuthContext } from "../contexts/contex";
import { useContext } from "react";
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

    console.log(card)
    return (
        <All>
            <ToGoBack onClick={() => navigate(`/home`)} >
                <CgArrowLeftO />
            </ToGoBack>
            <Container>
                <NameCard>
                    <Name>{card.name}</Name>
                    <DeleteToUpdate>
                        <Delete>
                            <MdDelete />
                        </Delete>
                        <ToUpdate>
                            <MdModeEdit />
                        </ToUpdate>
                    </DeleteToUpdate>
                    
                </NameCard>
                <EstablishmentNameValuePersonDeleteToUpdate>
                    <EstablishmentName></EstablishmentName>
                    <Value></Value>
                    <Person></Person>
                    <Delete></Delete>
                    <ToUpdate></ToUpdate>
                </EstablishmentNameValuePersonDeleteToUpdate>
            </Container>
        </All>
    )
}