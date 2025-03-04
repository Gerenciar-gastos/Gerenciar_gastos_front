import { useContext, useState } from "react";
import { All, Conteiner, NameCard, NamePersonValue, Name, Person, Value, Option, Add, AddToSend, AddCard, ContainerAddCard, SubmitCancel } from "../assets/styled/monthEditionStyled/monthEditionStyled";
import { FiPlusSquare } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/contex";
import { sendPurchasesData } from "../components/MonthEdition/sendPurchasesData";
import { addEntry } from "../components/MonthEdition/addEntry";
import { updateEntry } from "../components/MonthEdition/updateEntry";
import { updateNameCard } from "../components/MonthEdition/updateNameCard";

export default function MonthEdition() {
    const { authToken } = useContext(AuthContext);
    const { id } = useParams()
    const navigate = useNavigate();
    const [containers, setContainers] = useState([
        { id: 1, nameCard: "", entries: [] }
    ]);

    const names = [
        "Monique", "Lauro", "Sheure", "Senira", "Patrick", "Gerson",
        "Juliele", "Lucimar"
    ];

    function addContainer() {
        setContainers([...containers, { id: containers.length + 1, nameCard: "", entries: [] }]);
    };

    return (
        <All>
            <ContainerAddCard>
                {containers.map((container) => (
                    <Conteiner key={container.id}>
                        <NameCard
                            type="string"
                            placeholder="Digite o nome"
                            value={container.nameCard}
                            onChange={(e) => updateNameCard(container.id, e.target.value, setContainers, containers)}
                        />
                        {container.entries.map((entry) => (
                            <NamePersonValue key={entry.id}>
                                <Name
                                    type="string"
                                    placeholder="Digite o nome"
                                    value={entry.name}
                                    onChange={(e) => updateEntry(container.id, entry.id, "name", e.target.value, setContainers, containers)}
                                />
                                <Person as="select" value={entry.person} onChange={(e) => updateEntry(container.id, entry.id, "person", e.target.value, setContainers, containers)}>
                                    <Option disabled value="">
                                        Selecione
                                    </Option>
                                    {names.map((name) => (
                                        <Option key={name} value={name}>
                                            {name}
                                        </Option>
                                    ))}
                                </Person>
                                <Value
                                    type="number"
                                    placeholder="R$"
                                    value={entry.value}
                                    onChange={(e) => updateEntry(container.id, entry.id, "value", Number(e.target.value), setContainers, containers)}
                                />
                            </NamePersonValue>
                        ))}
                        <Add onClick={() => addEntry(container.id, setContainers, containers)}>
                            <FiPlusSquare style={{ color: "black", fontSize: 25 }} />
                        </Add>
                    </Conteiner>
                ))}
                <AddCard onClick={addContainer}>
                    <FiPlusSquare style={{ color: "black", fontSize: 25 }} />
                </AddCard>
            </ContainerAddCard>
            <SubmitCancel>
                <AddToSend onClick={() => sendPurchasesData(id, containers, authToken, navigate)}>
                    Enviar
                </AddToSend>
                <AddToSend onClick={() => navigate("/home")}>
                    Cancelar
                </AddToSend>
            </SubmitCancel>
            
        </All>
    );
}
