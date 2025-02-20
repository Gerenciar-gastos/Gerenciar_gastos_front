import { useState } from "react";
import { All, Conteiner, NameCard, NamePersonValue, Name, Person, Value, Option, Add, AddToSend } from "../assets/styled/monthEditionStyled/monthEditionStyled";
import { FiPlusSquare } from "react-icons/fi";

export default function MonthEdition() {
    const [nameCard, setNameCard] = useState(""); 
    const [entries, setEntries] = useState([]); 

    const names = [
        "Monique", "Lauro", "Sheure", "Senira", "Patrick", "Gerson",
        "Juliele", "Lucimar"
    ];

    function addEntry ()  {
        setEntries([...entries, { id: entries.length + 1, name: "", person: "", value: "" }]);
    };

    function updateEntry (id, field, newValue)  {
        setEntries(entries.map(entry =>
            entry.id === id ? { ...entry, [field]: newValue } : entry
        ));
    };

    function sendPurchasesData(){
        console.log(entries)
    }

    return (
        <All>
            <Conteiner>
                <NameCard
                    type="string"
                    placeholder="Digite o nome"
                    value={nameCard}
                    onChange={(e) => setNameCard(e.target.value)}
                />
                {entries.map((entry) => (
                    <NamePersonValue key={entry.id}>
                        <Name
                            type="string"
                            placeholder="Digite o nome"
                            value={entry.name}
                            onChange={(e) => updateEntry(entry.id, "name", e.target.value)}
                        />
                        <Person as="select" value={entry.person} onChange={(e) => updateEntry(entry.id, "person", e.target.value)}>
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
                            onChange={(e) => updateEntry(entry.id, "value", e.target.value)}
                        />
                    </NamePersonValue>
                ))}
                <Add onClick={addEntry}>
                    <FiPlusSquare style={{ color: "black", fontSize: 25 }} />
                </Add>

                <AddToSend onClick={sendPurchasesData}>
                    Enviar
                </AddToSend>
            </Conteiner>
        </All>
    );
}
