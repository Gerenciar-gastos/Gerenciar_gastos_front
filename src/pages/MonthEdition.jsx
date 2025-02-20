import { useState } from "react";
import { All, Conteiner, NameCard, NamePersonValue, Name, Person, Value, Option } from "../assets/styled/monthEditionStyled/monthEditionStyled";

export default function MonthEdition() {
    const [name, setName] = useState("")
    const [person, setPerson] = useState("")
    const [value, setValue] = useState("")

    const names = [
        "Monique", "Lauro", "Sheure", "Senira", "Patrick", "Gerson",
        "Juliele", "Lucimar"
    ];
    return (
        <All>
            <Conteiner >
                <NameCard
                    type="string"
                    placeholder="Digite o nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}>
                </NameCard>
                <NamePersonValue >
                    <Name
                        type="string"
                        placeholder="Digite o nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Name>
                    <Person as="select" value={person} onChange={(e) => setPerson(e.target.value)}>
                        <Option disabled value="">
                            Selecione
                        </Option>
                        {names.map((names) => (
                            <Option key={names} value={names}>
                                {names}
                            </Option>
                        ))}
                    </Person>
                    <Value
                        type="number"
                        placeholder="R$"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </NamePersonValue>

            </Conteiner>

        </All>
    );
}
