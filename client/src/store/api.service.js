import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json',
    }
})

export const gptGenerate = async (message) => {
    try {
        return await api.post('/send-message', message);
    } catch (error) {
        console.error('Erro ao mandar prompt', error)
        throw error
    }
}
