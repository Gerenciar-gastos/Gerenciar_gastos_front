import { useContext, useState } from "react";
import { All, Conteiner, NameCard, NamePersonValue, Name, Person, Value, Option, Add, AddToSend, AddCard, ContainerAddCard } from "../assets/styled/monthEditionStyled/monthEditionStyled";
import { FiPlusSquare } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/contex";
import { sendPurchasesData } from "../components/MonthEdition/sendPurchasesData";

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

    function updateNameCard(id, newValue) {
        setContainers(containers.map(container =>
            container.id === id ? { ...container, nameCard: newValue } : container
        ));
    };

    function addEntry(containerId) {
        setContainers(containers.map(container =>
            container.id === containerId
                ? { ...container, entries: [...container.entries, { id: container.entries.length + 1, name: "", person: "", value: "" }] }
                : container
        ));
    };

    function updateEntry(containerId, entryId, field, newValue) {
        setContainers(containers.map(container =>
            container.id === containerId
                ? {
                    ...container,
                    entries: container.entries.map(entry =>
                        entry.id === entryId ? { ...entry, [field]: newValue } : entry
                    )
                }
                : container
        ));
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
                            onChange={(e) => updateNameCard(container.id, e.target.value)}
                        />
                        {container.entries.map((entry) => (
                            <NamePersonValue key={entry.id}>
                                <Name
                                    type="string"
                                    placeholder="Digite o nome"
                                    value={entry.name}
                                    onChange={(e) => updateEntry(container.id, entry.id, "name", e.target.value)}
                                />
                                <Person as="select" value={entry.person} onChange={(e) => updateEntry(container.id, entry.id, "person", e.target.value)}>
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
                                    onChange={(e) => updateEntry(container.id, entry.id, "value", Number(e.target.value))}
                                />
                            </NamePersonValue>
                        ))}

                        <Add onClick={() => addEntry(container.id)}>
                            <FiPlusSquare style={{ color: "black", fontSize: 25 }} />
                        </Add>

                    </Conteiner>
                ))}
                <AddCard onClick={addContainer}>
                    <FiPlusSquare style={{ color: "black", fontSize: 25 }} />
                </AddCard>
            </ContainerAddCard>
            <AddToSend onClick={() => sendPurchasesData(id, containers, authToken, navigate)}>
                Enviar
            </AddToSend>
        </All>
    );
}
