import axios from "axios";

export function sendPurchasesData(id, containers, authToken, navigate) {
    const parsedMonthId = parseInt(id);

    const dataToSend = {
        monthId: parsedMonthId,
        containers: containers.map(container => ({
            id: container.id,
            nameCard: container.nameCard,
            entries: container.entries.map(entry => ({
                id: entry.id,
                person: entry.person,
                name: entry.name,
                value: parseFloat(entry.value)
            }))
        }))
    };

    const urlCode = `${import.meta.env.VITE_API_URL}/expenses`;

    axios.post(urlCode, dataToSend, {
        headers: { Authorization: `Bearer ${authToken}` }
    })
        .then(response => {
            console.log("Dados enviados com sucesso:", response.data);
            alert("Dados enviados com sucesso!");
            navigate(`/home`)
        })
        .catch(error => {
            console.error("Erro ao enviar dados:", error.response.data);
            alert("Erro ao enviar dados: " + error.message);
        });
};
