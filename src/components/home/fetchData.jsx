import axios from "axios";

export default function fetchData(authToken, setData) {
    const urlCode = `${import.meta.env.VITE_API_URL}/home`;

    axios.get(urlCode, {
        headers: { Authorization: `Bearer ${authToken}` }
    })
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            console.error("Erro ao buscar dados:", error);
        });
};